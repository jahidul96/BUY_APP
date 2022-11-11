import axios from "axios";
import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await axios.get(url);
        setData(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setLoading(error);
      }
    };

    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);

    try {
      const res = await axios.get(url);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setLoading(error);
    }
  };

  return { loading, err, data, reFetch };
};

export default UseFetch;
