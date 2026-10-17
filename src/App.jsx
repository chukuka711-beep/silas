import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingWasteBin from './components/FloatingWasteBin.jsx';
import ScrollMotion from './components/ScrollMotion.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Vision from './pages/Vision.jsx';
import Techverse from './pages/Techverse.jsx';
import WhySilas from './pages/WhySilas.jsx';
import Vote from './pages/Vote.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <ScrollMotion />
        <div className="vote-watermark" aria-hidden="true">
          <div className="vote-watermark-track">
            {[0, 1].map((group) => (
              <div className="vote-watermark-group" key={group}>
                <span>VOTE SILAS</span>
                <span>VOTE SILAS</span>
                <span>VOTE SILAS</span>
              </div>
            ))}
          </div>
        </div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/techverse" element={<Techverse />} />
            <Route path="/why-silas" element={<WhySilas />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWasteBin />
      </div>
    </BrowserRouter>
  );
}
