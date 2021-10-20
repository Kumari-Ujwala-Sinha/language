import React, { useState, useEffect } from "react";
import { Header } from "./components";

export const Headers = () => {
    let languageStoredInLocalStorage = localStorage.getItem("language")
    let [language, setLanguage] = useState(
        languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
      );
    {/*  useEffect(() => {
        setLanguage=localStorage.getItem("language");
      },[language]); */}   
    return (
        <div>
            <Header language={language} />
        </div>
    )
}
