import { useState, useEffect } from 'react';
import req from '../utils/request';
import { IQuery } from '../utils/getUrlWithParamsConfig';

const useData = <T>(endpoint: string, query: IQuery, deps: any[] = []) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFalse, setIsFalse] = useState<boolean>(false);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const result = await req<T>(endpoint, query);
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
