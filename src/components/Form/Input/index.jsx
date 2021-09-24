import PropTypes from 'prop-types';
import { useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './styles';

export const Input = ({
  containerStyle = {},
  icon: Icon,
  error,
  register,
  name,
  getValues,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState();
  const [isFilled, setIsFilled] = useState();

  const handleFocus = () => {
    setIsFocused(prevState => !prevState);
    setIsFilled(!!getValues(name));
  };

  const handleBlur = event => {
    setIsFocused(prevState => !prevState);
    setIsFilled(!!getValues(name));
    rest.onBlur(event);
  };

  return (
    <Container
      style={containerStyle}
      isErrored={Object.entries(error).length !== 0}
      isFocused={isFocused}
      isFilled={isFilled}
      data-testid="input-container"
    >
      {Icon && <Icon size={20} />}

      <input
        type="text"
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...register(name)}
        {...rest}
      />

      {Object.entries(error).length !== 0 && (
        <Error title={error.message}>
          <FiAlertCircle color="#ff0000" size={20} />
        </Error>
      )}
    </Container>
  );
};

Input.propTypes = {
  containerStyle: PropTypes.shape(),
  name: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  error: PropTypes.shape().isRequired,
  register: PropTypes.func.isRequired,
  getValues: PropTypes.func.isRequired,
};
