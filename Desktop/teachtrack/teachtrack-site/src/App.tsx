import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Header} from './components/header/header';
import {Home} from './components/pages/Home';
import {About} from './components/pages/AboutUs';
import {Reviews} from './components/pages/Reviews';
import {Profile} from './components/pages/Profile';

function App() {
  return (
    <>
      <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
    </>
  )
}

export default App
