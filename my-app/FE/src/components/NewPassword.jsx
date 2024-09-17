'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { EyeIcon, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useContext, useMemo, useState } from 'react';
import debounce from 'lodash/debounce';
import { DataContext } from '@/app/forget-password/page';
import axios from 'axios';

export const NewPassword = () => {
  const router = useRouter(); 
  const { Data } = useContext(DataContext); 
  console.log(Data);
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [formData, setFormData] = useState({ NewPassword: '', rePassword: '' }); 

  const togglePasswordVisibility = () => setIsHidePassword((prev) => !prev);
  const Icon = isHidePassword ? EyeOff : EyeIcon;

  const handleOnChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const debounceFn = useMemo(() => debounce(handleOnChange, 500), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.NewPassword !== formData.rePassword) {
      return console.log('Нууц үг таарахгүй байна');
    } else {
      try {
        const res = await axios.put(`/user/update/${Data._id}`, {
          email: Data.email,
          password: formData.NewPassword,
        });
        if (res.status === 200) {
          router.push('/login'); 
        }
      } catch (error) {
        console.error('Нууц үг шинэчлэхэд алдаа гарлаа:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-[448px] h-fit rounded-[16px] flex flex-col gap-[48px]  p-8 bg-white m-auto pt-[143px] pb-[107px]'>
      <div className='text-[#0D1118] text-center text-[28px] font-bold'>
        <h2>Шинэ нууц үг зохиох</h2>
      </div>
      <div className='flex flex-col items-start gap-4 w-full text-sm'>
        <div className='flex flex-col gap-1 w-full text-sm'>
          <h3>Нууц үг</h3>
          <div className='w-full flex items-center justify-between border-[#ECEDF0] border-[0.5px] bg-[#F7F7F8] text-[#8B8E95] rounded-[4px] pr-3'>
            <Input
              name="NewPassword"
              type={isHidePassword ? 'password' : 'text'}
              onChange={debounceFn}
              placeholder="Шинэ нууц үгээ оруулна уу"
              className='bg-[#F7F7F8] border-0'
              required
            ></Input>
            <Icon onClick={togglePasswordVisibility} className="cursor-pointer" />
          </div>
        </div>
        <div className='flex flex-col gap-1 w-full text-sm'>
          <h3>Нууц үг давтах</h3>
          <div className='w-full flex items-center justify-between border-[#ECEDF0] border-[0.5px] bg-[#F7F7F8] text-[#8B8E95] rounded-[4px] pr-3'>
            <Input
              name="rePassword"
              type={isHidePassword ? 'password' : 'text'}
              onChange={debounceFn}
              placeholder="Шинэ нууц үгээ давтан оруулна уу"
              className='bg-[#F7F7F8] border-0'
              required
            ></Input>
            <Icon onClick={togglePasswordVisibility} className="cursor-pointer" />
          </div>
        </div>      </div>
      <Button
        disabled={
          formData.NewPassword.length > 0 && formData.rePassword.length > 0 ? false : true
        }
        type="submit"
        className='bg-[#EEEFF2] text-[#1C20243D] font-normal px-4 py-2  hover:bg-[#18BA51] text-white'
      >
        Үргэлжлүүлэх
      </Button>
    </form>
  );
};

export default NewPassword;
