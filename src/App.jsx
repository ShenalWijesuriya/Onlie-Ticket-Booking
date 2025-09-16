import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import HomePage from './Pages/HomePage.jsx';
import Movies from './Pages/Movies.jsx'; // Import Movies page
import SignUp from './Pages/SignUp.jsx';  // SignUp page
import LoginPage from './Pages/LoginPage.jsx'; // Login page
import TimeTable from './Pages/TimeTable.jsx';
import Contact from './Pages/Contact.jsx';
import ShowTimeSelect from './Pages/ShowTimeSelect.jsx'; // ✅ NEW
import Section from './Pages/Section.jsx';
import Payment from './Pages/Payment.jsx'; 
import ETicket from './Pages/ETicket.jsx';
import './App.css';
import BgCard from './components/BgCard.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} /> {/* Updated to Movies component */}
        <Route path="/showtimes" element={<TimeTable />} />
        <Route path="/signup" element={<SignUp />} />   {/* SignUp route */}
        <Route path="/login" element={<LoginPage />} /> {/* Login route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/showtimes/:movieId" element={<ShowTimeSelect />} />
        <Route path="/section" element={<Section />} />
         <Route path="/payment" element={<Payment />} />
          <Route path="/eticket" element={<ETicket />} />
      </Routes>
    </>
  );
}

export default App;
