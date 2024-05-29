import { useEffect } from "react";
import { useCountries } from "../../contexts/CountriesContext";
import styles from "./CountrySearch.module.scss";
import SearchIcon from "@mui/icons-material/Search";

function CountrySearch() {
  const {
    searchQuery,
    setSearchQuery,
    handleCountrySearch,
    filteredContinent,
  } = useCountries();

  useEffect(() => {
    handleCountrySearch();
  }, [searchQuery, filteredContinent]);

  return (
    <div className={styles.searchInputContainer}>
      <SearchIcon />
      <input
        type="search"
        id="search-form"
        className={styles.searchInput}
        placeholder="Search for a country..."
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
    </div>
  );
}

export default CountrySearch;
