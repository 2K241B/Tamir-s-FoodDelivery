import BookIcon from './icons/BookIcon';
import FoodIcon from './icons/FoodIcon';
import TimeIcon from './icons/TimeIcon';

const content = [
  {
    Icon: <BookIcon />,
    Header: 'Хүргэлтийн төлөв хянах',
    p: 'Захиалга бэлтгэлийн явцыг хянах',
  },
  {
    Icon: <TimeIcon />,
    Header: 'Шуурхай хүргэлт',
    p: 'Захиалга бэлтгэлийн явцыг хянах',
  },
  {
    Icon: <FoodIcon />,
    Header: 'Эрүүл, баталгаат орц',
    p: 'Захиалга бэлтгэлийн явцыг хянах',
  },
  {
    Icon: <BookIcon />,
    Header: 'Хоолны өргөн сонголт',
    p: 'Захиалга бэлтгэлийн явцыг хянах',
  },
];


export const Card = () => {
  return (
    <div className='flex w-[1200px] items-start gap-[47px] my-[122px] mx-auto'>
      {content.map((content) => (
        <div className='flex flex-col p-4 rounded-[16px] border-[1px] bg-white border-[#D6D8DB] text-[#272727] min-w-[264.75px] min-h-[155px] justify-center items-start gap-[15px]'>
          <div className="p-[15px]">{content.Icon}</div>
          <div className='flex flex-col items-start justify-center gap-1 items'>
            <h2 className='text-[18px] font-bold'>{content.Header}</h2>
            <p className='text-[13px] text-[#272727] opacity-[0.75]'>{content.p}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;