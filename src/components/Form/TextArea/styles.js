import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  background: ${props => props.theme.colors.fontPrimary};
  border-radius: 10px;

  border: ${props =>
    props.isFocused
      ? `2px solid ${props.theme.colors.secondary}`
      : props.isErrored
      ? `2px solid #ff0000`
      : `2px solid ${props.theme.colors.primary}`};

  & + div {
    margin-top: 1rem;
  }

  svg {
    color: ${props =>
      props.isErrored
        ? '#ff0000'
        : props.isFocused || props.isFilled
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
  }

  textarea {
    background: ${props => props.theme.colors.fontPrimary};
    border: none;
    padding: 16px;
    flex: 1;
    color: ${props => props.theme.colors.primary};
    margin-left: 10px;
    outline: none;
    resize: none;

    &::placeholder {
      color: #666360;
    }
  }
`;

export const Error = styled.div`
  height: 20px;

  svg {
    margin: 0;
  }

  span {
    background: #ff0000;
    color: #fff;

    &::before {
      border-color: #ff0000 transparent;
    }
  }
`;
