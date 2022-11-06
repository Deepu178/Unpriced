import { Link } from 'react-router-dom';
import './index.scss';

const Logo = ({ className }) => {
  const classes = `logo ${className}`;
  return (
    <h1 className={classes}>
      <Link to="/">Unprice</Link>
    </h1>
  );
};

export default Logo;
