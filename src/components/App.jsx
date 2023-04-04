import { React, useState, useEffect } from 'react';
import imageAPI from './services/pixabayAPI';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const images = await imageAPI.fetchImagesWithQuery(searchQuery, page);
        setImages(prevState => [...prevState, ...images]);
        // console.log(images);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (searchQuery) {
      fetchImages(searchQuery, page);
    }
  }, [searchQuery, page]);

  const handleLoadMore = e => {
    e.preventDefault();

    setPage(page + 1);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let value = e.target.search.value.toLowerCase();
    setSearchQuery(value);
    setIsLoading(true);
    setImages([]);
    setPage(1);
  };

  const showLargeImage = url => {
    setIsShowModal(true);
    setLargeImageURL(url);
  };

  const closeLargeImage = () => {
    setIsShowModal(false);
    setLargeImageURL('');
  };

  return (
    <div className="image_App">
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      <ImageGallery images={images} showLargeImage={showLargeImage} />
      {images.length < 1 ? (
        <></>
      ) : images.length < 12 ? (
        <> That's all results</>
      ) : (
        <Button onClick={handleLoadMore} />
      )}

      {isShowModal && (
        <Modal closeLargeImage={closeLargeImage} picture={largeImageURL} />
      )}
    </div>
  );
};
export default App;
