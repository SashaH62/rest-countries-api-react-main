import { useEffect } from "react";
import { useCountries } from "../../contexts/CountriesContext";

function CountryFilter() {
  const { continents, filteredContinent, handleCountryFilter, isLoading } =
    useCountries();

  // useEffect(() => {
  //   if (continents.length && !filteredContinent) {
  //     handleCountryFilter(continents[0]);
  //   }
  // }, [continents]);

  if (isLoading) return;

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
