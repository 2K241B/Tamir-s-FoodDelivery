import BookIcon from './icons/BookIcon';
import FoodIcon from './icons/FoodIcon';
import TimeIcon from './icons/TimeIcon';

const content = [
  {
    Icon: <BookIcon />,
    Header: 'Хүргэлтийн төлөв хянах',
    p: 'Захиалгын төлөвийг шалгах боломжтой.',
  },
  {
    Icon: <TimeIcon />,     
    Header: 'Шуурхай хүргэлт',
    p: 'Захиалгыг түргэн шуурхай хүргэнэ.',
  },
  {
    Icon: <FoodIcon />,
    Header: 'Эрүүл, баталгаат орц',
    p: 'Бүх хоол баталгаатай, эрүүл орцтой.',
  },
  {
    Icon: <BookIcon />,
    Header: 'Хоолны өргөн сонголт',
    p: 'Хоолны олон төрлийн сонголт бий.',
  },
];

export const Card = () => {
  return (
    <div className='flex w-[1200px] items-start gap-[47px] my-[122px] mx-auto'>
      {content.map((item, index) => (
        <div 
          key={index} 
          className='flex flex-col p-4 rounded-[16px] border-[1px] bg-white border-[#D6D8DB] text-[#272727] min-w-[264px] min-h-[155px] justify-center items-start gap-[15px]'
        >
          <div className="p-4">{item.Icon}</div>
          <div className='flex flex-col items-start justify-center gap-1'>
            <h2 className='text-lg font-bold'>{item.Header}</h2>
            <p className='text-sm text-[#272727] opacity-[0.75]'>{item.p}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
