import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
  };
  
const SearchBar = () => {
    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {
                        Object.keys(sortByOptions).map((option) => (
                            <li key={sortByOptions[option]}>
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
                <button>Let's Go</button>
            </div>
        </div> 
    )
}

export default SearchBar;