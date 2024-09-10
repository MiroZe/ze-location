import { Route, Routes } from "react-router-dom";
import './App.css'
import Header from './components/Header/Header';
import TruckArea from './components/Truck/TruckArea';
import Home from "./components/Home/Home";

function App() {


  return (
    <>
    
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<TruckArea/>}/>
     </Routes>
     
     
    </>
  )
}

export default App
