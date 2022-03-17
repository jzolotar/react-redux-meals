import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledItem } from './styles/Item.styled';
import { addItem } from '../store';

const Item = (props) => {
  const amountRef = useRef();
  const dispatch = useDispatch();
  const { title, price, img, desc, id } = props.data;

  const onSubmitHandler = (event) => {
    const amount = amountRef.current.value;

    const item = { title, price, id, amount: Number(amount) };
    event.preventDefault();

    dispatch(addItem(item));
  };

  return (
    <StyledItem>
      <img src={img} alt='' />
      <section>
        <header>
          <h3>{title.toUpperCase()}</h3>
          <span>${price}</span>
        </header>
        <p>{desc}</p>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor=''>Amount</label>
          <input
            ref={amountRef}
            defaultValue={1}
            type='number'
            min='1'
            max='5'
          />
          <button>Add</button>
        </form>
      </section>
    </StyledItem>
  );
};

export default Item;
