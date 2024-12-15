import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
let isFetched = false;
const App = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartIDs, setCartIDs] = useState([]);

  function handleAddToCart (event, productID) {
    event.preventDefault();
    const array = cartIDs.slice();
    const product = array.findIndex((element) => element.id === productID);
    if (product > -1) {
      array[product] = {id: productID, quantity: array[product].quantity + 1 };
      setCartIDs(() => array);
    } else {
      setCartIDs((prev) => [...prev, {id: productID, quantity: 1}])
    }
    console.log(cartIDs);
  }

  useEffect(() => {
    if(!isFetched) {
      isFetched = true;
      fetch('https://fakestoreapi.com/products', { mode: "cors" })
      .then(response => {
        if (!response.ok) {
          throw new Error("server error");
        }
        return response.json()})
      .then(data => {
        console.log(data);
        setProducts(data)
        setLoading(false);
      })
      .catch(error => setError(error))
    }
  }, [])

  return (
    <>
        <Navbar count={cartIDs.length}/>
        <Outlet context={{products, error, loading, cartIDs, handleAddToCart}}/>
    </>
  );
};

export default App;

