import { useState } from "react";

export function useResults(inputValue) {
  const [results, setResults] = useState([]);
  async function getResults() {
    try {
      const url = `http://localhost:3000/api/items/${inputValue}`;
      const encodedUrl = encodeURI(url);
      const response = await fetch(encodedUrl);
      const data = await response.json();

      setResults(data.entries);
    } catch (error) {
      console.error(error);
    }
  }
  return [results, getResults];
}
