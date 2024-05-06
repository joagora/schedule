import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return { data, isLoading, error };
};

export default useFetch;
