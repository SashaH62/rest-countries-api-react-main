import Main from "../components/Main/Main";
import CountryList from "../components/CountryList/CountryList";
import CountryFilterBar from "../components/CountryFilterBar/CountryFilterBar";
import { useCountries } from "../contexts/CountriesContext";
import Error from "../components/Error/Error";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { useEffect } from "react";

function Countries() {
  const { isLoading, error, fetchCountries } = useCountries();

  useEffect(() => {
    fetchCountries();
  }, []);

  if (isLoading) return <LoadingSpinner />;

  if (error && !isLoading) return <Error />;

  return (
    <Main>
      <CountryFilterBar />
      <CountryList />
    </Main>
  );
}

export default Countries;
