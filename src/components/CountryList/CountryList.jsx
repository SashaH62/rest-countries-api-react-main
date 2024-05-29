import styles from "./CountryList.module.scss";
import CountryItem from "../CountryItem/CountryItem";
import { useCountries } from "../../contexts/CountriesContext";

function CountryList() {
  const { filteredCountries } = useCountries();

  return (
    <div className={styles.countryList}>
      {filteredCountries.map((country) => (
        <CountryItem country={country} key={`${country.name.common}-card`} />
      ))}
    </div>
  );
}

export default CountryList;
