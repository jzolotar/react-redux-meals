import { StyledButton } from './styles/Button.styled';

const Button = (props) => {
  const data = props.text;
  return <StyledButton>{props.text}</StyledButton>;
};

export default Button;
