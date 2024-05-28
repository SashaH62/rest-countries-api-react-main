import { useCountries } from "../../contexts/CountriesContext";
import styles from "./Error.module.scss";

function Error() {
  const { fetchCountries } = useCountries();

  return (
    <div className={styles.errorMessage}>
      😣 Whoops! Looks like there has been an error. Please refresh the app.
      <button onClick={fetchCountries}>🚀 Refresh app</button>
    </div>
  );
}

export default Error;
