import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
        <Navbar/>
        <Outlet />
    </>
  );
};

export default App;

