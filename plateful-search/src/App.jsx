import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/PlatefulSearch">

      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/details/:idMeal" element={< Details />} /> 
          <Route path="/about" element={< About />} />
        </Routes>
      </div>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
