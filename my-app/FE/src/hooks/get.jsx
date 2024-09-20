import { useState, useEffect } from 'react';
import axios from 'axios';
import groupBy from 'lodash/groupBy';

const useFoods = () => {
  const [foods, setFoods] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getFoods = async () => {
    try {
      const {data} = await axios.get('http://localhost:8000/food/get');
      setFoods(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFoods();
  }, []);

  return { foods, loading, error };
};

export default useFoods;
