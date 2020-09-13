import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function App() {
  const [results, setResults] = useState([])

  useEffect(() => {
    axios.get('http://hn.algolia.com/api/v1/search?query=reacthooks')
      .then(response => {
        setResults(response.data.hits)
      })
  }, [])

  return (
    <React.Fragment>
      <ul>
        {results.map(result => (
          <li key={result.objectID}>
            <a href={result.url} alt={result.title}>{result.title}</a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}
