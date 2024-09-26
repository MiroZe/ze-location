import { Route, Routes } from "react-router-dom";
import './App.css'
import Header from './components/Header/Header';
import TruckArea from './components/Truck/TruckArea';
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login/Login";
import Test from "./components/Test/Test";

function App() {


  return (
    <>
    
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<TruckArea/>}/>
      <Route path="/auth/login" element={<Login/>}/>
      <Route path="/about" element={<Test/>}/>
     </Routes>
     
     
    </>
  )
}

export default App
