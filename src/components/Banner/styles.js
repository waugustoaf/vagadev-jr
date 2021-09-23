import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  background-image: url('/img/banner-desktop-1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left center;
  
  padding-bottom: 8rem;
  position: relative;

  > div.infos {
    width: 80%;
    max-width: 900px;
    margin: 6rem auto;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h1 {
      font-size: 2.4rem;
      color: ${props => props.theme.colors.shape};
      font-weight: 900;
    }

    span {
      color: ${props => props.theme.colors.secondary};
      font-weight: 900;

      display: flex;
      align-items: flex-start;

      strong {
        font-size: 3.5rem;
      }

      small {
        font-size: 1.2rem;
        margin-top: 0.5rem;
      }
    }

    p {
      display: inline-block;
      max-width: 26rem;

      color: ${props => props.theme.colors.shape};
      font-size: 1rem;
      text-align: right;
    }
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 0;
    background-position-x: -8rem;

    > div.infos {
      padding: 0.5rem 2rem 2rem;
      width: 100%;
      margin: 16rem 0 0;
      background: rgba(0, 0, 0, 0.4);
    }
  }
`;
