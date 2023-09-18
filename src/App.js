import { useState } from 'react';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import HomeComponent from './Components/HomeComponent';
import SidebarComponent from './Components/SidebarComponent';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar =()=>{
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className="grid-container">
        <HeaderComponent OpenSidebar={OpenSidebar}/>
        <SidebarComponent openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <HomeComponent/>

    </div>
  );
}

export default App;
