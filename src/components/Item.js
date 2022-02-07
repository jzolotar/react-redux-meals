import { StyledItem } from './styles/Item.styled';

const Item = (props) => {
  console.log(props.data);
  const { title, price, img, desc } = props.data;

  return (
    <StyledItem>
      <img src={img} alt='' />
      <div>
        <header>
          <h3>{title.toUpperCase()}</h3>
          <span>${price}</span>
        </header>

        <p>{desc}</p>
      </div>
    </StyledItem>
  );
};

export default Item;
