import React from 'react';
import './App.css';
import PageWrapper from './containers/PagesContainer/PagesContainer';
import { Routes, Route } from 'react-router-dom';
import Contacts from './components/pages/ContactsPage/Contacts';
import Main from './components/pages/MainPage/MainPage'
import Condition from './components/pages/InfoPage/Condition';
import Form from './components/component/Form/Form';
import PageGallery from './components/pages/GalleryPage/GalleryPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route path="contacts" element={<Contacts />} />
        <Route index element={<Main />} />
        <Route path="gallery" element={<PageGallery />} />
        <Route path="gallery/:type" element={<PageGallery />} />
        <Route path='*' element={<h1>Страница не найдена</h1>}/>
        <Route path="condition" element={<Condition />} />
        <Route path="form" element={<Form />} />
      </Route>
    </Routes>
  );
}

export default App;
