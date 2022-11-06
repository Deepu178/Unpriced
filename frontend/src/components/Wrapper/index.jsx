import './index.scss';

const Wrapper = ({ children, className, element = 'div' }) => {
  const classes = `wrapper ${className}`;
  const CustomTag = `${element}`;
  return <CustomTag className={classes}>{children}</CustomTag>;
};

export default Wrapper;
