import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutAthor from './components/AboutAthor';
import Books from './Books';
import Articles from './components/Articles';
import BIYCommunity from './components/BiyCommunity';
import Speaking from './components/Speaking';
import ScrollToTop from './ScrollToTop'
import Consulting from './components/Consult';
import Article1 from './components/Articles/Article1';
import Article2 from './components/Articles/Article2';
import Article3 from './components/Articles/Article3';
import Article4 from './components/Articles/Article4';
import Article5 from './components/Articles/Article5';
import Article6 from './components/Articles/Article6';
import Article7 from './components/Articles/Article7';
import Article8 from './components/Articles/Article8';
import Article9 from './components/Articles/Article9';
import Article10 from './components/Articles/Article10';
import Article11 from './components/Articles/Article11';
import Article12 from './components/Articles/Article12';
import Article13 from './components/Articles/Article13';
import Article14 from './components/Articles/Article14';
import Article15 from './components/Articles/Article15';
import Article16 from './components/Articles/Article16';
import Article17 from './components/Articles/Article17';
import Article18 from './components/Articles/Article18';
import Article19 from './components/Articles/Article19';
import Article20 from './components/Articles/Article20';
import BookHere from './components/BookHere';
import UseScrollOnTop from './UseScrollOnTop';

export default function App() {  // Renamed from Homepage to App
  return (
    <Router>
      <UseScrollOnTop/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/books" element={<Books />} />
        <Route path="/author" element={<AboutAthor />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/Journey-Something-to-Nothing" element={<Article1 />} />
        <Route path="/Spirituality-Made-Simple" element={<Article2 />} />
        <Route path="/Your-Superpower" element={<Article3 />} />
        <Route path="/Value-of-Perspective" element={<Article4 />} />
        <Route path="/Skills-you-must-have" element={<Article5 />} />
        <Route path="/Separating-Myth-from-Reality" element={<Article6 />} />
        <Route path="/Adult-or-Adulterated?" element={<Article7 />} />
        <Route path="/What’s-your-story?" element={<Article8 />} />
        <Route path="/Where-do-you-stand?" element={<Article9 />} />
        <Route path="/7-Laws-Public-Speaking" element={<Article10 />} />
        <Route path="/The-20’s-Experiment" element={<Article11 />} />
        <Route path="/6PM-to-6AM-Test" element={<Article12 />} />
        <Route path="/Breathe-your-Thoughts" element={<Article13 />} />
        <Route path="/Five-minute-Mission-Statement" element={<Article14 />} />
        <Route path="/Goal-Setting" element={<Article15 />} />
        <Route path="/Ignoring-Soft-Skills" element={<Article16 />} />
        <Route path="/The-other-eight-hours" element={<Article17 />} />
        <Route path="/Art-of-Creating-Opportunities" element={<Article18 />} />
        <Route path="/Breaking-the-jinx" element={<Article19 />} />
        <Route path="/Why-can-Image-Consultants" element={<Article20 />} />
        
        
        <Route path="/community" element={<BIYCommunity />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/book-here" element={<BookHere />} />
        <Route path="/consult" element={<Consulting />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
