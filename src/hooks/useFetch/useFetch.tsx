import { useEffect, useState } from "react";

interface FetchProps {
  url: RequestInfo;
  init: RequestInit;
}
type FetchData = any;

export const useFetch = ({ url, init }: FetchProps) => {
  const [data, setData] = useState<FetchData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(url, init);

        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
      } catch (err: any) {
        setError(err.msg);
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  return data;
};

export default useFetch;
