import styled, { css } from 'styled-components';

export const Container = styled.header`
  padding-top: 2.75rem;
  width: 95%;
  max-width: 1189px;
  margin: auto;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > div.tab {
    display: flex;
    align-items: center;

    > button {
      background: transparent;
      border: none;
      margin-right: 2.625rem;
    }

    img {
      width: 163px;
      height: 35px;
    }
  }

  nav {
    color: ${props => props.theme.colors.shape};

    display: flex;
  }

  @media screen and (max-width: 728px) {
    > div button {
      margin-right: 0.5rem;
    }

    ${props =>
      props.isMenuVisible &&
      css`
        width: 100%;
        background-color: ${props => props.theme.colors.primary};
      `}
  }
`;

export const LinkContainer = styled.a`
  display: flex;
  align-items: center;

  font-size: 0.875rem;
  font-weight: 500;

  margin-left: 2.5rem;
  cursor: pointer;
  transition: filter 0.2s;

  img {
    height: 1.5rem;
  }

  > div {
    margin-right: 1rem !important;
  }

  &:hover {
    filter: brightness(0.8);
  }

  ${props =>
    !props.last &&
    css`
      &:after {
        content: '';
        height: 100%;
        width: 1px;
        background: ${props => props.theme.colors.shape};
        margin-left: 2.625rem;
      }
    `}

  @media screen and (max-width: 768px) {
    margin-left: 1rem;

    > span {
      display: none;
    }

    &:after {
      display: none;
    }
  }
`;
