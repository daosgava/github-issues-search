import { useEffect, useState } from 'react';
import fecthDataByKeyword from '../../InputSearch/fecthDataByKeyword';
import { node } from '../types';

const useFecthDataByKeyword = (debouncedSearchTerm: string, numberOfResults: number): node[] => {
  const [data, setData] = useState<node[]>([]);

  useEffect(() => {
    let isSubscribed = true;
    if (debouncedSearchTerm) {
      const getDate = async () => {
        try {
          const results = await fecthDataByKeyword(debouncedSearchTerm, numberOfResults);
          if (isSubscribed) {
            setData(results);
          }

        } catch (error) {
          console.log(error);
          setData([]);
        }
      }

      getDate();
    } else {
      setData([]);
    }
    return () => {
      isSubscribed = false;
    }
  }, [debouncedSearchTerm, numberOfResults]);

  return data;
};

export default useFecthDataByKeyword;
