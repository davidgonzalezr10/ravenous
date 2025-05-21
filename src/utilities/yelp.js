const yelpKey = 'OTAvKD-tEQ62tAX6R0Q0cv_4TVWKwxIoHOqj7EgbCchkW3ee7pRvhH96OOEJz2Ji0DbQZCGdeg-p7HKZpWtwfhl5a0paA-nBG_CwfnUuSyg6bbdfnLFPb1-OhAMuaHYx';
const baseUrl = 'https://api.yelp.com/v3';
//const searchButton = document.getElementById('search-button');

async function searchYelp(term, location, sortBy) {
    
    try {
        const response = await fetch(`${baseUrl}/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${yelpKey}`
            }
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            return jsonResponse.businesses.map(business => ({
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0]?.title || '',
                rating: business.rating,
                reviewCount: business.review_count
            }));
        } else {
            throw new Error('Request failed');
        }
        
    } catch (error) {
        console.error(error);
    }
}

export default searchYelp;