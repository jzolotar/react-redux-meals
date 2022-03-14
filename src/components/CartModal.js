import { StyledModal } from './styles/Modal.styled';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { Fragment } from 'react';
const ModalOverlay = styled.section`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffff;
  opacity: 0.75;
`;

const CartModal = ({ modalHandler }) => {
  return (
    <Fragment>
      <StyledModal>
        <section>
          <article>
            <h3>
              Total Amount <span>4</span>$
            </h3>
            <ul>
              <li>
                <div>
                  <h4>
                    Burger <span>x4</span>
                  </h4>
                  <small>19.99$</small>
                </div>

                <div>
                  <button>
                    <AiOutlinePlus />
                  </button>
                  <button>
                    <AiOutlineMinus />
                  </button>
                </div>
              </li>
            </ul>
          </article>

          <button onClick={() => modalHandler()}>Close</button>
        </section>
      </StyledModal>
      <ModalOverlay />
    </Fragment>
  );
};

export default CartModal;
