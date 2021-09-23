import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(${props => props.backImage});
  background-size: cover;
  background-position: center;
  border-radius: 0px 0px 5px 5px;

  width: 50%;
  height: 0;
  padding-top: 30%;

  display: flex;
  align-items: flex-end;

  > div {
    display: flex;
    width: 100%;
    height: 2.5rem;
    border-radius: 0px 0px 5px 5px;

    > div {
      width: 3%;
      height: 100%;
      background: ${props => props.theme.colors.primary};
      border-radius: 0px 0px 0 5px;
    }

    > span {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
      border-radius: 0px 0px 5px 0;

      width: 100%;
      background: ${props => props.theme.colors.secondary};

      p {
        color: ${props => props.theme.colors.primary};
        font-size: 0.8rem;
      }

      div {
        width: 8rem;
        height: 1px;
        background: ${props => props.theme.colors.primary};
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-top: 60%;
  }
`;
