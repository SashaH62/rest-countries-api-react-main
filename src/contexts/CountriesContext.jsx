import { createContext, useContext, useEffect, useRef, useState } from "react";

const CountriesContext = createContext();

function CountriesProvider({ children }) {
  // const API_KEY = "Tvvrc8TWrsuTfYY20GM4tpgGI9ruP4e3LTEzJljk";
  const BASE_URL = "https://restcountries.com/v3.1";

  const [countries, setCountries] = useState(() =>
    sessionStorage.getItem("countryData")
      ? JSON.parse(sessionStorage.getItem("countryData"))
      : []
  );
  const [currentCountry, setCurrentCountry] = useState("");
  const [continents, setContinents] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filteredContinent, setFilteredContinent] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchCountries() {
    try {
      setIsLoading(true);
      setError("");
      if (!sessionStorage.getItem("countryData")) {
        const res = await fetch(`${BASE_URL}/all`);
        const data = await res.json();
        setCountries(data);
        setFilteredCountries(data);
        setContinents(getContinents(data));
        sessionStorage.setItem("countryData", JSON.stringify(data));
      } else {
        setCountries(JSON.parse(sessionStorage.getItem("countryData")));
        setFilteredCountries(JSON.parse(sessionStorage.getItem("countryData")));
        setContinents(
          getContinents(JSON.parse(sessionStorage.getItem("countryData")))
        );
      }
    } catch (err) {
      if (sessionStorage.getItem("countryData")) {
        setError("");
      } else {
        setError(err);
        console.error(err);
      }
    } finally {
      setIsLoading(false);
    }
  }

  function getCurrentCountry(name) {
    setCurrentCountry(
      countries.filter((country) => country.name.common === name)
    );
    setIsLoading(false);
  }

  function getContinents(countries) {
    const continents = countries.reduce((arr, country) => {
      if (!arr.map((el) => el).includes(country.region)) {
        return [...arr, country.region];
      } else {
        return arr;
      }
    }, []);

    return continents;
  }

  function handleCountrySearch() {
    let countriesSearch = [];
    if (searchQuery) {
      countriesSearch = filterCountries(filteredContinent).filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCountries(countriesSearch);
    } else {
      setFilteredCountries(
        filteredContinent ? filterCountries(filteredContinent) : countries
      );
    }
  }

  function filterCountries(continent) {
    if (continent === "all" || !continent) return countries;
    return countries.filter((country) => country.region === continent);
  }

  function convertPopulation(population) {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function getBorderingCountries(countryCode) {
    return countries.filter((country) => country.cca3 === countryCode);
  }

  return (
    <CountriesContext.Provider
      value={{
        countries,
        fetchCountries,
        continents,
        setFilteredContinent,
        filteredCountries,
        setFilteredCountries,
        filteredContinent,
        searchQuery,
        setSearchQuery,
        isLoading,
        error,
        getCurrentCountry,
        currentCountry,
        convertPopulation,
        filterCountries,
        handleCountrySearch,
        getBorderingCountries,
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
