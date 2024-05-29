import { Link } from "react-router-dom";
import styles from "./CountryItem.module.scss";
import { useCountries } from "../../contexts/CountriesContext";

function CountryItem({ country }) {
  const { convertPopulation } = useCountries();

  const { name, population, region, capital, flags } = country;

  return (
    <Link to={`/country/${name.common}`} className={styles.countryItemLink}>
      <div className={styles.countryItem}>
        <div className={styles.imageContainer}>
          <img src={flags.svg} alt={name.common} />
        </div>
        <div className={styles.countryDetailsContainer}>
          <h3>{name.common}</h3>
          <ul>
            <li>
              <strong>Population:</strong> {convertPopulation(population)}
            </li>
            <li>
              <strong>Region:</strong> {region}
            </li>
            <li>
              <strong>Capital:</strong> {capital}
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default CountryItem;
