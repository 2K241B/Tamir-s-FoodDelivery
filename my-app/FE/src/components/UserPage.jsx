'use client';
import TimeIcon from './icons/TimeIcon';
import PenIcon from './icons/PenIcon';
import PhoneIcon from './icons/PhoneIcon';
import ExitIcon from './icons/ExitIcon';
import UserIcon from './icons/UserIcon';
import MailIcon from './icons/MailIcon';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const UserPage = () => {
  return (
    <div className='flex flex-col gap-6 w-[432px] mx-auto pt-[76px]'>
      <div className='flex flex-col items-center gap-10'>
        <div className="relative w-[120px] h-[120px]">
          <Avatar className="w-[120px] h-[120px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='w-[34px] h-[34px] bg-white rounded-full border-[1px] border-[#D6D8DB] flex items-center justify-center absolute right-[-4px] bottom-[-5px]'>
            <PenIcon />
          </div>
        </div>
        <h2 className="text-[28px] font-bold">Tamir</h2>
      </div>
      <form className='flex flex-col items-center gap-4 px-5 pt-4'>
        <div className='flex gap-2 px-5 py-2 rounded-[8px] bg-[#F6F6F6] min-w-[392px] items-center'>
          <UserIcon />
          <div className='flex flex-col gap-1 w-[264px]'>
            <p className='text-[#888A99] text-xs'>Таны нэр</p>
            <h4>Tamir</h4>
          </div>
          <PenIcon />
        </div>
        <div className='flex gap-2 px-5 py-2 rounded-[8px] bg-[#F6F6F6] min-w-[392px] items-center'>
          <PhoneIcon />
          <div className='flex flex-col gap-1 w-[264px]'>
            <p className='text-[#888A99] text-xs'>Утасны дугаар</p>
            <h4>85505420</h4>
          </div>
          <PenIcon />
        </div>
        <div className='flex gap-2 px-5 py-2 rounded-[8px] bg-[#F6F6F6] min-w-[392px] items-center'>
          <MailIcon />
          <div className='flex flex-col gap-1 w-[264px]'>
            <p className='text-[#888A99] text-xs'>Имэйл хаяг</p>
            <h4>Tamir</h4>
          </div>
          <PenIcon />
        </div>

        <div className='flex gap-2 px-5 py-2 rounded-[8px] min-w-[392px] items-center cursor-pointer'>
          <TimeIcon />
          <h4>Захиалгын түүх</h4>
        </div>
        <div className='flex gap-2 px-5 py-2 rounded-[8px] min-w-[392px] items-center cursor-pointer'>
          <ExitIcon />
          <h4>Гарах</h4>
        </div>
      </form>
    </div>
  );
};

export default UserPage;
