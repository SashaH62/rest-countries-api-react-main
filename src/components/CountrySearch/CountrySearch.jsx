import { useCountries } from "../../contexts/CountriesContext";

function CountrySearch() {
  const { searchQuery, handleCountrySearch } = useCountries();

  return (
    <div>
      <input
        type="search"
        id="search-form"
        className="search-input"
        placeholder="Search for a country..."
        onChange={(e) => handleCountrySearch(e.target.value)}
        value={searchQuery}
      />
    </div>
  );
}

export default CountrySearch;
