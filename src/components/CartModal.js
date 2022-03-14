import { StyledModal } from './styles/Modal.styled';
import styled from 'styled-components';
import { Fragment } from 'react/cjs/react.production.min';

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

const CartModal = () => {
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
                <h4>
                  Burger <span>x4</span>
                </h4>
                <small>19.99$</small>
                <div>
                  <button>+</button>
                  <button>-</button>
                </div>
              </li>
            </ul>
          </article>

          <button>Close</button>
        </section>
      </StyledModal>
      <ModalOverlay />
    </Fragment>
  );
};

export default CartModal;
