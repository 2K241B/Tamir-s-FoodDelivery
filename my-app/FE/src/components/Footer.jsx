'use client'
import {
  FacebookIcon,
  FooterBackground,
  InstagramIcon,
  LogoIconWhite,
  TwitterIcon,
} from './icons';
import Link from 'next/link'; 

export const Footer = () => {
  return (
    <div className='bg-[#18BA51] min-w-[1440px] min-h-[545px] text-white flex items-center justify-center relative overflow-hidden'>
      <div className='z-10 flex flex-col items-center gap-10'>
        <div className='flex gap-2 text-[20px] font-bold '>
          <LogoIconWhite />
          <p>Food Delivery</p>
        </div>
        <div className='flex justify-between w-full underline underline-offset-4 font-[590]'>
          <Link href="/">Нүүр</Link>
          <Link href="/">Хоолны цэс</Link>
          <Link href="/contact">Холбоо барих</Link>
          <Link href="/terms-of-service">Үйлчилгээний нөхцөл</Link>
          <Link href="/deliveryzone">Хүргэлтийн бүс</Link>
          <Link href="/privacy">Нууцлалын бодлого</Link>
        </div>
        <div className='flex gap-[18px] items-center p-[5px]'>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
        </div>
        <div className='w-[1200px] h-[1px] bg-white'></div>
        <div className='flex flex-col gap-2 font-normal text-center'>
          <p>© 2024 Pinecone Foods LLC </p>
          <p>Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
      <div className='absolute top-0 right-0 z-0'>
        <FooterBackground />
      </div>
    </div>
  );
};

export default Footer;
