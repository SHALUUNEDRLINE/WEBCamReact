import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserCapture from './components/UserCapture';
import AdminDisplay from './components/AdminDisplay';

function App() {
  return (
 
      <div>
        
         <UserCapture />
          <AdminDisplay />
      
      </div>
   
  );
}

export default App;

