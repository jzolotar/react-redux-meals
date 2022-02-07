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
  }
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
    margin-top: 1.2rem;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 225px 1fr;
    grid-gap: 1rem;
    font-size: 1rem;
    max-width: 65rem;
  }
`;
