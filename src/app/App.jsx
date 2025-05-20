import React, { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import BusinessData from './businessData';
import BusinessList from '../components/BusinessList/BusinessList';
import SearchBar from '../components/SearchBar/SearchBar';


function App() {

  return (
    <>
      <div>
        
        <BusinessList BusinessData={BusinessData} />
      </div>
    </>
  )
}

export default App
