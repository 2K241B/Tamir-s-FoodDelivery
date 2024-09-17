'use client';
import { Button } from './ui/button';
import { Input } from './ui/input';
import debounce from 'lodash/debounce';
import { useContext, useMemo, useState } from 'react';
import { axiosInstance } from '@/lib/axios';
import { DataContext } from '@/app/forget-password/page';

export const ForgotPass = () => {
  const { setCurrent, setData } = useContext(DataContext);
  const [formData, setFormData] = useState({ email: '' });

  const handleOnChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const debounceFn = useMemo(() => debounce(handleOnChange, 500), []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post('/otp/create', {
        email: formData.email,
      });

      if (res.status === 200) {
        setData({ email: formData.email });
        setCurrent(1);
      }
    } catch (error) {
      console.error("Алдаа гарлаа:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-[448px] h-fit rounded-[16px] flex flex-col gap-[48px]  p-8 bg-white m-auto pt-[143px] pb-[107px]'>
      <h2 className='text-[#0D1118] text-center text-[28px] font-bold'>Нууц үг сэргээх</h2>
      <div className='flex flex-col gap-1 w-full text-sm'>
        <h3>Имэйл</h3>
        <Input
          name="email"
          placeholder="Имэйл хаягаа оруулна уу"
          type="email"
          onChange={debounceFn}
          className='w-full flex items-center justify-between border-[#ECEDF0] border-[0.5px] bg-[#F7F7F8] text-[#8B8E95] rounded-[4px] pr-3'
          required
        />
      </div>
      <Button
        disabled={formData.email.length === 0}
        type="submit"
        className='bg-[#EEEFF2] disabled:text-white font-normal px-4 py-2 hover:bg-[#18BA51] w-full'
      >
        Үргэлжлүүлэх
      </Button>
    </form>
  );
};

export default ForgotPass;
