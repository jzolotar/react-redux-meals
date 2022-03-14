import { StyledNav } from './styles/Nav.styled';
import { BiShoppingBag } from 'react-icons/bi';

const Nav = () => {
  return (
    <StyledNav>
      <h1>ReactMeals</h1>
      <div>
        <button>
          <BiShoppingBag />
        </button>
        <span>4</span>
      </div>
    </StyledNav>
  );
};

export default Nav;
