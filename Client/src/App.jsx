import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Movies from "./pages/Movies/Movies";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import MovieDetailsLoader from "./containers/MovieDetailsLoader/MovieDetailsLoader";
import MyMoviesCollection from "./pages/MyMoviesCollection/MyMoviesCollection";
import Footer from "./components/Footer/Footer";
import SearchQueryContextProvider from "./context/SearchQueryContextProvider";
import FavoriteMovieContextProvider from "./context/FavoriteMovieContextProvider";

function App() {
  return (
    <BrowserRouter>
      <SearchQueryContextProvider>
        <FavoriteMovieContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/movies-search" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieDetailsLoader />} />
            <Route path="/my-movies" element={<MyMoviesCollection />} />
          </Routes>
          {/* <Footer /> */}
        </FavoriteMovieContextProvider>
      </SearchQueryContextProvider>
    </BrowserRouter>
  );
}

export default App;
