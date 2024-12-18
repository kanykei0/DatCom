import { useEffect, useState } from "react";
import { useApiStore } from "utils/requester/requester";

export const useFormStore = () => {
  const { fetchData, postRequest, success, resetSuccess, loading } =
    useApiStore();
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetchData(`media/country/`);
        setCountryList(response.results);
        console.log(response.results);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchCountries();
  }, [fetchData]);

  const submitForm = async (formData) => {
    try {
      await postRequest("services/application/", {
        full_name: formData.name,
        phone_number: formData.number,
        country: formData.country,
        degree: formData.study,
        faculty: formData.speciality,
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    submitForm,
    countryList,
    success,
    resetSuccess,
    loading,
  };
};
