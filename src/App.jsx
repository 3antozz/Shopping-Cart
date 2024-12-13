import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
let isFetched = false;
const App = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(!isFetched) {
      fetch('https://fakestoreapi.com/products', { mode: "cors" })
      .then(response => {
        if (!response.ok) {
          throw new Error("server error");
        }
        return response.json()})
      .then(data => {
        isFetched = true;
        console.log(data);
        setProducts(data)})
      .catch(error => setError(error))
    }
  }, [])

  return (
    <>
        <Navbar/>
        <Outlet context={{products, error}}/>
    </>
  );
};

export default App;

