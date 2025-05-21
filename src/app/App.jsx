import React, { useState } from 'react'
import './App.css'
import BusinessData from './businessData';
import BusinessList from '../components/BusinessList/BusinessList';
import SearchBar from '../components/SearchBar/SearchBar';

function searchYelp(term, location, sortBy) {
  // For now, just log the values to verify it's working
  console.log('Searching Yelp with:', term, location, sortBy);
  // Here you would add your API call or business logic
}

function App() {

  return (
    <>
      <div>
        <h1>ravenous</h1>
        <SearchBar searchYelp={searchYelp} />
        <BusinessList BusinessData={BusinessData} />
      </div>
    </>
  )
}

export default App


