import './index.scss';
import { createPortal } from 'react-dom';
import { ImCross } from 'react-icons/im';

const Modal = ({ onClose, children, className, isOpen }) => {
  if (!isOpen) return <></>;

  return createPortal(
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className={`modal ${className}`}>
        <button className="modal__close" onClick={onClose}>
          <ImCross />
        </button>
        {children}
      </div>
    </>,
    document.getElementById('modal')
  );
};

export default Modal;
