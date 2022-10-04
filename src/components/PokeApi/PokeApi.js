import { useState, useEffect } from "react";

export const useFetch = (url, showPokemons) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const endpoints = [];

      setLoading(true);

      for (let i = showPokemons - 10; i < showPokemons; i++) {
        endpoints.push(`${url}/${i}`);
      }

      const promises = endpoints.map(async (endpoint) => {
        const res = await fetch(endpoint);
        return await res.json();
      });

      const results = await Promise.all(promises);

      setData(results);

      setLoading(false);
    };
    fetchData();
  }, [url, showPokemons]);

  return { data, loading };
};
