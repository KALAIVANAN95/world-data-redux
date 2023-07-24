import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountryData from "./Pages/CountryData/CountryData";
import Home from "./Pages/Home/Home";


function App() {
  return (
   <div className="parent__div">
    <h1>World Data</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country-data" element={<CountryData />} />
      </Routes>
    
    </div>
  );
}

export default App;
