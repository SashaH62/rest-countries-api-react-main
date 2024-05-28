import styles from "./Country.module.scss";
import { useParams } from "react-router-dom";
import { useCountries } from "../contexts/CountriesContext";
import { useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import Error from "../components/Error/Error";
import Main from "../components/Main/Main";

function Country() {
  const { name } = useParams();
  const {
    currentCountry,
    getCurrentCountry,
    isLoading,
    error,
    fetchCountries,
    filteredCountries,
  } = useCountries();

  useEffect(() => {
    if (!filteredCountries) {
      fetchCountries();
    }
    getCurrentCountry(name);
  }, [name]);

  if (isLoading) return <LoadingSpinner />;

  if (error && !isLoading) return <Error />;

  if (!currentCountry) return;

  const {
    name: { nativeName },
    capital,
    region,
    subregion,
    population,
    flags,
    languages,
    currencies,
    tld,
  } = currentCountry[0];

  // const nativeNames = Object.values(nativeName).reduce((arr, curr) => {
  //   arr = [...arr, curr];
  // });

  // console.log(Object.values(nativeNames));

  return (
    <Main>
      <section className={styles.countryContainer}>
        <div className={styles.countryImage}>
          <img src={flags.svg} />
        </div>
        <div className={styles.countryData}>
          <h2>{name}</h2>
          <div className={styles.countryDataColumns}>
            <ul>
              <li>
                <strong>Native name: </strong> {name.nativeName}
              </li>
              <li>
                <strong>Population: </strong> {population}
              </li>
              <li>
                <strong>Region: </strong> {region}
              </li>
              <li>
                <strong>Sub Region: </strong> {subregion}
              </li>
              <li>
                <strong>Capital: </strong>
                {capital.map((el) => (
                  <span key={el}>{el}</span>
                ))}
              </li>
            </ul>
            <ul>
              <li>
                <strong>Top Level Domain:</strong>
              </li>
              <li>
                <strong>Currencies: </strong>
                {Object.entries(languages).map((el) => (
                  <span key={el[0]}>{el[1]}</span>
                ))}
              </li>
              <li>
                <strong>Languages: </strong>
                {Object.entries(languages).map((el) => (
                  <span key={el[0]}>{el[1]}</span>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Main>
  );
}

export default Country;
