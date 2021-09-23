import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 6rem;
  left: -1rem;
  padding: 1rem;
  z-index: 2;

  color: ${props => props.theme.colors.shape};

  border: 2px solid ${props => props.theme.colors.secondary};
  background: ${props => props.theme.colors.primary};
  border-radius: 5px;
  box-shadow: 9px 9px 0px -2px ${props => props.theme.colors.secondary};

  display: flex;
  gap: 1rem;

  > div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h4 {
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 0.8rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &::before {
    content: '';
    border-style: solid;
    border-color: ${props => props.theme.colors.secondary} transparent;
    border-width: 0px 6px 6px;
    bottom: 100%;
    position: absolute;
    left: 3%;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: calc(100vh - 72px);
    left: 0;
    top: 5;
    margin-top: -12px;

    flex-direction: column;

    box-shadow: none;
    border: none;
    border-radius: 0;

    overflow-y: auto;

    > div {
      width: 100%;

      h4 {
        font-size: 1.5rem;
      }

      > div {
        width: 100%;
        button {
          width: 100%;
        }

        &::after {
          content: '';
          background: #062c38;
          height: 2px;
          width: 100%;
          margin: 1rem 0;
        }
      }
    }

    &::before {
      border: none;
    }
  }
`;

export const GameButton = styled.button`
  color: ${props => props.theme.colors.shape};
  background: transparent;
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
  width: 12rem;
  text-align: left;

  ${props =>
    props.isActive &&
    css`
      background: ${props => props.theme.colors.secondary};
    `};
`;
