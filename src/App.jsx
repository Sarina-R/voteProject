import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./Body/Cards";

export const Context = React.createContext();

const url = "data.json";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  const contextValue = { data };

  return (
    <>
      <Header />
      <Context.Provider value={contextValue}>
        {error ? (
          <div>{error.message}</div>
        ) : data.length > 0 ? (
          <div className="body">
            <Cards />
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </Context.Provider>
      <Footer />
    </>
  );
}

export default App;
