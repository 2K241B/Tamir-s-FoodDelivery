import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const ForgetPass = ({ onNext }) => {
  const [formData, setFormData] = useState({ email: '' });
  const [emailList, setEmailList] = useState([]);
  const [emailExists, setEmailExists] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:8000/checkmail", {
        params: {
          email: formData.email,
        },
      });
  
      const emails = response.data.map(item => item.email);
      setEmailList(emails);
      
      if (emails.includes(formData.email)) {
        setEmailExists(true);
        onNext(); 
      } else {
        setEmailExists(false);
      }
    } catch (error) {
      console.error(error);
      setEmailExists(false);  
    }
    console.log(emailExists)
  };
  

  return (
    <form onSubmit={handleSubmit} className='w-[448px] h-fit rounded-[16px] flex flex-col gap-[48px]  p-8 bg-white m-auto pt-[143px] pb-[107px]'>
      <h2 className='text-[#0D1118] text-center text-[28px] font-bold'>Нууц үг сэргээх</h2>
      <div className='flex flex-col w-full gap-1 text-sm'>
        <h3>Имэйл</h3>
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Имэйл хаягаа оруулна уу"
          className='w-full flex items-center justify-between border-[#ECEDF0] border-[0.5px] bg-[#F7F7F8] text-[#8B8E95] rounded-[4px] pr-3'
          required
        />
        {formData.email && !emailExists && <p className='mt-2 text-red-500'>Бүртгэлтэй хаягаа оруулна уу !</p>}
      </div>
      <Button
        type="submit"
        className='bg-[#18BA51] font-normal px-4 py-2 text-white hover:bg-[#16a34a]'>
        Үргэлжлүүлэх
      </Button>
    </form>
  );
};

export default ForgetPass;
