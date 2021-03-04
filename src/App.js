import Navbar from "./components/Navbar";
import {
  ThemeProvider
} from '@material-ui/core'
import theme from './style'
import Hero from "./components/Hero";
import Section from "./components/Section";
import {exp1, exp2, freelance} from './components/Section/data'
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Activity from "./components/Activity";
import Skills from "./components/Skills";

const myTheme = theme

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <Navbar />
      <Hero />
      <Section {...exp1} mainTitle='EXPERIENCE'/>
      <Section {...exp2}/>
      <Section {...freelance} mainTitle='A PROPOS'/>
      <Activity />
      <Skills />
      <Contact />
      {/* <Footer /> */}
    </ThemeProvider >
  );
}

export default App;
