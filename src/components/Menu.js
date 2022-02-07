import { StyledMenu } from './styles/Menu.styled';
import Button from './Button';

const Menu = (props) => {
  return (
    <StyledMenu>
      <Button clickHandler={props.clickHandler} text={'All'} />
      <Button clickHandler={props.clickHandler} text={'Breakfast'} />
      <Button clickHandler={props.clickHandler} text={'Lunch'} />
      <Button clickHandler={props.clickHandler} text={'Shakes'} />
    </StyledMenu>
  );
};

export default Menu;
