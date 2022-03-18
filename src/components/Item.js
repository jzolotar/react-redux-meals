import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledItem } from './styles/Item.styled';
import { addItem } from '../store';
import ItemAlert from './ItemAlert';

const Item = (props) => {
  const amountRef = useRef();
  const [alert, setAlert] = useState({ show: false, message: '', status: '' });

  const dispatch = useDispatch();

  const showAlert = (show = false, message = '', status = '') => {
    setAlert({ show, message, status });
  };
  const { title, price, img, desc, id } = props.data;

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const amount = amountRef.current.value;
    if (!amount) {
      showAlert(true, 'please enter some value', 'danger');
      return;
    } else {
      const item = { title, price, id, amount: Number(amount) };
      dispatch(addItem(item));
      showAlert(true, 'item has been added', 'success');
    }
  };

  return (
    <StyledItem {...alert}>
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
        {alert.show && <ItemAlert {...alert} removeAlert={showAlert} />}
      </section>
    </StyledItem>
  );
};

export default Item;
