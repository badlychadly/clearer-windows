// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import BackgroundImage from './images/backgroundImage.jpg';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services'
import GetAQuote from './pages/GetAQuote';
import ContactUs from './pages/ContactUs'
import Navbar from './components/Navbar'





const App = () => {
  return (
    <Router>
      <div>
        {/* <BackgroundImage/> */}
        <Navbar/>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/get-a-quote" element={<GetAQuote/>} />
          <Route path="/contact-us" element={<ContactUs/>} />



        </Routes>
        
      </div>
    </Router>
  )
}



export default App;
