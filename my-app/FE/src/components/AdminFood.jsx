'use client';
import OrderDialog from '@/components/OrderDialog';
import FoodDialog from './FoodDialog';
import { useContext } from 'react';
import { DataContext } from '@/app/admin/page';
import { useSearchParams } from 'next/navigation';

export const AdminFoods = () => {
  const { response } = useContext(DataContext);

  const searchParams = useSearchParams();

  const category = searchParams.get('category');

  return (
    <div className='bg-[#F7F7F8] w-full pl-8 py-6 pr-[112px] flex flex-col gap-8 pb-20'>
      <div className='flex justify-between py-4'>
        <h1 className='text-[22px] text-[#272727] font-bold'>
          {response && category && response[category].name}
        </h1>
        <FoodDialog />
      </div>
      {response && category && response[category].foods.length !== 0 ? (
        <div className='flex flex-wrap gap-6 gap-y-[60px] w-full'>
          {response[category].foods.map((food) => (
            <OrderDialog
              name={food.name}
              imageSrc={food.image}
              price={food.price}
              discount={food.discount <= 0 ? null : food.discount}
              recipe={food.ingeredient}
              alt={food.name}
            />
          ))}
        </div>
      ) : (
        <div className='flex flex-col gap-[30px] items-center justify-center text-[#808080]'>
          <AdminPlusIcon />
          <p>Уучлаарай, Таны меню хоосон байна.</p>
        </div>
      )}
    </div>
  );
};

export default AdminFoods;