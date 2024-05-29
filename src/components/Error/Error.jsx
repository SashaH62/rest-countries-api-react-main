import Button from "../Button/Button";
import { useCountries } from "../../contexts/CountriesContext";
import styles from "./Error.module.scss";

function Error() {
  const { fetchCountries } = useCountries();

  return (
    <div className={styles.errorMessage}>
      😣 Whoops! Looks like there has been an error. Please refresh the app.
      <Button clickHandler={fetchCountries}>🚀 Refresh app</Button>
    </div>
  );
}

export default Error;
