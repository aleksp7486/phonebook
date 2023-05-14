import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Contacts />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
