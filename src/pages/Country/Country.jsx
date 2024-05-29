import styles from "./Country.module.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCountries } from "../../contexts/CountriesContext";
import { useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Error from "../../components/Error/Error";
import Main from "../../components/Main/Main";
import Button from "../../components/Button/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function Country() {
  const { name } = useParams();
  const navigate = useNavigate();

  const {
    currentCountry,
    getCurrentCountry,
    isLoading,
    error,
    fetchCountries,
    countries,
    convertPopulation,
    setSearchQuery,
    setFilteredContinent,
    getBorderingCountries,
  } = useCountries();

  useEffect(() => {
    if (!countries) {
      fetchCountries();
    }
    getCurrentCountry(name);
  }, [name]);

  function handleBack(e) {
    e.preventDefault();
    setSearchQuery("");
    setFilteredContinent("");
    navigate(-1);
  }

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
    borders,
  } = currentCountry.at(0);

  const nativeNames = nativeName ? Object.values(nativeName) : [];
  const languagesArr = languages ? Object.values(languages) : [];
  const currenciesArr = currencies ? Object.values(currencies) : [];
  const tldArr = tld ? Object.values(tld) : [];

  let fetchedBorderCountries = borders
    ? Object.values(
        borders.reduce((arr, curr) => {
          return [...arr, getBorderingCountries(curr)];
        }, [])
      )
    : [];

  return (
    <Main>
      <Button
        clickHandler={(e) => {
          handleBack(e);
        }}
      >
        <KeyboardBackspaceIcon /> Back
      </Button>
      <section className={styles.countryContainer}>
        <div className={styles.countryImage}>
          <img src={flags.svg} />
        </div>
        <div className={styles.countryData}>
          <h2>{name}</h2>
          <div className={styles.countryDataColumns}>
            <ul>
              {nativeNames > 0 && (
                <li>
                  <strong>Native Names: </strong>
                  {nativeNames?.map((name, index) => (
                    <span key={`nName-${index}`}>
                      {name.common}
                      {index + 1 < nativeNames.length ? ", " : ""}
                    </span>
                  ))}
                </li>
              )}
              <li>
                <strong>Population: </strong> {convertPopulation(population)}
              </li>
              <li>
                <strong>Region: </strong> {region}
              </li>
              {subregion && (
                <li>
                  <strong>Sub Region: </strong> {subregion}
                </li>
              )}
              {capital && (
                <li>
                  <strong>Capital: </strong>
                  {capital?.map((capitalCity, index) => (
                    <span key={`capital-${index}`}>
                      {capitalCity}
                      {index + 1 < capital.length ? ", " : ""}
                    </span>
                  ))}
                </li>
              )}
            </ul>
            <ul>
              <li>
                <strong>Top Level Domain: </strong>
                {tldArr.map((tld, index) => (
                  <span key={`tld-${index}`}>
                    {tld}
                    {index + 1 < tldArr.length ? ", " : ""}
                  </span>
                ))}
              </li>
              {currencies && (
                <li>
                  <strong>Currencies: </strong>
                  {currenciesArr.map((currency, index) => (
                    <span key={`currency-${index}`}>
                      {currency.name}
                      {index + 1 < currenciesArr.length ? ", " : ""}
                    </span>
                  ))}
                </li>
              )}
              {languages && (
                <li>
                  <strong>Languages: </strong>
                  {languagesArr.map((language, index) => (
                    <span key={`language-${index}`}>
                      {language}
                      {index + 1 < languagesArr.length ? ", " : ""}
                    </span>
                  ))}
                </li>
              )}
            </ul>
          </div>
          {fetchedBorderCountries.length > 0 && (
            <div className={styles.bordersList}>
              <div>
                <p>
                  <strong>Border Countries: </strong>
                </p>
              </div>
              <ul>
                {fetchedBorderCountries.map((border, index) => (
                  <Link
                    to={`/country/${border.at(0).name.common}`}
                    key={`border-${border.at(0).name.common}-link`}
                  >
                    <li>{border.at(0).name.common}</li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </Main>
  );
}

export default Country;
