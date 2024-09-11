'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { EyeIcon, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash/debounce';
import { axiosInstance } from '@/lib/axios';
import Link from 'next/link'; 

export const page = () => {
  const router = useRouter();
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '' });
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

    try {
      const response = await axiosInstance.post('/auth/login', {
        email: formData.email,
        password: formData.password,
      });
      if (response.status === 200) router.push('/');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className='w-[448px] h-fit rounded-[16px] flex flex-col gap-[48px]  p-8 bg-white m-auto pt-[143px] pb-[107px]'>
      <div className='text-[#0D1118] text-center text-[28px] font-bold'>
        <h2>Нэвтрэх</h2>
      </div>
      <div className='flex flex-col items-start w-full gap-4 text-sm'>
        <div className='flex flex-col w-full gap-1 text-sm'>
          <h3>Имэйл </h3>
          <Input
            name="email"
            type="email"
            onChange={debounceFn}
            placeholder="Имэйл хаягаа оруулна уу"
            className='w-full flex items-center justify-between border-[#ECEDF0] border-[0.5px] bg-[#F7F7F8] text-[#8B8E95] rounded-[4px] pr-3'
            required
          />
        </div>
        <div className='flex flex-col w-full gap-1 text-sm'>
          <h3>Нууц үг</h3>
          <div className='w-full flex items-center justify-between border-[#ECEDF0] border-[0.5px] bg-[#F7F7F8] text-[#8B8E95] rounded-[4px] pr-3'>
            <Input
              name="password"
              type={isHidePassword ? 'password' : 'text'}
              onChange={debounceFn}
              placeholder="Нууц үг"
              className='bg-[#F7F7F8] border-0'
              required
            ></Input>
            <Icon
              onClick={togglePasswordVisibility}
              className="cursor-pointer"
            />
          </div>
          <Link href="/forget-password" className="text-end">Нууц үг сэргээх</Link>
        </div>
      </div>
      <div className='flex flex-col items-center w-full gap-8 text-sm'>
        <Button
          disabled={
            formData.email.length > 0 && formData.password.length > 0
              ? false
              : true
          }
          type="submit"
          className='bg-[#EEEFF2] disabled:text-white font-normal px-4 py-2 hover:bg-[#18BA51] w-full'
        >
          Нэвтрэх
        </Button>
        <p>Эсвэл</p>
        <Button
          type="button"
          onClick={() => router.push('/sign-up')}
          className='bg-white border-[#18BA51] border-[1px] text-[#272727] font-normal px-4 py-2 hover:bg-[#18BA51] w-full hover:text-white'
        >
          Бүртгүүлэх
        </Button>
      </div>
    </form>
  );
};

export default page;