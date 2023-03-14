import React from 'react';
import style from './TextArea.module.scss';

type TextAreaTypeProps = {
  value: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined
}

const TextArea: React.FC<TextAreaTypeProps> = ({value, name, onChange}) => {

  return (
  <>
    <label htmlFor="text-area" className={style.label}>
      <textarea
        autoComplete='off'
        className={style.text_area}
        placeholder="Напишите, чем мы можем быть полезны?"
        maxLength={500}
        minLength={20}
        cols={30}
        rows={10}
        name={name}
        required
        spellCheck={true}
        wrap='hard'
        value={value}
        onChange={onChange}
      />
    </label>
  </>
  );
};

export default TextArea;
