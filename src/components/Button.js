import { StyledButton } from './styles/Button.styled';

const Button = (props) => {
  const clickHandler = () => {
    const data = props.text;
    props.onClickHandler(data);
  };

  return <StyledButton onClick={clickHandler}>{props.text}</StyledButton>;
};

export default Button;
