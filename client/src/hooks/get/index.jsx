import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/psinous_app/api/${url}`);
        setData(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [url]);

  return { data };
};

export default useFetch;
