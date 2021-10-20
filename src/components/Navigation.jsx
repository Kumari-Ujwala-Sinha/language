import React from "react";

function Navigation(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
       
        <a class="navbar-brand" href="#">
         {props.language==="English"?"React Multi-Language Website":"ബഹുഭാഷാ വെബ്സൈറ്റ് പ്രതികരിക്കുക"} 
        </a>
        

        <div className="language-select">
          <select
            className="custom-select"
            value={props.language}
            onChange={e => props.handleSetLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Malayalam">Malayalam</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;