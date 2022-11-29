import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import SideBar from './components/Sidebar/index';
import sidebar_menu from './constants/sidebar-menu';
import Home from "./pages/home/Home";
import './App.css';
import AddArtist from "./components/AddArtist";
import DashboardHeader from "./components/DashboardHeader";
import EditArtist from "./components/EditArtist";
import Login from "./pages/login/Login";
import Dashboard from "./pages/home/Dasbord";

function App() {
  const navigate = useNavigate();
  const goTo = () => {
    // 👇️ navigate to /
    navigate('/add');
  };

  // const token = localStorage.getItem('accessToken');

  // if(!token) {
  //   return <Login />
  // }
  return (
    <div className="dashboard-container">
      <DashboardHeader
                btnText="Créer une fiche artiste" 
                onClick={goTo}/>
       <SideBar menu={sidebar_menu} />
       <div className='dashboard-body'>
          <Routes>
            <Route path="/"  element={<Dashboard/>}>
            </Route>
              <Route path="/add" element={<AddArtist/>}>
            </Route>
            <Route path="/edit" element={<EditArtist/>}></Route>
          </Routes>
       </div>
    </div>

    //  <Routes>
    //   <Route path="/login" element={<Login/>}/>
    //   <Route path="/home" element={<Dashboard/>}  />
    // </Routes>
    //  <div className='dashboard-container'>
      // <DashboardHeader
      //           btnText="Créer une fiche artiste" 
      //           onClick={goTo}/>
      //  <SideBar menu={sidebar_menu} />
    //      <div className='dashboard-body'>
    //          <Routes>
    //              <Route path="/" element={<Dashboard/>}  />
    //              <Route path="/login" element={<Login/>}/>
    //              <Route exact path="/add" element={<AddArtist/>} />
    //              <Route exact path="/edit" element={<EditArtist/>} />
    //              <Route exact path="/profile" element={<div></div>} />
    //          </Routes>
    //      </div>
    //  </div>
  );
}

export default App;
