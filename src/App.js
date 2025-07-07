import { createContext, useState } from 'react';
import './App.css';
import { Outlet, ScrollRestoration } from 'react-router-dom';
// import Navigationbar from './components/layout/Navigationbar';
// import Footer from './components/layout/Footer';



export const dashboardContext = createContext();
function App() {
  const[medicare, setMedicare] = useState('/patient')
  

  return (
    <dashboardContext.Provider value={{medicare, setMedicare}}>
      <Outlet />
      <ScrollRestoration />
    </dashboardContext.Provider>
  );
}

export default App;
