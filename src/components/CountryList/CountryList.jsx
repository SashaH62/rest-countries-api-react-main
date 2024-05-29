import styles from "./CountryList.module.scss";
import CountryItem from "../CountryItem/CountryItem";
import { useCountries } from "../../contexts/CountriesContext";

function CountryList() {
  const { filteredCountries } = useCountries();

  return (
    <>
      {filteredCountries.length > 0 ? (
        <div className={styles.countryList}>
          {filteredCountries.map((country) => (
            <CountryItem
              country={country}
              key={`${country.name.common}-card`}
            />
          ))}
        </div>
      ) : (
        <h3 className={styles.noResults}>
          😱 Looks like there are no countries that match that description.{" "}
        </h3>
      )}
    </>
  );
}

export default CountryList;
