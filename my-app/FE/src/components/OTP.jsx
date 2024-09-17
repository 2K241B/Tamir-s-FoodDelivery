'use client';
import { Button } from './ui/button';
import { useContext, useState } from 'react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from './ui/input-otp';
import { axiosInstance } from '@/lib/axios';
import { DataContext } from '@/app/forget-password/page';

export const ForgotPassOTP = () => {
  const { setCurrent, data } = useContext(DataContext);
  const [value, setValue] = useState('');

  const handlerClick = async () => {
    try {
      const response = await axiosInstance.post('/otp/check', {
        email: data.email,  
        otp: value,
      });

      if (response.status === 200) {
        setCurrent(2); 
        console.log(response);
      }
    } catch (error) {
      console.error('OTP error:', error);
    }
  };

  return (
    <div className='w-[448px] h-fit rounded-[16px] flex flex-col gap-[48px]  p-8 bg-white m-auto pt-[143px] pb-[107px]'>
      <h2 className='text-[#0D1118] text-center text-[28px] font-bold'>Нууц үг сэргээх</h2>
      <div className="flex flex-col gap-8">
        <p className="text-[#695C08] font-medium leading-[22.4px]">
          Таны <span className="text-[#18BA51]">{data.email}</span> хаяг руу сэргээх код илгээсэн байна.
        </p>
        <div className={'flex flex-col gap-5 w-full text-sm'}>
          <h3>Нууц үг сэргээх код</h3>
          <div className="flex items-center justify-center">
            <InputOTP
              maxLength={4}
              value={value}
              onChange={(value) => setValue(value)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>
      </div>
      <Button
        onClick={handlerClick}
        disabled={value.length === 4 ? false : true}
        className='bg-[#EEEFF2] disabled:text-white font-normal px-4 py-2 hover:bg-[#18BA51] w-full'
      >
        Үргэлжлүүлэх
      </Button>
    </div>
  );
};

export default ForgotPassOTP;
