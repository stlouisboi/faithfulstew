import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ShareWidget from './components/ShareWidget'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Book from './pages/Book'
import DecisionTest from './pages/DecisionTest'
import Workbook from './pages/Workbook'
import About from './pages/About'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Disclaimer from './pages/Disclaimer'
import PaymentSuccess from './pages/PaymentSuccess'
import PaymentCancel from './pages/PaymentCancel'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <ScrollToTop />
      <Navbar />
      <ShareWidget />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/decision-test" element={<DecisionTest />} />
          <Route path="/workbook" element={<Workbook />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/cancel" element={<PaymentCancel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
