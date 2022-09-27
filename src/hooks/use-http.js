import { useCallback, useState } from 'react';

const useHttp = () => {
  const [countryData, setCountryData] = useState([]);
  const [countryError, setCountryError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getCountryData = useCallback(async apiURL => {
    try {
      setCountryError(false);
      setIsLoading(true);

      const response = await fetch(apiURL);

      if (!response.ok) throw new Error('Something went wrong 😟.');

      const data = await response.json();

      setCountryData(data);
      setIsLoading(false);
    } catch (err) {
      setCountryError(true);
      setIsLoading(false);
    }
  }, []);

  return { countryData, countryError, isLoading, getCountryData };
};

export default useHttp;
