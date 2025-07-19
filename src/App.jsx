import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import MicroTrack from './components/MicroTrack';
import FeatureCards from './components/FeatureCards';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TermsAndCondition from './pages/TermsAndCondition';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Home/Landing Page */}
        <Route
          path="/"
          element={
            <div className="App">
              <Hero />
              <Welcome />
              <MicroTrack />
              <FeatureCards />
              <Services />
              <FAQ />
              <Testimonials />
              <Contact />
              <Footer />
            </div>
          }
        />
        
        {/* Terms and Conditions Page */}
        <Route
          path="/terms"
          element={
            <>
              <TermsAndCondition />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
