import { StyledNav } from './styles/Nav.styled';
import { BiShoppingBag } from 'react-icons/bi';
import { useSelector } from 'react-redux';

const Nav = ({ modalHandler }) => {
  const items = useSelector((state) => state.items);
  return (
    <StyledNav>
      <h1>ReactMeals</h1>
      <div>
        <button onClick={() => modalHandler()}>
          <BiShoppingBag />
        </button>
        <span>{items.length}</span>
      </div>
    </StyledNav>
  );
};

export default Nav;
