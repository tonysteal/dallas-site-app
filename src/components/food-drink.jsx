import React, { useState, useEffect } from 'react';
import restaurantsByType from '../data/restaurants.json';
import data from '../data/data.json';

export const FoodDrink = () => {
  const [distances, setDistances] = useState({});
  
  const calculateDistance = async (origin, destination) => {
    try {
      const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${process.env.REACT_APP_MAPS_API_KEY}&mode=driving`;
      console.log('API URL:', url);
      
      const response = await fetch(url);
      const result = await response.json();
      
      console.log('API Response:', result);
      
      const element = result.rows[0]?.elements[0];
      
      if (element?.distance && element?.duration) {
        return `${element.distance.text} • ${element.duration.text}`;
      }
      
      // Log the issue
      console.log('No distance/duration found:', element);
      
    } catch (error) {
      console.error('Distance calculation error:', error);
    }
    
    // Temporary fallback for testing
    return `~${(2 + Math.random() * 3).toFixed(1)} mi • ${Math.ceil(8 + Math.random() * 10)} min`;
  };
  

  
  useEffect(() => {
    const loadDistances = async () => {
      const newDistances = {};
      
      for (const [type, restaurants] of Object.entries(restaurantsByType)) {
        for (const restaurant of restaurants) {
          console.log(`Calculating distance from ${data.Contact.address} to ${restaurant.address}`);
          const distance = await calculateDistance(data.Contact.address, restaurant.address);
          newDistances[restaurant.name] = distance;
        }
      }
      
      setDistances(newDistances);
    };
    
    loadDistances();
  }, []);

  return (
    <div id="food-drink" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Food & Drink in Dallas</h2>
          <p>My favorite spots for great food and drinks around the city</p>
        </div>
        <div className="section-separator"></div>
        <nav className="cuisine-navigation" style={{position: 'sticky', top: '80px', zIndex: 1000, backgroundColor: '#f6f6f6', paddingTop: '20px', paddingBottom: '20px'}}>
          <ul className="nav nav-pills nav-justified">
            {Object.keys(restaurantsByType).map((type) => (
              <li key={type}>
                <a href={`#${type.toLowerCase()}`}>{type}</a>
              </li>
            ))}
          </ul>
        </nav>
        {Object.entries(restaurantsByType).map(([type, restaurants]) => (
          <div key={type} className="cuisine-section" id={type.toLowerCase()}>
            <div className="cuisine-banner">
              <h3>{type}</h3>
            </div>
            <div className="row">
              {restaurants.map((restaurant, i) => (
                <div key={i} className="col-md-6 col-lg-3">
                  <div className="restaurant-item">
                    <div
                      className="restaurant-image"
                      style={{
                        backgroundColor: restaurant.bgColor,
                        height: '200px',
                        borderRadius: '8px',
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '18px',
                        fontWeight: 'bold'
                      }}
                    >
                      {restaurant.name}
                    </div>
                    <h4>{restaurant.name}</h4>
                    <p>{restaurant.description}</p>
                    <small>{restaurant.address}</small>
                    <div className="distance-badge">{distances[restaurant.name] || 'Calculating...'}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="row" style={{marginTop: '40px'}}>
          <div className="col-md-12">
            <a href="/" className="btn btn-custom">Back to Home</a>
          </div>
        </div>
      </div>
    </div>
  );
};
