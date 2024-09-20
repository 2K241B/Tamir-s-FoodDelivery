'use client'
import SideBar from '@/components/SideBar';
import { axiosInstance } from '@/lib/axios';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const FoodPage = () => {

  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')
  
  useEffect(()=>{
    const fetch = async() => {
      const {data} = await axiosInstance(`/food?categoryId=${categoryParam}`)
      console.log(data)
    }
    fetch()
  },[categoryParam])
  return (
      <div className="flex flex-row">
        <SideBar />
      </div>
  );
};

export default FoodPage;
