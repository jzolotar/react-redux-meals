import { StyledItem } from './styles/Item.styled';

const Item = (props) => {
  console.log(props.data);
  const { title, price, img, desc } = props.data;

  return (
    <StyledItem>
      <img src={img} alt='' />
      <section>
        <header>
          <h3>{title.toUpperCase()}</h3>
          <span>${price}</span>
        </header>
        <p>{desc}</p>
        <form>
          <label htmlFor=''>Amount</label>
          <input type='number' />
          <button type='submit'>Add</button>
        </form>
      </section>
    </StyledItem>
  );
};

export default Item;
