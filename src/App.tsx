import Form from "./components/Form"
import Footer from "./layouts/Footer"
import NavBar from "./layouts/NavBar"
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import SignIn from "./pages/SignIn"


function App() {


  return (
    <div >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/singin" element={<SignIn />}></Route>
        </Routes>
        <Footer />
      </Router>

    </div>
  )
}

export default App
