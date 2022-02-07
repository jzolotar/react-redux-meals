import styled from 'styled-components';

export const StyledMenu = styled.section`
  margin-top: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 40rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    align-content: center;
    margin-bottom: 4.5rem;
  }
`;
