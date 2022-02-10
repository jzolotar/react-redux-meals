import { StyledMenu } from './styles/Menu.styled';
import Button from './Button';

const Menu = (props) => {
  return (
    <StyledMenu>
      <Button onClickHandler={props.onClickHandler} text={'All'} />
      <Button onClickHandler={props.onClickHandler} text={'Breakfast'} />
      <Button onClickHandler={props.onClickHandler} text={'Lunch'} />
      <Button onClickHandler={props.onClickHandler} text={'Shakes'} />
    </StyledMenu>
  );
};

export default Menu;
