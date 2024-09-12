'use client';
import { useState } from 'react';
import NewPassword from '@/components/NewPassword';
import OTP from '@/components/OTP';
import EmailInput from '../../components/EmialInput'; 

const Page = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className='w-[448px] h-fit rounded-[16px] flex flex-col gap-[48px] p-8 bg-white m-auto pt-[143px] pb-[107px]'>
      {currentStep === 1 && <EmailInput onNext={handleNext} />}
      {currentStep === 2 && <OTP onNext={handleNext} onPrevious={handlePrevious} />}
      {currentStep === 3 && <NewPassword onPrevious={handlePrevious} />}
    </div>
  );
};

export default Page;
