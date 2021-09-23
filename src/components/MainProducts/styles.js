import styled from 'styled-components';

export const Container = styled.section`
  width: 95%;
  max-width: 1189px;
  margin: 2rem auto;

  padding: 1rem;

  > header {
    display: flex;
    align-items: center;

    > div {
      height: 1.6rem;
      width: 1.6rem;
    }

    h2 {
      margin-left: 1rem;
      font-size: 2rem;
      color: ${props => props.theme.colors.primary};
      font-weight: 200;
    }
  }
`;
