import CountryFilter from "../CountryFilter/CountryFilter";
import CountrySearch from "../CountrySearch/CountrySearch";
import styles from "./CountryFilterBar.module.scss";

function CountryFilterBar() {
  return (
    <section className={styles.countryFilterBar}>
      <CountrySearch />
      <CountryFilter />
    </section>
  );
}

export default CountryFilterBar;
