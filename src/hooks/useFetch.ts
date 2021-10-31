import { useState, useCallback } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const request = useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError("");
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      console.log(json);
      if (response.ok === false) throw new Error(json.message);
    } catch {
      json = null;
      setError("error");
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { data, loading, error, request };
};

export default useFetch;
