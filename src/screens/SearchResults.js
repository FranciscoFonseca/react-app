import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import { useResults } from "./utils";

function SearchResults() {
  const location = useLocation();
  const inputValue = new URLSearchParams(location.search).get("input");
  const navigate = useNavigate();

  const [results, getResults] = useResults(inputValue);
  useEffect(() => {
    getResults();
  }, []);

  const HandleClick = (API) => {
    navigate({ pathname: "/Result/", search: `?API=${inputValue}` });
  };

  return (
    <div className="full-container">
      <h1>You searched for: {inputValue}</h1>

      <div className="card-container">
        {results &&
          results.map((entry) => {
            return (
              <div className="card" onClick={() => HandleClick(entry.API)} key={entry.API}>
                <div
                  className="card-image"
                  style={{
                    backgroundImage: `url("https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${entry.Link}")`,
                  }}
                ></div>
                <div className="card-content">
                  <div className="card-title">{entry.API}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SearchResults;
