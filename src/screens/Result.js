import React, { useEffect } from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
import { useResults } from "./utils";

function Result() {
  const location = useLocation();
  const inputValue = new URLSearchParams(location.search).get("API");
  const [results, getResults] = useResults(inputValue);
  useEffect(() => {
    getResults();
  }, []);

  return (
    <div class="container">
      {results.length > 0 && (
        <>
          <div class="header">
            <div class="header-title"> {results[0].API}</div>
            <a href={results[0].Link} class="header-link">
              Link to Page
            </a>
          </div>
          <div class="api-properties">
            <div class="api-property">
              <div class="api-property-label">Auth:</div>
              <div class="api-property-value">{results[0].Auth}</div>
            </div>
            <div class="api-property">
              <div class="api-property-label">Category:</div>
              <div class="api-property-value">{results[0].Category}</div>
            </div>
            <div class="api-property">
              <div class="api-property-label">Cors:</div>
              <div class="api-property-value">{results[0].Cors}</div>
            </div>
            <div class="api-property">
              <div class="api-property-label">HTTPS:</div>
              <div class="api-property-value">
                {results[0].HTTPS.toString()}
              </div>
            </div>
            <div class="api-property">
              <div class="api-property-label">Link:</div>
              <div class="api-property-value">{results[0].Link}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default Result;
