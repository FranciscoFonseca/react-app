import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === "") return;
    navigate({ pathname: "/SearchResults/", search: `?input=${inputValue}` });
  };

  return (
    <>
      <div class="home-container">
        <h1>API Search:</h1>

        <div class="home-input-container">
          <form onSubmit={handleSubmit}>
            <input
              class="home-input"
              type="text"
              placeholder="Enter some text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
            <button type="submit" class="home-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Home;
