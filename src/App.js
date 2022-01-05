import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
// Pages
import LoginPage from './Pages/Login/Login/LoginPage';
import LoginPassword from './Pages/Login/Login/LoginPassword';
import Signup from './Pages/Login/Register/Signup'
import CreatePassword from './Pages/Login/Register/CreatePassword'
import FantasyHome from './Pages/MainScreens/FantasyHome/FantasyHome'
import LiveGame1 from './Pages/MainScreens/MyGames/LiveGames/Screen1/LiveGame1'
import LiveGame2 from './Pages/MainScreens/MyGames/LiveGames/Screen2/LiveGame2'
import MyGames from './Pages/MainScreens/MyGames/MyGames';



function App() {
  return (
    <>
      <MyGames></MyGames>
    </>
  );
}

export default App;
