import { useState } from 'react';
import ArrowIcon from './icons/ArrowIcon';
import TermOfServiceIcon from './icons/termsicon';
import foodImage from './../components/assets/1.png';
import Image from 'next/image';

export const CategoryFeature = ({ categoryName, data }) => {
    const [itemsToShow, setItemsToShow] = useState(4);

    const handleLoadMore = () => {
        setItemsToShow(prevItemsToShow => prevItemsToShow + 4);
    };

    return (
        <div className='w-[1200px] mx-auto flex flex-col gap-6'>
            <div className='flex items-center justify-between py-4'>
                <div className='flex items-center justify-center gap-1'>
                    <TermOfServiceIcon />
                    <h2 className='w-[1039px] text-[22px] font-bold text-[#272727]'>{categoryName}</h2>
                </div>
                <div
                    className='flex items-center justify-center gap-2 text-[#18BA51] text-sm cursor-pointer'
                    onClick={handleLoadMore}
                >
                    <p>Бүгдийг харах</p>
                    <ArrowIcon />
                </div>
            </div>
            <div className='flex flex-wrap items-center gap-6'>
                {data && data.length > 0 ? (
                    data.slice(0, itemsToShow).map((item) => {
                        const originalPrice = parseFloat(item.price);
                        const discountAmount = item.discount;
                        const discountedPrice = originalPrice - (originalPrice * (discountAmount / 100));

                        return (
                            <div
                                key={item._id}
                                className='flex flex-col rounded-lg w-[282px]'
                            >
                                <div className='relative w-[282px]'>
                                    <Image
                                        src={foodImage} 
                                        alt={item.name} 
                                        objectFit='cover'
                                        layout='responsive'
                                        width={282}
                                        height={200} 
                                    />
                                    {discountAmount > 0 && (
                                        <p className='absolute px-2 py-1 text-white bg-green-600 border-2 border-white rounded-2xl top-4 right-6'>
                                            {item.discount}%
                                        </p>
                                    )}
                                </div>
                                <h3 className='ml-2 text-lg font-bold'>{item.name}</h3>
                                <p className='ml-2 text-xl text-green-600'>
                                    {discountAmount > 0 ? (
                                        <>
                                            <span className='ml-2 text-green-600'>{discountedPrice.toFixed(0)}₮</span>
                                            <span className='ml-2 text-black line-through'>{originalPrice}₮</span>
                                        </>
                                    ) : (
                                        `${originalPrice}₮`
                                    )}
                                </p>
                            </div>
                        );
                    })
                ) : (
                    <p>No items available</p>
                )}
            </div>
        </div>
    );
};

export default CategoryFeature;
