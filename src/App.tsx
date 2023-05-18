import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import Login from 'pages/Login';
import Submit from 'pages/Submit';
import Contacts from 'pages/Contacts';

const App: React.FC = () => {
  // const [user, setUser] = useState<IUser | null>(null);
  // const [token, setToken] = useState('');
  // @ts-ignore
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Contacts />} />
        <Route path="login" element={<Login />} />
        <Route
          path="submit"
          // element={<Submit setUser={setUser} setToken={setToken} />}
          element={<Submit />}
        />
      </Route>
    </Routes>
  );
};

export default App;
