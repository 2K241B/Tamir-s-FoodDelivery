import Image from 'next/image';
import DeliveryZone from '@/components/assets/Rectangle 2707.png';
import TermOfServiceIcon from '@/components/icons/termsicon';

const position = [
    'Нархан хотхон',
    '26-р байр',
    '26-р байр',
    '45-р байр',
    '3-р байр',
    'Хоймор хотхон '
];

const page = () => {
    return (
        <div className='px-[120px] pt-[61px] pb-[45px] flex flex-col justify-center gap-10'>
            <Image src={DeliveryZone} height={616} width={1212} className='m-auto' />
            <div className='w-[1200px] m-auto'>
                <div className='flex items-center p-4 pb-[22px] text-[22px] font-bold text-[#272727] gap-1'>
                    <TermOfServiceIcon />
                    <h2>Хүргэлтийн бүс дэх хаягууд</h2>
                </div>
                <div className="flex gap-8 w-[1200px] m-auto">
                    <div className='flex flex-col w-[580px] gap-4 p-6  mr-6 shadow-md rounded-2xl'>
                        <h3 className='border-b border-[#18BA51] py-4 text-[20px] font-[590]'>А бүс</h3>
                        <div className="flex justify-between gap-4 ">
                            <div className='flex-col flex gap-4 w-[262px]'>
                                {position.map((el) => (
                                    <p>{el}</p>
                                ))}
                            </div>
                            <div className='flex-col flex gap-4 w-[262px]'>
                                {position.map((el) => (
                                    <p>{el}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-[580px] gap-4 p-6 mr-6 shadow-md rounded-2xl'>
                        <h3 className='border-b border-[#18BA51] py-4 text-[20px] font-[590]'>Б бүс</h3>
                        <div className="flex justify-between gap-4 ">
                            <div className='flex-col flex gap-4 w-[262px]'>
                                {position.map((el) => (
                                    <p>{el}</p>
                                ))}
                            </div>
                            <div className='flex-col flex gap-4 w-[262px]'>
                                {position.map((el) => (
                                    <p>{el}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;