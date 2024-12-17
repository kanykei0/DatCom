import { useState, useEffect } from "react";
import { useApiStore } from "utils/requester/requester";

export const useCountryDetailedStore = (id) => {
  const [university, setUniversity] = useState({});
  const [country, setCountry] = useState({});
  const { fetchData, loading } = useApiStore();

  useEffect(() => {
    if (!id) return;

    const fetchUniversity = async () => {
      try {
        const response = await fetchData(`media/university/?country=${id}`);
        setUniversity(response);
      } catch (error) {
        throw new Error(error);
      }
    };

    const fetchCountry = async () => {
      try {
        const response = await fetchData(`media/country/${id}/`);
        setCountry(response.results);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchUniversity();
    fetchCountry();
  }, [id, fetchData]);

  return {
    university,
    country,
    loading,
  };
};
