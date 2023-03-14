import React, { useState, useRef } from 'react';
import styles from './Gallery.module.scss';
import ImgCard from './ImgCard/ImageCard';
import ImageView from './ImageView/ImageView';
// import { useLocation } from 'react-router-dom';

type TypesGallery = {
  images: { id: number; type: string; path: string }[];
};

const Gallery = ({ images }: TypesGallery) => {
  const [slideID, setSlideID] = useState(0);
  const [openModule, setOpenModule] = useState(false);

  // const location = useLocation();

  // const id = images[slideID];

  const moduleRef = useRef<HTMLDivElement>(null);
  
  // const handler = (event: MouseEvent) => {
  //   if (!moduleRef.current?.contains(event.target as HTMLDivElement)) {
  //     setOpenModule(false);
  //   }
  // }

  // React.useEffect(() => {    
  //   document.addEventListener('mousedown', handler);

  //   return () => {
  //     document.removeEventListener('mousedown', handler);
  //   }
  // }, [moduleRef])

  const openModuleHandle = (id: number) => {
    setSlideID(id);
    setOpenModule(true);
  };


  const closeModule = () => setOpenModule(false)

  const nextSlide = () => slideID !== images.length - 1 ? setSlideID(slideID + 1) : setSlideID(0);

  const prevSlide = () => slideID > 0 ? setSlideID(slideID - 1) : setSlideID(images.length - 1);

  return (
    <div className={styles.container}>
      {openModule &&
        <ImageView ref={moduleRef} closeImage={closeModule} nextImage={nextSlide} prevImage={prevSlide}>
          <img
            className={styles.moduleImage}
            key={images[slideID].id}
            src={images[slideID].path} 
            alt={images[slideID].type}
          />
        </ImageView>
      }
      <div className={styles.gallery}>
        {images.map((img, id) => (
          <ImgCard
            key={id}
            src={img.path}
            alt={img.type}
            onClick={() => openModuleHandle(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
