import React from 'react';
import style from './Input.module.scss';

type InputTypeProps = {
  labelType: string;
  inputType: string;
  value?: string;
  id: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  name: string;
  length?: number;
  text: string;
  autoComplete?: string;
  required?: boolean;
};

const Input: React.FC<InputTypeProps> = ({
  labelType,
  inputType,
  value,
  id,
  onChange,
  name,
  length,
  text,
  autoComplete,
  required,
}) => {
  return (
    <>
      <label htmlFor={labelType}>
        <p className={style.inputText}>{text}</p>
        <input
          type={inputType}
          value={value}
          className={style.input}
          id={id}
          onChange={onChange}
          name={name}
          maxLength={length}
          autoComplete={autoComplete}
          required={required}
        />
      </label>
    </>
  );
};

export default Input;
