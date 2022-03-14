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

  section {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px 35px;
    overflow: auto;
    border-radius: 15px;
    background: #333;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    article {
      h3 {
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
        text-align: center;
        font-size: 1rem;
      }
      li {
        width: 100%;
        color: #333;
        background-color: #c59d5f;
        padding: 0.4rem 0.3rem;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        div {
          display: flex;
          gap: 0.4rem;
          button {
            cursor: pointer;
            border: 1px solid #ffffff;
            padding: 0.1rem 0.4rem;
            text-align: center;
            font-size: 1rem;
          }
        }

        small {
          font-weight: bold;
          font-style: italic;
        }
      }
    }

    button {
      cursor: pointer;
      border-color: transparent;
      background-color: #ffffff;
      color: #333;
      border-radius: 5px;
    }
  }
`;
