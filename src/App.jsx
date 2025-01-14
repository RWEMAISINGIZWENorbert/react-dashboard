import { useState } from "react"
import Header from "./components/Header/Header"
import SideBar from "./components/SideBar/SideBar";
import Main from "./ui/Main";
import Content from "./ui/Content";
import Profile from "./components/Profile/Profile";
import Stats from "./components/Stats/Stats";
import Team from "./components/Team/Team";
import Event from "./components/Event/Event";

function App() {
   const [darkMode, setDarkMode] = useState(false);
   const [isSideBarOpen, setIsSideBarOpen] = useState(true);

   const toggleDarkMode = () => {
      setDarkMode(!darkMode);
   }
   
   const toggleSideBar = () => {
      setIsSideBarOpen(side => !side);
   }

  return (
     <div className={darkMode ? 'dark': ''}>
        <Header darkMode={darkMode} 
                     toggleDarkMode = {toggleDarkMode} 
                     toggleSideBar = {toggleSideBar}/>
        <SideBar isSideBarOpen = {isSideBarOpen} />
        
   <Main>
      <Content>
         <Stats darkMode = {darkMode} />
         <div className="flex flex-col gap-3 lg:flex-row">
             <Team />
             <Event />
         </div>
      </Content>
      <Profile />
   </Main>
     </div>
  )
}

export default App
