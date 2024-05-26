import { useEffect } from "react";
import { useCountries } from "../../contexts/CountriesContext";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function CountryFilter() {
  const { countries, filteredContinent, handleCountryFilter, isLoading } =
    useCountries();

  const continents = countries.reduce((arr, country) => {
    if (!arr.map((el) => el).includes(country.region)) {
      return [...arr, country.region];
    } else {
      return arr;
    }
  }, []);

  useEffect(() => {
    if (continents.length && !filteredContinent) {
      handleCountryFilter(continents[0]);
    }
  }, [continents, filteredContinent]);

  if (isLoading) return <LoadingSpinner />;

  if (!continents.length) return;

  return (
    <select
      value={filteredContinent}
      onChange={(e) => handleCountryFilter(e.target.value)}
    >
      {continents.map((continent, index) => {
        return (
          <option key={index} value={continent}>
            {continent}
          </option>
        );
      })}
    </select>
  );
}

export default CountryFilter;
