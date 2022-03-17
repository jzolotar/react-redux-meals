import styled from 'styled-components';

export const StyledModal = styled.section`
  //centering
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18rem;
  max-width: 100%;
  height: 32.5rem;
  max-height: 100%;
  z-index: 1010;
  overflow: auto;
  @media (min-width: 768px) {
    width: 32rem;
    max-width: 100%;
    height: 36rem;
    max-height: 100%;
  }
  h3 {
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translate(-50%, 0);
    color: #ffffff;
    z-index: 1100;
    text-align: center;
    font-size: 1rem;
    @media (min-width: 768px) {
      font-size: 1.4rem;
    }
    & span {
      color: #c59d5f;
    }
  }

  section {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    overflow: auto;
    border-radius: 15px;
    background: #333;
    color: #ffffff;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
    article {
      margin-top: 1.1rem;
      background-color: #c59d5f;
      color: #333;
      padding: 0.4rem 0.3rem;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.75rem;

      &:nth-child(1) {
        margin-top: 4.2rem;
      }

      div:nth-child(1) {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        h4 {
          text-transform: capitalize;
          @media (min-width: 768px) {
            font-size: 1rem;
          }
          span {
            text-transform: lowercase;
          }
        }

        small {
          font-weight: bold;
          font-style: italic;
          text-align: center;
          @media (min-width: 768px) {
            font-size: 0.85rem;
          }
        }
      }

      div:nth-child(2) {
        display: flex;
        gap: 0.4rem;

        button {
          cursor: pointer;
          border: 1px solid #ffffff;
          padding: 0.1rem 0.4rem;
          text-align: center;
          font-size: 0.75rem;
        }
      }
    }
  }

  button.close {
    position: absolute;
    top: 5px;
    right: 3px;
    cursor: pointer;
    border-color: transparent;
    background-color: transparent;
    color: #333;
    border-radius: 5px;

    & .icon {
      color: #ffffff;
      font-size: 1.5rem;
      transform: scale(1.05);
      @media (min-width: 768px) {
        transform: scale(1.3);
      }

      :hover {
        transform: scale(1.5);
      }
    }
  }
`;
