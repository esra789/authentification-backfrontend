import {Routes,Route} from "react-router-dom" 
import './App.css';
import SignUp from './Component/Register';
import SignInSide from "./Component/Login";
import ResponsiveAppBar from "./Component/Navbar";
import Profile from "./Component/Profile";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
     <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/login" element={<SignInSide/>}/>
      <Route path="/Profile" element={<Profile/>}/>
     </Routes>
    </div>
  );
}

export default App;
