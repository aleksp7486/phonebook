import SubmitForm from 'components/SignUpForm';
import { IUser } from 'types/user';
import api from 'services/userAPI';
import { useState } from 'react';

type Props = {
  // setUser: (value: IUser) => void;
  // setToken: (value: string) => void;
};

const SignUpPage = (props: Props) => {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean>(false);
  const handelSubmit = async (user: IUser) => {
    const response = await api.submit(user);
    if (response) {
      setIsSubmitSuccess(true);
    }
  };
  return (
    <SubmitForm isSubmitSuccess={isSubmitSuccess} handelSubmit={handelSubmit} />
  );
};

export default SignUpPage;
