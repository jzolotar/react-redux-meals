import styled from 'styled-components';

export const Section = styled.section`
  margin: 0 auto;
  @media (min-width: 1300px) {
    display: grid;
    width: 1250px;
    max-width: 1250px;
    grid-template-columns: 1fr 1fr;
  }
`;
