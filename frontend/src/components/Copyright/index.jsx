import { getYear } from '../../utils/helper';
import './index.scss';

const Footer = () => {
  return (
    <footer className="copyright">
      <p>Copyright &copy; {getYear()}. Unprice</p>
    </footer>
  );
};

export default Footer;
