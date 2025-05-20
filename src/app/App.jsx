import React, { useState } from 'react'
import './App.css'
import BusinessData from './businessData';
import BusinessList from '../components/BusinessList/BusinessList';
import SearchBar from '../components/SearchBar/SearchBar';



function App() {

  return (
    <>
      <div>
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList BusinessData={BusinessData} />
      </div>
    </>
  )
}

export default App


