import { useState, useEffect } from 'react';
import axios from 'axios';

const useFoods = () => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getFoods = async () => {
    try {
      const {data} = await axios.get('http://localhost:8000/category/get');
      setResponse(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFoods();
  }, []);

  return { response, loading, error };
};

export default useFoods;
