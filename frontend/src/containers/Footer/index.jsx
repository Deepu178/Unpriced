import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { getId } from '../../utils/helper';
import Links from '../../components/Links';
import Logo from '../../components/Logo';
import Copyright from '../../components/Copyright';
import './index.scss';

const Footer = () => {
  const socialLinks = [
    {
      name: 'facebook',
      url: 'https://www.facebook.com/',
      icon: <FaFacebook />,
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/',
      icon: <FaTwitter />,
    },
    {
      name: 'instagram',
      url: 'https://www.instagram.com/',
      icon: <FaInstagram />,
    },
  ];

  const quickLinks = [
    { name: 'about', url: '#' },
    { name: 'services', url: '#' },
    { name: 'contact', url: '#' },
    { name: 'terms of use', url: '#' },
    { name: 'privacy policy', url: '#' },
  ];

  const contactLinks = [
    {
      name: (
        <>
          telephone: <strong> +911111222233</strong>
        </>
      ),
      url: 'tel: +911111222233',
    },
    {
      name: (
        <>
          email: <strong>inbox@example.com</strong>
        </>
      ),
      url: 'mailto:inbox@webnetics.com',
    },
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer__main">
          <Logo className="footer__logo" />
          <p className="footer__text">Buy when price drops, track price drops with Unprice</p>
          <div className="footer__social-links">
            {socialLinks.map((link) => (
              <a key={getId()} href={link.url} target="_blank" rel="noreferrer" className="footer__social-link">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <Links links={quickLinks} />
        <Links links={contactLinks} />
      </footer>
      <Copyright />
    </>
  );
};

export default Footer;
