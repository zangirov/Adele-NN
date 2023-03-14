import React from 'react';
import css from './MainPageCard.module.scss';

type mainPageCardTypes = {
  paragraph: string;
  src: string;
  alt: string;
};

const MainPageCard = ({ paragraph, src, alt }: mainPageCardTypes) => {
  return (
    <div className={css.card_block}>
      <p>{paragraph}</p>

      <img className={css.icon} src={src} alt={alt} />
    </div>
  );
};

export default MainPageCard;
