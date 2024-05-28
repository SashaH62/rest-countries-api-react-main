import { BrowserRouter, Route, Routes } from "react-router-dom";
import Country from "../../pages/Country";
import Countries from "../../pages/Countries";
import { CountriesProvider } from "../../contexts/CountriesContext";
import Header from "../Header/Header";
import { useState } from "react";

function App() {
  const [colorScheme, setColorScheme] = useState("light");

  return (
    <>
      <CountriesProvider>
        <BrowserRouter>
          <Header
            colorScheme={colorScheme}
            colorSchemeHandler={setColorScheme}
          />
          <Routes>
            <Route path="/" element={<Countries />}>
              <Route path="/:region" element={<Countries />} />
            </Route>
            <Route path="country/:name" element={<Country />} />
          </Routes>
        </BrowserRouter>
      </CountriesProvider>
    </>
  );
}

export default App;
