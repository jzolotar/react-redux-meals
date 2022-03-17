import { StyledModal } from './styles/Modal.styled';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai';
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementAmount, incrementAmount } from '../store';

//styles for modal overlay
const ModalOverlay = styled.section`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffff;
  opacity: 0.75;
`;

//CartItem component
const CartItem = ({ title, amount, totalPrice, id, price }) => {
  const dispatch = useDispatch();
  const onIncrementHandler = () => {
    const item = { title, amount, totalPrice, id, price };
    console.log(totalPrice, amount);
    dispatch(incrementAmount(item));
  };
  const onDecrementHandler = () => {
    const item = { title, amount, totalPrice, id, price };
    dispatch(decrementAmount(item));
  };
  return (
    <article>
      <div>
        <h4>
          {title} <span>{`x${Number(amount).toFixed(0)}`}</span>
        </h4>
        <small>{`$${Number(totalPrice).toFixed(2)}`}</small>
      </div>

      <div>
        <button onClick={onIncrementHandler}>
          <AiOutlinePlus />
        </button>
        <button onClick={onDecrementHandler}>
          <AiOutlineMinus />
        </button>
      </div>
    </article>
  );
};

//CartModal component that contains CartItem
const CartModal = ({ modalHandler }) => {
  const items = useSelector((state) => state.items);
  const totalAmount = useSelector((state) => state.totalAmount);
  return (
    <Fragment>
      <StyledModal>
        <h3>
          Total Amount <span>{totalAmount.toFixed(2)}</span>$
        </h3>
        <section>
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </section>
        <button className='close' onClick={() => modalHandler()}>
          <AiOutlineClose className='icon' />
        </button>
      </StyledModal>
      <ModalOverlay />
    </Fragment>
  );
};

export default CartModal;
