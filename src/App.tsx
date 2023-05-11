import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
