import './App.css';
import Education from './components/Education/Education';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
     <NavigationBar/>
     <Routes>
         <Route exact path="/" element={<Header />} />
         <Route exact path="/education" element={<Education />}/>
      </Routes>
   </Router>
  )
}

export default App
