'use client';
import EmailInput from '../../components/EmialInput';
import OTP from '@/components/OTP';
import NewPassword from '../../components/NewPassword';
import { createContext, useState } from 'react';

export const DataContext = createContext();

const Page = () => {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState({ email: '' }); 

  return (
    <DataContext.Provider value={{ setCurrent, setData, data, current }}>
      {current === 0 && <EmailInput />}
      {current === 1 && <OTP />}
      {current === 2 && <NewPassword />}
    </DataContext.Provider>
  );
};

export default Page;
