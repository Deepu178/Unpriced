import { GoGraph } from 'react-icons/go';
import { VscBell } from 'react-icons/vsc';
import { MdMoneyOff } from 'react-icons/md';
import Feature from '../../components/Feature';
import Wrapper from '../../components/Wrapper';
import { getId } from '../../utils/helper';
import './index.scss';

const Features = () => {
  const features = [
    { icon: <GoGraph />, title: 'price history', description: 'Compare the prices of all items over the course of a year. Never pay more than what it is worth.' },
    {
      icon: <VscBell />,
      title: ' price drop alert',
      description: 'Real-time price reduction notifications through SMS, email, and WhatsApp',
    },
    {
      icon: <MdMoneyOff />,
      title: 'free of cost',
      description: 'Never forego an exclusive offer. The lighting deal alerts 24*7.',
    },
  ];

  return (
    <Wrapper element="section" id="features">
      <h2 className="h-l u-text-center features__heading">What will you get</h2>
      <div className="features">
        {features.map(({ icon, title, description }) => (
          <Feature key={getId()} title={title} icon={icon} description={description} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Features;
