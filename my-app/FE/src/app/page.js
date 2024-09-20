'use client'
import { useState, useEffect } from 'react';
import { axiosInstance } from '@/lib/axios';
import { groupBy } from 'lodash';
import HomeFea from '@/components/HomeFea';
import Card from '@/components/card';
import CategoryCard from '@/components/categoryCard';

export default function Home() {
  const [foods, setFoods] = useState({});

  const getFoods = async () => {
    try {
      const { data } = await axiosInstance.get('/food/get');
      console.log(data);
      const groupedData = groupBy(data, (item) => item.categoryId.name);
      setFoods(groupedData);
    } catch (error) {
      console.error('Error :', error);
    } 
  };

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <main>
      <HomeFea />
      <Card />
      <div className="flex flex-col gap-20 pb-20">
        {Object.keys(foods).map((category) => (
          <CategoryCard key={category} categoryName={category} data={foods[category]} />
        ))}
      </div>
    </main>
  );
}
