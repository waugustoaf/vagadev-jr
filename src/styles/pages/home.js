import styled from 'styled-components';

export const Container = styled.div`
  > section.cards {
    width: 95%;
    max-width: 1189px;
    margin: 0 auto;

    padding: 1rem;
    margin-top: -7rem;
    position: relative;

    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  @media screen and (max-width: 768px) {
    > section.cards {
      margin-top: 1rem;
      flex-direction: column;
    }
  }
`;
