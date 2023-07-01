import { useEffect, useState } from "react";
import axios, { AxiosResponse, CancelTokenSource } from "axios";

export interface Data {
  body: string;
}

const useFetch = (url: string) => {
  const [data, setData] = useState<string | Data[]>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | unknown>("");

  useEffect(() => {
    let source: CancelTokenSource;

    const fetchData = async () => {
      try {
        source = axios.CancelToken.source();
        const response: AxiosResponse = await axios.get(url, {cancelToken: source.token,});
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      if (source) {
        source.cancel("Request Cancelled");
      }
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
