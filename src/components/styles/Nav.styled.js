import styled from 'styled-components';

export const StyledNav = styled.nav`
  height: 5rem;
  background-color: #c59d5f;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 2rem;

  h1 {
    font-size: 1.5rem;

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }

  div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    button {
      padding: 0;
      margin: 0;
      border: none;
      background-color: transparent;
      font-size: 1.7rem;
      cursor: p;
      @media (min-width: 768px) {
        font-size: 2.5rem;
      }
    }

    p {
      font-weight: bold;
      @media (min-width: 768px) {
        font-size: 1rem;
      }
    }

    span {
      position: absolute;
      top: -3px;
      left: -7px;
      background-color: #ffffff;
      color: #000;
      padding: 0.1rem 0.2rem;
      border-radius: 50px;
      display: grid;
      place-items: center;

      @media (min-width: 768px) {
        top: -3px;
        left: -10px;
        padding: 0.1rem 0.5rem;
        font-size: 0.9rem;
      }
    }
  }
`;
