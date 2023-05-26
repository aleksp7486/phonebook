import SubmitForm from 'components/SignUpForm';
import { useState } from 'react';
import api from 'services/userAPI';
import { IUser } from 'types/user';

type Props = {};

const SignUpPage = () => {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean>(false);
  const handelSubmit = async (user: IUser) => {
    const response = await api.signUp(user);
    if (response) {
      setIsSubmitSuccess(true);
    }
  };
  return (
    <SubmitForm isSubmitSuccess={isSubmitSuccess} handelSubmit={handelSubmit} />
  );
};

export default SignUpPage;
