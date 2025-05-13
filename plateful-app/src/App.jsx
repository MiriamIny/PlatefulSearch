import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from '/SearchPage';
import DetailsPage from '/DetailsPage';
import AboutPage from '/AboutPage';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/item/:id" element={<DetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

