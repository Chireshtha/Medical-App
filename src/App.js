import { createContext, useState } from 'react';
import './App.css';
import { Outlet, ScrollRestoration, useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
// import Navigationbar from './components/layout/Navigationbar';
// import Footer from './components/layout/Footer';



export const dashboardContext = createContext();
function App() {
  const [medicare, setMedicare] = useState('/patient')
  const [markedDate, setMarkedDate] = useState([])
  const [activeTab, setActiveTab] = useState('overview');
  const [date, setDate] = useState(new Date())
  const navigate = useNavigate();
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/')
  }



  const isSameDay = (d1, d2) =>
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getYear() === d2.getYear();


  return (
    <dashboardContext.Provider value={{ medicare, setMedicare, markedDate, setMarkedDate, isSameDay, activeTab, setActiveTab, date, setDate, handleLogout }}>
      <Outlet />
      <ScrollRestoration />
    </dashboardContext.Provider>
  );
}

export default App;
