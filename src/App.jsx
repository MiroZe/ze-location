import { Route, Routes } from "react-router-dom";
import './App.css'
import Header from './components/Header/Header';
import TruckArea from './components/Truck/TruckArea';
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login/Login";
import Test from "./components/Test/Test";
import Logout from "./components/Auth/Logout/Logout";
import Barcodes from "./components/Barcodes/Barcodes";
import CreateGroupageDeclartion from "./components/Groupage/CreateGroupageDeclartion";

function App() {


  return (
    <>
    
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<TruckArea/>}/>
      <Route path="/barcodes" element={<Barcodes/>}/>
      <Route path="/createGroupage" element={<CreateGroupageDeclartion/>}/>
      <Route path="/auth/login" element={<Login/>}/>
      <Route path="/auth/logout" element={<Logout/>}/>
      <Route path="/about" element={<Test/>}/>
     </Routes>
     
     
    </>
  )
}

export default App
