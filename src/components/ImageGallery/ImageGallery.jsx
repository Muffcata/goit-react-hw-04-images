import { React } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';
import propTypes from 'prop-types';

export const ImageGallery = props => {
  return (
    <ul className={style.gallery}>
      {props.images.map(image => (
        <ImageGalleryItem
          key={image.id}
          src={image.webformatURL}
          largeImageURL={image.largeImageURL}
          alt={image.tags}
          showLargeImage={props.showLargeImage}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: propTypes.array,
  showLargeImage: propTypes.func,
};
