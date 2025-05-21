import React, { useState } from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
  };
  
const SearchBar = ({ searchYelp }) => {
    
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');

    const getSortByClass = (sortByOption) => {
        if (sortBy === sortByOption) {
          return "active";
        }
        return "";
      };

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);       
    };

    const handleSortByChange = (sortByOption) => {
        setSortBy(sortByOption);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        searchYelp(term, location, sortBy);
        setTerm('');
        setLocation('');
    };

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((option) => (
            <li 
                key={sortByOptions[option]}
                className={getSortByClass(sortByOptions[option])}
                onClick={() => handleSortByChange(sortByOptions[option])}
            >
                {option}
            </li>
        ));
    };

    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {renderSortByOptions()}                
                </ul>
            </div>
            <form onSubmit={handleSearch}>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={handleTermChange} value={term} />
                    <input placeholder="Where?" onChange={handleLocationChange} value={location} />
                </div>
                <div className="SearchBar-submit" >
                    <button type="submit">Let's Go</button>
                </div>
            </form>
        </div> 
    )
}

export default SearchBar;