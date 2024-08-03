import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  return (
      <>
        <Routes>
          <Route path={'/'} element={<Login/>} />
          <Route path={'/register'} element={<Register/>} />
          <Route path={'/home'} element={<Home/>} />
        </Routes>
      </>
  );
}

export default App;