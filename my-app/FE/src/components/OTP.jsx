'use client';
import { useState } from 'react';
import { Button } from './ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from './ui/input-otp';

export const OTP = ({ onNext }) => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/otp/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: 'example@pinecone.mn', otp: value }),
      });
      const data = await response.json();
      if (response.status === 200) {
        onNext(); 
      } else {
        setErrorMessage('OTP зөв биш байна.');
      }
    } catch (error) {
      setErrorMessage('Өндөр түвшний алдаа гарлаа.');
    }
  };

  return (
    <div className='w-[448px] h-fit rounded-[16px] flex flex-col gap-[48px] p-8 bg-white m-auto pt-[143px] pb-[107px]'>
      <h2 className='text-[#0D1118] text-center text-[28px] font-bold'>Нууц үг сэргээх</h2>
      <div className="flex flex-col gap-8">
        <p className="text-[#695C08] font-medium leading-[22.4px]">
          Таны <span className="text-[#18BA51]">example@pinecone.mn</span> хаяг
          руу сэргээх код илгээх болно.
        </p>
        <div className={'flex flex-col w-full text-sm gap-5'}>
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
          {errorMessage && <p className='mt-2 text-red-500'>{errorMessage}</p>}
        </div>
      </div>
      <Button
        onClick={handleSubmit}
        disabled={value.length === 4 ? false : true}
        className='bg-[#EEEFF2] disabled:text-[#1C20243D] font-normal px-4 py-2 hover:bg-[#18BA51] text-white'
      >
        Үргэлжлүүлэх
      </Button>
    </div>
  );
};

export default OTP;
