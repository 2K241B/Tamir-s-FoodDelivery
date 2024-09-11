'use client';
import { Button } from './ui/button';
import { useState } from 'react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from './ui/input-otp';

const styles = {
    container:'w-[448px] h-fit rounded-[16px] flex flex-col gap-[48px]  p-8 bg-white m-auto pt-[143px] pb-[107px]',
    header: 'text-[#0D1118] text-center text-[28px] font-bold',
    inputContainer: 'flex flex-col gap-1 w-full text-sm',
    ButtonStyle1:'disabled:bg-[#EEEFF2] disabled:text-[#1C20243D] font-normal px-4 py-2 bg-[#18BA51] text-white'
  };

export const OTP = () => {
  const [value, setValue] = useState('');
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Нууц үг сэргээх</h2>
      <div className="flex flex-col gap-8">
        <p className="text-[#695C08] font-medium leading-[22.4px]">
          Таны <span className="text-[#18BA51]">example@pinecone.mn</span> хаяг
          руу сэргээх код илгээх болно.
        </p>
        <div className={`${styles.inputContainer} gap-4`}>
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
        disabled={value.length === 4 ? false : true}
        className={styles.ButtonStyle1}
      >
        Үргэлжлүүлэх
      </Button>
    </div>
  );
};

export default OTP;