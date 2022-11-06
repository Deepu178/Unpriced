import { FaExclamationCircle } from 'react-icons/fa';
import './index.scss';

const ErrorText = ({ text }) => {
  return (
    <p className="error-text">
      <FaExclamationCircle />
      {text}
    </p>
  );
};

const Input = ({ placeholder, error, value, onChange, type = 'text', ...props }) => {
  const classes = `form-control ${error ? 'invalid' : ''}`;

  return (
    <div className={classes}>
      <input className="form-control__input" type={type} placeholder={placeholder} value={value} onChange={onChange} {...props} />
      {error && <ErrorText text={error} />}
    </div>
  );
};

export default Input;
