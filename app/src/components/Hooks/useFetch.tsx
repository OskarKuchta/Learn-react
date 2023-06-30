import { useEffect, useState } from "react";
import axios from "axios";

interface Data {
  body: string;
}

const useFetch = (url: string) => {
  const [data, setData] = useState<string | Data>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | unknown>("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      const source = axios.CancelToken.source();
      source.cancel("Request Cancelled");
    };
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
