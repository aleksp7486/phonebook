import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import LoginPage from 'pages/LoginPage';
import SubmitPage from 'pages/SignUpPage';
import ContactsPage from 'pages/ContactsPage';

const App: React.FC = () => {
  // const [user, setUser] = useState<IUser | null>(null);
  // const [token, setToken] = useState('');
  // @ts-ignore
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<ContactsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="submit"
          // element={<Submit setUser={setUser} setToken={setToken} />}
          element={<SubmitPage />}
        />
      </Route>
    </Routes>
  );
};

export default App;
