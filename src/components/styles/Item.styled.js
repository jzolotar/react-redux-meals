import styled from 'styled-components';

export const StyledItem = styled.article`
  padding: 1rem 2rem;
  color: #333;
  margin-bottom: 2rem;

  img {
    border: 0.25rem solid #c59d5f;
    border-radius: 5px;
    margin-bottom: 0.75rem;
    object-fit: cover;
    display: grid;
    place-items: center;
    @media (min-width: 768px) {
      height: 150px;
    }
    @media (max-width: 767px) {
      height: 220px;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    header {
      display: flex;
      text-align: center;
      justify-content: space-between;
      align-items: center;
      align-content: center;
      padding-bottom: 0.3rem;
      border-bottom: 2.5px dotted #333;

      h3 {
        font-size: 0.9rem;
        @media (min-width: 768px) {
          font-size: 1.2rem;
        }
      }

      span {
        font-size: 0.9rem;
        color: #c59d5f;
        font-weight: 900;
        @media (min-width: 768px) {
          font-size: 1.2rem;
        }
      }
    }

    p {
      font-size: 0.92rem;
      padding: 0.5rem 0;
    }

    form {
      margin: 0;
      padding: 0;
      width: 100%;
      margin-top: 0.5rem;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr 3fr;

      @media (min-width: 768px) {
        grid-template-columns: 1fr 3fr 5fr;
      }

      label {
        font-size: 0.8rem;
        font-weight: bolder;

        @media (min-width: 768px) {
          font-size: 0.95rem;
        }
      }
      input {
        padding: 0.25rem 0.3rem;
        margin: 0;
        border-color: transparent;
        width: 3rem;
        border-right: none;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        padding-left: 0.55rem;
        width: 100%;
        outline: none;
        @media (min-width: 768px) {
          margin-left: 0.5rem;
          font-size: 0.95rem;
        }

        /* Chrome, Safari, Edge, Opera */
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        /* Firefox */
        &[type='number'] {
          -moz-appearance: textfield;
        }
      }

      button {
        padding: 0.25rem 0.3rem;
        margin: 0;
        border-left: none;
        cursor: pointer;
        border-color: transparent;
        background: #c59d5f;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        font-size: 0.8rem;
        font-weight: bolder;
        transition: all 0.5s ease-in-out;
        @media (min-width: 768px) {
          font-size: 0.95rem;
        }
        &:hover {
          background-color: #333;
          color: #c59d5f;
        }
      }
    }

    p:last-child {
      position: absolute;
      top: 105%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      padding: 0.25rem 0.4rem;
      margin-top: 1rem;
      text-align: center;

      border-radius: 5px;
      font-weight: bold;
      font-size: 0.9rem;

      &.danger {
        color: red;
        background-color: #ffb7b5;
      }
      &.success {
        color: green;
        background-color: #c5e384;
      }
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 225px 1fr;
    grid-gap: 1rem;
    font-size: 1rem;
    max-width: 65rem;
  }
`;
