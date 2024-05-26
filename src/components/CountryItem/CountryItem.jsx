import styles from "./CountryItem.module.scss";

function CountryItem({ country }) {
  const {
    name: { common },
    population,
    region,
    capital,
    flags: { svg },
  } = country;

  return (
    <div className={styles.countryItem}>
      <div className={styles.imageContainer}>
        <img src={svg} alt={common} />
      </div>
      <div className={styles.countryDetailsContainer}>
        <h3>{common}</h3>
        <ul>
          <li>Population: {population}</li>
          <li>Region: {region}</li>
          <li>Capital: {capital}</li>
        </ul>
      </div>
    </div>
  );
}

export default CountryItem;
