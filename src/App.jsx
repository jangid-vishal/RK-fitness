import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './Components/Loader';

// Pages
import Home from './Pages/Home';
import Dwarka from './Pages/Dwarka';
import PaschimVihar from './Pages/PaschimVihar';
import AboutUs from './Pages/About';
import Contact from './Pages/Contact';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader onFinish={() => setIsLoading(false)} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dwarka" element={<Dwarka />} />
        <Route path="/paschim-vihar" element={<PaschimVihar />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
