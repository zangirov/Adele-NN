import React from 'react';
import Gallery from '../../components/component/Gallery';
import GallerySidebar from '../../components/component/GallerySidebar';
import css from './GalleryContainer.module.scss';

const GalleryContainer = () => {
  return (
    <div>
      <GallerySidebar />
      <Gallery />
    </div>
  );
};

export default GalleryContainer;
