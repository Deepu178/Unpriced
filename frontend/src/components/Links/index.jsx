import { getId } from '../../utils/helper';
import './index.scss';

const Links = ({ links, className = '' }) => {
  const classes = `${className} footer-links`;
  return (
    <nav className={classes}>
      <ul className="footer-links__links">
        {links.map((link) => (
          <li key={getId()} className="footer-links__item">
            <a href={link.url} className="footer-links__link" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Links;
