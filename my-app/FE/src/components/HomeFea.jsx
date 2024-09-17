import { FooterBackground } from '@/components/icons';
import Image from 'next/image';
import FoodImage1 from '@/components/assets/image 13.png';
import FoodImage2 from '@/components/assets/image 14.png';

export const HomePageMain = () => {
  return (
    <div className='min-w-[1440px] h-[788px] bg-[#18BA51] relative overflow-hidden text-white flex  items-center justify-center gap-[228px] z-[-1]'>
      <div className='max-w-[384px] min-h-[225px] flex flex-col items-start gap-[23px]'>
        <h1 className='text-[55px] font-semibold tracking-[0.55px] leading-[49.5px]'>Pinecone Food delivery</h1>
        <div className='w-[383px] h-[2px] bg-white opacity-[0.5]'></div>
        <p className='text-[22px] leading-[26.4px] tracking-[0.22px]'>
          Horem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className='w-[588px] h-[438px] relative z-30'>
        <Image
          src={FoodImage1}
          width={443}
          height={438}
          sizes="100vw"
          className="object-contain object-center scale-125"
          alt="food1"
        />
        <div className="absolute bottom-5 right-3">
          <Image
            src={FoodImage2}
            width={313}
            height={313}
            sizes="100vw"
            className="z-10"
            alt="food2"
          />
        </div>
      </div>
      <div className="absolute top-0">
        <FooterBackground />
      </div>
    </div>
  );
};

export default HomePageMain;