import { Container } from './styles';
import PropTypes from 'prop-types';

export const Card = ({ backImage, title }) => {
  return (
    <Container backImage={backImage}>
      <div>
        <div />
        <span>
          <p>{title}</p>
          <div />
        </span>
      </div>
    </Container>
  );
};

Card.propTypes = {
  backImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
