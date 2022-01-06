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
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LoginPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path="password" element={<LoginPassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="create-password" element={<CreatePassword />} />
            <Route path="home" element={<FantasyHome />} />
            <Route path="mygames" element={<MyGames />} />
            <Route path="livegame-1" element={<LiveGame1 />} />
            <Route path="livegame-2" element={<LiveGame2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
