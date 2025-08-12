import Header from "./components/header/header";
import "./App.css";
import "./styles/mobile-fixes.css";
import FlexRow from "./components/shared/flexrow";
import MoreAboutMe from "./components/moreAboutMe/moreAboutMe";
import Glimpse from "./components/glimpse/glimpse";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MoreAboutMe />
      <Glimpse />
      <Footer />
    </div>
  );
}

export default App;
