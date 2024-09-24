'use client';
import { axiosInstance } from '@/lib/axios';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFoodsAndCategories = () => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/category/foods');
      setResponse(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const refetch = async (id) => {
    setLoading(true);
    const newData = response.filter((res) => res._id != id);
    setResponse(newData);
    setLoading(false);
  };
  return { response, loading, error, refetch };
};
