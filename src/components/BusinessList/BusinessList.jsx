import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {
                   this.props.BusinessData ? this.props.BusinessData.map((business) => {
                   return <Business business={business} key={business.id} />
                } 
               ) : null
            }
            </div>
        );
    }
}

export default BusinessList;