import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Header, WhatWeDo, Contact, Home } from "./components";
import {Headers} from "./Headers"

function App() {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );
  function storeLanguageInLocalStorage(language) {
    localStorage.setItem("language", language);
  }
  {/*useEffect(() => {
    localStorage.getItem(language);
  },[language]);  */}

  return (
    <div className="App">
      <Navigation
        language={language}
        handleSetLanguage={language => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}
      />
      <Header language={language} />
      <Headers/>
      <div class="container">
        <div class="row">
          <div class="col-md-8 mb-5">
            <WhatWeDo language={language} />
          </div>
          <div class="col-md-4 mb-5">
            <Contact language={language} />
          </div>
        </div>
      </div>
      <Footer language={language} />
    </div>
  );
}



export default App;