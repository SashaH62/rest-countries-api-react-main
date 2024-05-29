import { useCountries } from "../../contexts/CountriesContext";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import styles from "./CountryFilter.module.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect } from "react";

function CountryFilter() {
  const {
    continents,
    filteredContinent,
    filterCountries,
    isLoading,
    setFilteredContinent,
    setFilteredCountries,
    handleCountrySearch,
  } = useCountries();

  useEffect(() => {
    setFilteredCountries(filterCountries(filteredContinent));
    handleCountrySearch();
  }, [filteredContinent]);

  if (isLoading) return;

  return (
    <Box sx={{ maxWidth: 200, minWidth: 200 }}>
      <FormControl fullWidth className={styles.countryFormControl}>
        <InputLabel id="countries-filter">Filter By Region</InputLabel>
        <Select
          value={filteredContinent}
          onChange={(e) => setFilteredContinent(e.target.value)}
          name="countries-filter"
          label="Filter By Region"
          className={styles.countryFilter}
          IconComponent={() => <KeyboardArrowDownIcon />}
          sx={{ fontSize: "14px" }}
        >
          <MenuItem key="all" value="all">
            All
          </MenuItem>
          {continents.map((continent, index) => {
            return (
              <MenuItem key={index} value={continent}>
                {continent}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default CountryFilter;
