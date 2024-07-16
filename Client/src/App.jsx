import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Movies from "./pages/Movies/Movies";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import MyMoviesCollection from "./pages/MyMoviesCollection/MyMoviesCollection";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/my-movies" element={<MyMoviesCollection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
