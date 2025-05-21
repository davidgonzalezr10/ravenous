import React, { useState } from 'react'
import './App.css'
import BusinessData from './businessData';
import BusinessList from '../components/BusinessList/BusinessList';
import SearchBar from '../components/SearchBar/SearchBar';
import searchYelp from '../utilities/yelp';


function App() {

  const [businesses, setBusinesses] = useState([]); 

  const handleSearch = async (term, location, sortBy) => {
    console.log("handleSearch called with:", term, location, sortBy);
    const results = await searchYelp(term, location, sortBy);
    console.log('API results:', results);
    setBusinesses(results);
  };

  return (
    <>
      <div>
        <h1>ravenous</h1>
        <SearchBar handleSearch={handleSearch} />
        <BusinessList BusinessData={businesses} />
      </div>
    </>
  )
}

export default App


