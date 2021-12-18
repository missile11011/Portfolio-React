import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GridImage from './components/GridImage';
function App() {
  return (
  <>
    <Header></Header>
    <About></About>
    <GridImage></GridImage>
    <Contact></Contact>
    <Footer></Footer>
    <script src="./assets/lib/js/bootstrap.bundle.min.js"></script>
  </>
  );
}

export default App;
