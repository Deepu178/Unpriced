import './index.scss';

const Button = ({ type = 'button', children, onClick, className, size, variant = 'solid', ...props }) => {
  const classes = `button ${className} ${variant} ${size ? 'size' : ''}`;

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
