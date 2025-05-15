import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/item/:id" element={< Details />} /> 
        <Route path="/about" element={< About />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
