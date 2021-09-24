import { rgba } from 'polished';
import styled, { keyframes } from 'styled-components';

const enterAnimation = keyframes`
  from {
    transform: translateX(2rem);
  }
  to {
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

export const HeaderContainer = styled.div`
  position: absolute;
  margin: 2rem;
  top: 0;
  left: 0;
  padding: 1rem;
  border-radius: 10px;
  transition: background 0.3s;

  &:hover {
    background-color: ${props => rgba(props.theme.colors.secondary, 0.2)};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  img {
    width: 163px;
    height: 35px;
  }
`;

export const Image = styled.div`
  flex: 1;
  background: url('/svg/game.svg') center center / contain no-repeat;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;

  background-color: ${props => rgba(props.theme.colors.secondary, 0.2)};
  animation: ${enterAnimation} 0.5s linear;

  height: 100%;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;

  h3 {
    font-weight: 400;
    font-size: 0.875rem;
  }

  form {
    margin-top: 3rem;

    display: flex;
    flex-direction: column;

    button {
      margin-top: 3rem;
      width: 30%;
      background: ${props => props.theme.colors.secondary};
      border: none;
      color: ${props => props.theme.colors.fontPrimary};
      padding: 1rem 2rem;
      border-radius: 10px;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
