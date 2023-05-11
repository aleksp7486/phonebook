import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='contacts' element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default App;
