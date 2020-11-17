import { useState, useEffect } from 'react';
import req from '../utils/request';

const useData = (endpoint: string, query: object, deps: any[] = []) => {
  // const [totalPokemons, setTotalPokemons] = useState(0);
  const [data, setData] = useState({ total: 0, pokemons: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isFalse, setIsFalse] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const result = await req(endpoint, query);
        setData(result);
      } catch (error) {
        setIsFalse(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, deps);

  return {
    data,
    isLoading,
    isFalse,
  };
};

export default useData;
