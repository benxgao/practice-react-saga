import React, { useEffect } from 'react';

// TODO: Add types
// TODO: Extract CRUD methods
export default async function useFetchEffect(url, options) {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        // TODO: Add options of Axois alternation
        const res = await fetch(url, options);
        const json = await res.json();

        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []); // TODO: Only re-run the effect if reso changes

  return  { response, error, isLoading };
}
