import React from 'react';
import css from './ImageCard.module.scss';

type TypeCard = {
  src: string;
  alt: string;
  // setRoute?: React.MouseEventHandler<HTMLImageElement>;
  onClick: React.MouseEventHandler<HTMLImageElement>;
};

const ImgCard = ({ src, alt, onClick }: TypeCard) => {  

  return (
    
      <img className={css.image} src={src} alt={alt} onClick={onClick}/>
    
  );
};

export default ImgCard;
