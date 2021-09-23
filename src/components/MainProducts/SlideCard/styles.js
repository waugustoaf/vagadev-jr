import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 18rem;

  box-shadow: 0px 4px 20px 7px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  margin: 1rem auto 1rem;

  > div.image {
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid ${props => props.theme.colors.secondary};

    > div {
      width: 16rem;
    }
  }

  > div.details {
    border-radius: 0 0 10px 10px;
    padding: 1.5rem 2rem;
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;

    p {
      font-size: 0.8rem;
    }

    span {
      display: inline-block;
      margin-top: 1.5rem;

      font-size: 1rem;
      font-weight: 900;
    }

    button {
      border: none;
      background: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.shape};
      border-radius: 5px;
      padding: 0.7rem 0;
      width: 80%;
      margin: 1.2rem auto 0;
      font-weight: 900;
      transition: filter 0.3s;

      &:hover {
        filter: brightness(0.95);
      }
    }
  }
`;

export const ModalContent = styled.div`
  width: 90vw;
  max-width: 22rem;

  header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 1rem 0;

    button {
      background: transparent;
      border: none;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }

      svg {
        color: ${props => props.theme.colors.fontPrimary};
        background: red;
        font-size: 1.5rem;
        margin-left: auto;
        border-radius: 50%;
      }
    }
  }

  section {
    margin-top: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-weight: 200;
      font-size: 1.6rem;
      text-align: center;
      padding: 0 1rem;
    }
    &::before {
      content: '';
      height: 1px;
      width: 19%;
      background: ${props => props.theme.colors.primary};
    }
    &::after {
      content: '';
      height: 1px;
      width: 19%;
      background: ${props => props.theme.colors.primary};
    }
  }

  footer {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;

    img {
      width: 13rem;
    }
  }
`;
