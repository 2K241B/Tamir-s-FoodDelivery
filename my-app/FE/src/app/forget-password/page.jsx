'use client';
import ForgotPass from '../../components/EmialInput';
import OTP from '@/components/OTP';
import NewPassword from '../../components/NewPassword';
import { createContext, useState } from 'react';

export const DataContext = createContext();

const page = () => {
  const [pageCurrent, setPageCurrent] = useState(0);
  const [userData, setUserData] = useState();

  return (
    <DataContext.Provider value={{ setPageCurrent, setUserData, userData }}>
      {pageCurrent === 0 && <ForgotPass />}
      {pageCurrent === 1 && <OTP />}
      {pageCurrent === 2 && <NewPassword />}
    </DataContext.Provider>
  );
};

export default page;