import { StyledMenu } from './styles/Menu.styled';
import Button from './Button';

const Menu = () => {
  return (
    <StyledMenu>
      <Button text={'All'} />
      <Button text={'Breakfast'} />
      <Button text={'Lunch'} />
      <Button text={'Shakes'} />
    </StyledMenu>
  );
};

export default Menu;
