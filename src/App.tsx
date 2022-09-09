import React from 'react';
import './App.css';
import PageWrapper from './components/component/PageWrapper';
import { Routes, Route } from 'react-router-dom';
import Contacts from './components/component/Contacts';
import Main from './components/component/Main';
import Gallery from './components/component/Gallery';

import Condition from './components/component/Condition/index';
import Form from './components/component/Form/Form';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route path="contacts" element={<Contacts />} />
        <Route path="/" element={<Main />} />
        <Route path="gallery" element={<Gallery />} />

        <Route path="condition" element={<Condition />} />
        <Route path="request" element={<Form />} />
      </Route>
    </Routes>
  );
}

export default App;
