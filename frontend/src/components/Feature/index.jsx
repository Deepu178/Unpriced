import './index.scss';

const Feature = ({ icon, title, description }) => {
  return (
    <div className="feature">
      {icon}
      <h3 className="h-m feature__title u-capitalize">{title}</h3>
      <p className="feature__desc h-xs">{description}</p>
    </div>
  );
};

export default Feature;
