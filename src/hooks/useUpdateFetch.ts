import { useState } from "react";

const useUpdateFetch = () => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const usePost = (url: string, body: any) => {
    setIsLoading(true);
    fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(body),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setResponse(data);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return { usePost, response, isLoading, error };
};

export default useUpdateFetch;
