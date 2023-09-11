import About from "./About";
import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";

export default function App(){
  return(
    <div className="wrapper">
    <Header />
    <About />
    <Cards />
    <Footer/>
    </div>
  )
}