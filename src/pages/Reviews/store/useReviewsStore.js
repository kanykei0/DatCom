import { useState, useEffect } from "react";
import { useApiStore } from "utils/requester/requester";

export const useReviewsStore = (offset = 0) => {
  const [reviews, setReviews] = useState([]);
  const [count, setCount] = useState(0);
  const { fetchData, loading } = useApiStore();

  useEffect(() => {
    console.log(offset);
  }, [offset]);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetchData(
          `services/review?limit=6&offset=${offset}`
        );
        setReviews(response.results);
        setCount(Math.ceil(response.count / 6));
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchVideoData();
  }, [offset, fetchData]);

  return {
    reviews,
    count,
    loading,
  };
};
