import { Container, Error } from './styles';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

export const TextArea = ({
  containerStyle = {},
  name,
  icon: Icon,
  error,
  register,
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
    >
      {Icon && <Icon size={20} />}

      <textarea
        type="text"
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

TextArea.propTypes = {
  containerStyle: PropTypes.shape(),
  name: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  error: PropTypes.shape().isRequired,
  register: PropTypes.func.isRequired,
  getValues: PropTypes.func.isRequired,
};
