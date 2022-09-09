import React from 'react';
import css from './Card.module.scss';

type ImageData = {
  src: string;
  alt: string;
  className: string;
};

const Card = ({ src, alt, className }: ImageData) => {
  return (
    <div className={css.card}>
      <img className={className} src={src} alt={alt} />
    </div>
  );
};

export default Card;
