'use client';
import { useState, useContext, useMemo } from 'react';
import debounce from 'lodash/debounce';
import { axiosInstance } from '@/lib/axios'; 
import { DataContext } from '@/app/forget-password/page'; 
import { Button } from './ui/button';
import { Input } from './ui/input';

const styles = {
  container:
    'w-[448px] h-fit rounded-[16px] flex flex-col gap-[48px]  p-8 bg-white m-auto pt-[143px] pb-[107px]',
  header: 'text-[#0D1118] text-center text-[28px] font-bold',
  form: 'flex flex-col items-start gap-4 w-full text-sm',
  inputContainer: 'flex flex-col gap-1 w-full text-sm',
  subContainer: 'flex flex-col w-full gap-8 items-center text-sm',
  input:
    'w-full flex items-center justify-between border-[#ECEDF0] border-[0.5px] bg-[#F7F7F8] text-[#8B8E95] rounded-[4px] pr-3',
  ButtonStyle1:
    'disabled:bg-[#EEEFF2] disabled:text-[#1C20243D] font-normal px-4 py-2 bg-[#18BA51] text-white',
  ButtonStyle2:
    'bg-white border-[#18BA51] border-[1px] text-[#272727] font-normal px-4 py-2 hover:bg-[#18BA51] hover:text-white',
  borderOff: 'bg-[#F7F7F8] border-0',
};

export const ForgotPass = () => {
  const { setPageCurrent, setUserData } = useContext(DataContext);
  const [formData, setFormData] = useState({ email: '' });
  const [errorMessage, setErrorMessage] = useState(true);

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
      const response = await axiosInstance.get("http://localhost:8000/checkmail", {
        params: { email: formData.email }
      });

      if (response.data.includes(formData.email)) {
        await axiosInstance.post("http://localhost:8000/otp/create", { email: formData.email });
        setPageCurrent(2); 
      } else {
        setErrorMessage('Имэйл хаяг бүртгэгдээгүй байна.');
      }
    } catch (error) {
      setErrorMessage('Өндөр түвшний алдаа гарлаа.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-[448px] h-fit rounded-[16px] flex flex-col gap-[48px]  p-8 bg-white m-auto pt-[143px] pb-[107px]'>
      <h2 className='text-[#0D1118] text-center text-[28px] font-bold'>Нууц үг сэргээх</h2>
      <div className='flex flex-col w-full gap-1 text-sm'>
        <h3>Имэйл</h3>
        <Input
          name="email"
          placeholder="Имэйл хаягаа оруулна уу"
          type="email"
          onChange={debounceFn}
          className='w-full flex items-center justify-between border-[#ECEDF0] border-[0.5px] bg-[#F7F7F8] text-[#8B8E95] rounded-[4px] pr-3'
          required
        />
        {errorMessage && <p className='mt-2 text-red-500'>{errorMessage}</p>}
      </div>
      <Button
        disabled={formData.email.length > 0 ? false : true}
        type="submit"
        className='bg-white border-[#18BA51] border-[1px] text-[#272727] font-normal px-4 py-2 hover:bg-[#18BA51] w-full hover:text-white'
      >
        Үргэлжлүүлэх
      </Button>
    </form>
  );
};

export default ForgotPass;
