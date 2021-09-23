import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;

  > div {
    flex: 3;
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem 3rem;
    background: ${props => props.theme.colors.primary};

    > div {
      width: 2.5rem;
    }
  }

  > span {
    flex: 7;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem 3rem;
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.shape};
    font-size: 0.875rem;
  }

  @media screen and (max-width: 768px) {
    > div {
      flex: 1;
      padding: 1rem;
      justify-content: center;
    }
    > span {
      flex: 9;
    }
  }
`;
