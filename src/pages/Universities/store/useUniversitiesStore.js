import { useState, useEffect } from "react";
import { useApiStore } from "utils/requester/requester";

export const useUniversitiesStore = (offset = 0, limit = 12, search) => {
  const [universities, setUniversities] = useState([]);
  const [count, setCount] = useState(0);
  const { fetchData, loading } = useApiStore();

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        let response;
        if (search) {
          response = await fetchData(
            `media/university/?search=${search.search}  `
          );
        } else {
          response = await fetchData(
            `media/university/?limit=${limit}&offset=${offset}  `
          );
        }
        setUniversities(response.results);
        setCount(Math.ceil(response.count / limit));
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchUniversities();
  }, [offset, search, fetchData]);

  return {
    universities,
    count,
    loading,
  };
};
