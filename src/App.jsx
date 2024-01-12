import "./App.scss";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import BackgroundHome from "./components/BackgroundHome/BackgroundHome";
import Introduce from "./components/Introduce/Introduce";
import Footer from "./components/Footer/Footer";
import Category from "./pages/category/Category";
import Ticket from "./pages/ticket/Ticket";
import { useLayoutEffect } from "react";
function App() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <BrowserRouter>
      <Header />
      <BackgroundHome />
      <Introduce />
      <Category></Category>
      <Ticket></Ticket>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
