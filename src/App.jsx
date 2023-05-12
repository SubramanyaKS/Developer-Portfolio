import './App.css';
import About from './components/About/About';
import Education from './components/Education/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
  //   
  <>
  <NavigationBar/>
  <Header/>
  <About/>
  <Education/>
  <Footer/>
  </>
  )
}

export default App
