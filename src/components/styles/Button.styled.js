import styled from 'styled-components';

export const StyledButton = styled.button`
  color: #c59d5f;
  font-weight: 900;
  font-size: 0.95rem;
  letter-spacing: 0.1rem;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0.25rem 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }

  &:hover {
    color: #fff;
    background: #c59d5f;
    border-radius: 5px;
  }
`;
