import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />} />
    </Routes>
  );
};

export default App;
