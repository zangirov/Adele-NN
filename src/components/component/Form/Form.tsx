import React, { useState } from 'react';
import css from './Form.module.scss';
import Input from './Input/Input';
import TextArea from './TextArea/TextArea';
import upload_icon from '../../../assets/icons/upload.svg';

const Form = () => {
  const [inputPhone, setInputPhone] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+7');
  const [email, setEmail] = useState('');
  const [textArea, setTextArea] = useState('');
  const [inputEmail, setInputEmail] = useState(false);

  const enterPhone = () => {
    setInputPhone(!inputPhone);
  };

  const enterEmail = () => {
    setInputEmail(!inputEmail);
  };

  return (
    <div className={css.container}>
      <form className={css.form} action="post">
        <h2>Заполните форму</h2>
        <span className={css.form_line}></span>
        <Input
          text={'Ваше имя:'}
          labelType={'name'}
          value={name}
          inputType={'text'}
          id={'name'}
          name={'name'}
          length={30}
          autoComplete={'off'}
          required={true}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          text={'Ваш номер телефона:'}
          labelType={'phone'}
          value={phone}
          inputType={'tel'}
          id={'phone'}
          name={'phone'}
          length={15}
          autoComplete={'off'}
          required={true || false}
          onChange={(event) => setPhone(event.target.value)}
        />
        <Input
          text={'Ваша электронная почта (необязательно):'}
          labelType={'email'}
          value={email}
          inputType={'email'}
          id={'email'}
          name={'email'}
          length={64}
          autoComplete={'off'}
          required={true || false}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextArea
          name={'text-area'}
          value={textArea}
          onChange={(event) => setTextArea(event.target.value)}
        />
          <p>Вы можете прикрепить изображение:</p>
          <label htmlFor="files" className={css.files_label}>
            
            <img src={upload_icon} alt="file_icon" />
            <span className={css.file_span}>Выберите файл</span>
            <span className={css.file_span_end}> или перетащите его сюда</span>
            <input type="file" id="files" name="files" className={css.files} />
          </label>
          <button type="submit" className={css.submit}>
            Отправить
          </button>
      </form>
    </div>
  );
};

export default Form;
