import "./App.css";

import navList from "./components/NavigationList";
import Header from "./components/Header";

import Logo from "./components/Logo";
import MainWrap from "./components/MainWrap";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation src={navList} />
      </Header>

      <MainWrap />

      <Footer>
        <small>copyright 202510</small>
      </Footer>
    </>
  );
}

export default App;
