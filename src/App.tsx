import "./App.css";
import { Footer } from "./lauout/footer/Footer";
import { Header } from "./lauout/header/Header";
import { Contact } from "./lauout/sections/contact/Contact";
import { Main } from "./lauout/sections/main/Main";
import { Skills } from "./lauout/sections/skills/Skills";
import { Slogan } from "./lauout/sections/slogan/Slogan";
import { Testimony } from "./lauout/sections/testimony/Testimony";
import { Works } from "./lauout/sections/works/Works";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Works />
      <Testimony />
      <Contact />
      <Slogan />
      <Footer />
    </div>
  );
}

export default App;
