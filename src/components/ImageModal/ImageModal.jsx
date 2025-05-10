import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={css.image}
      />
      <p className={css.info}>Author: {image.user.name}</p>
      <p className={css.info}>Likes: {image.likes}</p>
    </Modal>
  );
};

export default ImageModal;
