import { BrowserRouter, Route, Routes } from "react-router-dom";
import Country from "../../pages/Country/Country";
import Countries from "../../pages/Countries";
import { CountriesProvider } from "../../contexts/CountriesContext";
import Header from "../Header/Header";
import { getThemeMode } from "../../contexts/ThemeContext.jsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    getThemeMode();
  }, []);

  return (
    <>
      <CountriesProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Countries />} />
            <Route path="country/:name" element={<Country />} />
          </Routes>
        </BrowserRouter>
      </CountriesProvider>
    </>
  );
}

export default App;
