import { StyledMenu } from './styles/Menu.styled';
import Button from './Button';

const Menu = ({ filterHandler }) => {
  return (
    <StyledMenu>
      <Button onClickHandler={filterHandler} text={'All'} />
      <Button onClickHandler={filterHandler} text={'Breakfast'} />
      <Button onClickHandler={filterHandler} text={'Lunch'} />
      <Button onClickHandler={filterHandler} text={'Shakes'} />
    </StyledMenu>
  );
};

export default Menu;
