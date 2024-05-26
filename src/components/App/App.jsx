import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryList from "../../pages/CountryList";
import Country from "../../pages/Country";
import { useEffect, useState } from "react";

function App() {
  const BASE_URL = "https://restcountries.com";

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCountries() {
      try {
        setIsLoading(true);
        const res = await fetch(BASE_URL);
        const data = await res.json();
        setCountries(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCountries();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<CountryList countries={countries} isLoading={isLoading} />}
        />
        <Route path="/country" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
