import React, { useState } from 'react';
import SubmitForm from 'components/SubmitForm';
import { IUser } from 'types/user';
import api from 'services/userAPI';

type Props = {
  setUser: (value: IUser) => void;
  setToken: (value: string) => void;
};

const Submit = (props: Props) => {
  const handelSubmit = async (user: IUser) => {
    await api.submit(user);
  };
  return <SubmitForm handelSubmit={handelSubmit} />;
};

export default Submit;
