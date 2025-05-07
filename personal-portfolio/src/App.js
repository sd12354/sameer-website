import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Loader from './components/Loader';
import './App.css';
import Home from './pages/Home';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;


