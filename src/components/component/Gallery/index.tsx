import React from 'react';
import css from './Gallery.module.scss';
import { images } from '../../../helpers/images';
import Card from '../ImgCard/index';
import GallerySidebar from '../GallerySidebar';

const Gallery = () => {
  return (
    <div className={css.container}>
      <GallerySidebar />
      <div className={css.gallery}>
        <Card className={css.img} src={images[0]} alt="sofa" />
        <Card className={css.img} src={images[1]} alt="sofa" />
        <Card className={css.img} src={images[2]} alt="sofa" />
        <Card className={css.img} src={images[3]} alt="sofa" />
        <Card className={css.img} src={images[4]} alt="sofa" />
        <Card className={css.img} src={images[5]} alt="sofa" />
        <Card className={css.img} src={images[6]} alt="sofa" />
        <Card className={css.img} src={images[7]} alt="sofa" />
      </div>
    </div>
  );
};

export default Gallery;
