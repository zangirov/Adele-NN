import React from 'react';
import Gallery from '../../component/Gallery/Gallery';
import GallerySidebar from '../../component/Gallery/GallerySidebar/GallerySidebar';
import { imagesData } from '../../../helpers/images';
import css from './GalleryPage.module.scss'
import { useParams } from 'react-router-dom';


const GalleryPage = () => {
  

  const {type = "straight"} = useParams();

  const itemsType = imagesData.filter((item) => item.type === type);
  

  console.log(itemsType);
  

  return (
    <div className={css.container}>
      <GallerySidebar/>
      <Gallery images={itemsType}/>
    </div>
  );
};

export default GalleryPage;