import axios from "axios";
import { useEffect, useState } from "react";

const dataFetch = (url) => {
  const [load, setLoad] = useState(false);
  const [wrong, setWrong] = useState(null);
  const [resData, setresData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoad(true);

      try {
        const res = await axios.get(url);
        setresData(res.data);
        setLoad(false);
      } catch (error) {
        setLoad(false);
        setWrong(error);
      } finally {
        setLoad(false);
      }
    };

    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoad(true);

    try {
      const res = await axios.get(url);
      setresData(res.data);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      setWrong(error);
    } finally {
      setLoad(false);
    }
  };

  return { load, wrong, resData, reFetch };
};

export default dataFetch;
