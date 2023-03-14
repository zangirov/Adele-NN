import React from 'react';
import close from '../../../../assets/icons/close.svg';
import next from '../../../../assets/icons/arrow_right.svg';
import previous from '../../../../assets/icons/arrow_left.svg';
import css from './ImageView.module.scss';

type ImageViewType = {
  children: React.ReactNode;
  closeImage: React.MouseEventHandler;
  prevImage: React.MouseEventHandler;
  nextImage: React.MouseEventHandler;
  ref: React.RefObject<HTMLDivElement>
};

const ImageView = ({
  children,
  closeImage,
  prevImage,
  nextImage,
  ref
}: ImageViewType) => {

  return (
    <div className={css.forFullScreen} ref={ref}>
      <div className={css.image_container}  >
        {children}
        <div className={css.buttons}>
          <button type="button" onClick={prevImage}>
            <img src={previous} className={css.prevIcon} alt="PreviousButton" />
          </button>
          <button type="button" className={css.closeButton} onClick={closeImage}>
            <img src={close} className={css.closeIcon} alt="CloseButton" />
            <p>Закрыть</p>
          </button>
          <button type="button" onClick={nextImage}>
            <img src={next} className={css.nextIcon} alt="NextButton" />
          </button>
        </div>
      </div>
    </div>
  );
};


export default ImageView;