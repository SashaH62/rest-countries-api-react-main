import styles from "./CountryList.module.scss";
import CountryItem from "../CountryItem/CountryItem";
import { useCountries } from "../../contexts/CountriesContext";

function CountryList() {
  const { filteredCountries } = useCountries();

  return (
    <div className={styles.countryList}>
      {filteredCountries.map((country, index) => (
        <CountryItem country={country} key={index} />
      ))}
    </div>
  );
}

export default CountryList;
