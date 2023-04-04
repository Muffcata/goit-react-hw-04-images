import { React } from 'react';
import style from './ImageGalleryItem.module.css';
import propTypes from 'prop-types';

export const ImageGalleryItem = props => {
  return (
    <li className={style.image_galleryItem}>
      <img
        className={style.image_galleryImage}
        src={props.src}
        alt={props.tags}
        onClick={() => props.showLargeImage(props.largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  src: propTypes.string,
  largeImageURL: propTypes.string,
  showLargeImage: propTypes.func,
};
