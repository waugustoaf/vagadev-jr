import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (max-width: 768px) {
    background-color: ${props => props.theme.colors.shape};
  }
`;

export const Content = styled.div`
  width: 24rem;
  background-color: ${props => props.theme.colors.secondary};
  position: absolute;
  right: -10rem;
  top: 18rem;
  transform: rotate(90deg);

  border-radius: 0 0 5px 0;

  display: flex;

  div.infos {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.4rem;

    span {
      font-size: 0.875rem;
      color: ${props => props.theme.colors.shape};
      text-transform: uppercase;
    }

    div {
      background-color: ${props => props.theme.colors.shape};
      width: 6rem;
      height: 2px;
    }
  }

  div.pagination {
    background-color: ${props => props.theme.colors.primary};
    border-radius: 0 0 0 5px;
    width: 3.9rem;

    transform: rotate(270deg);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      color: ${props => props.theme.colors.shape};
      font-size: 0.875rem;
      margin-bottom: 4px;
      padding-top: 4px;
    }

    span {
      display: flex;
      gap: 0.3rem;

      button {
        background-color: transparent;
        border: none;
        color: ${props => props.theme.colors.shape};
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    transform: rotate(0);
    position: static;
    border-radius: 0 0 0 10px;

    div.pagination {
      border-radius: 0;

      transform: rotate(0);

      flex-direction: row;
      justify-content: center;
      align-items: center;

      width: auto;
      padding: 0 1rem;

      p {
        margin-right: 0.6rem;
      }

      span {
        display: flex;
        gap: 0.3rem;

        button {
          background-color: transparent;
          border: none;
          color: ${props => props.theme.colors.shape};
        }
      }
    }
  }
`;
