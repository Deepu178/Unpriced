import './index.scss';

const Logo = ({ className }) => {
  const classes = `logo ${className}`;
  return <h1 className={classes}>UnPrice</h1>;
};

export default Logo;
