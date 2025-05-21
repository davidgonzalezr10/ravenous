import React, { useState } from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
  };
  
const SearchBar = ({ searchYelp }) => {
    /*
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
    };
    */

    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {
                        Object.keys(sortByOptions).map((option) => (
                            <li
                              key={sortByOptions[option]}
                              /*
                              className={getSortByClass(sortByOptions[option])}
                              onClick={() => handleSortByChange(sortByOptions[option])}
                            */
                            >
                              {option}
                            </li>
                        ))}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a>Let's Go</a>
            </div>
        </div> 
    )
}

export default SearchBar;