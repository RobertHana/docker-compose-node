import Modal from "react-modal";

export const Modal1 = ({ onRequestClose, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <button onClick={onRequestClose}>close</button>
    <div>I am a modal</div>
  </Modal>
);

export const Modal2 = ({ onRequestClose, title, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <h1>{title}</h1>
    <button onClick={onRequestClose}>close</button>
    <div>second modal</div>
  </Modal>
);