import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
export const ImagesGallaryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  handlerOpenModal,
}) => {
  return (
    <>
      <li
        className={s.ImageGalleryItem}
        onClick={() => handlerOpenModal(largeImageURL, tags)}
      >
        <img
          src={webformatURL}
          alt={tags}
          className={s.ImageGalleryItem__image}
        />
      </li>
    </>
  );
};

ImagesGallaryItem.propsTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  handlerOpenModal: PropTypes.func.isRequired,
};
