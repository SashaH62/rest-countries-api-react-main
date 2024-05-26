import { createContext, useContext, useEffect, useRef, useState } from "react";

const CountriesContext = createContext();

function CountriesProvider({ children }) {
  const BASE_URL = "https://restcountries.com/v3.1";

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredContinent, setFilteredContinent] = useState("");
  const filteredCountries = useRef(null);

  useEffect(() => {
    async function fetchCountries() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/all`);
        const data = await res.json();
        setCountries(data);
        filteredCountries.current = data;
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCountries();
  }, []);

  function handleCountryFilter(continent) {
    setFilteredContinent(continent);
    filteredCountries.current = countries.filter(
      (country) => country.region === continent
    );
  }

  return (
    <CountriesContext.Provider
      value={{
        countries,
        filteredCountries,
        isLoading,
        error,
        handleCountryFilter,
        filteredContinent,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

function useCountries() {
  const context = useContext(CountriesContext);
  if (context === undefined)
    throw new Error(
      "CountriesContext cannot be used outside of CountriesProvider."
    );

  return context;
}

export { CountriesProvider, useCountries };
