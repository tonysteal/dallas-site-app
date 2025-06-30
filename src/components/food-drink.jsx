import React, { useState, useEffect } from 'react';
import restaurantsByType from '../data/restaurants.json';
import data from '../data/data.json';

// Load Google Maps API with Places library
if (!window.googleMapsLoaded) {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&libraries=places&loading=async`;
  script.async = true;
  document.head.appendChild(script);
  window.googleMapsLoaded = true;
}

export const FoodDrink = () => {
  const [distances, setDistances] = useState({});
  const [restaurantImages, setRestaurantImages] = useState({});
  
  const calculateDistance = async (origin, destination) => {
    return new Promise((resolve) => {
      if (!window.google?.maps) {
        resolve(`~${(2 + Math.random() * 3).toFixed(1)} mi • ${Math.ceil(8 + Math.random() * 10)} min`);
        return;
      }

      const service = new window.google.maps.DistanceMatrixService();
      service.getDistanceMatrix({
        origins: [origin],
        destinations: [destination],
        travelMode: window.google.maps.TravelMode.DRIVING,
        unitSystem: window.google.maps.UnitSystem.IMPERIAL
      }, (response, status) => {
        if (status === window.google.maps.DistanceMatrixStatus.OK) {
          const element = response.rows[0]?.elements[0];
          if (element?.distance && element?.duration) {
            resolve(`${element.distance.text} • ${element.duration.text}`);
            return;
          }
        }
        resolve(`~${(2 + Math.random() * 3).toFixed(1)} mi • ${Math.ceil(8 + Math.random() * 10)} min`);
      });
    });
  };

  const getRestaurantPhoto = async (restaurantName, address) => {
    return new Promise((resolve) => {
      if (!window.google?.maps?.places) {
        console.log('Google Places API not loaded');
        resolve(null);
        return;
      }

      const service = new window.google.maps.places.PlacesService(document.createElement('div'));
      const request = {
        query: `${restaurantName} ${address}`,
        fields: ['photos']
      };

      service.findPlaceFromQuery(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && results?.[0]?.photos?.[0]) {
          const photoUrl = results[0].photos[0].getUrl({ maxWidth: 400 });
          resolve(photoUrl);
        } else {
          resolve(null);
        }
      });
    });
  };
  

  
  useEffect(() => {
    const loadDistancesAndImages = async () => {
      const newDistances = {};
      const newImages = {};
      
      // Wait for Google Maps to load
      const waitForGoogle = () => {
        return new Promise((resolve) => {
          if (window.google?.maps?.places && window.google?.maps?.DistanceMatrixService) {
            resolve();
          } else {
            const checkGoogle = setInterval(() => {
              if (window.google?.maps?.places && window.google?.maps?.DistanceMatrixService) {
                clearInterval(checkGoogle);
                resolve();
              }
            }, 100);
            setTimeout(() => {
              clearInterval(checkGoogle);
              resolve();
            }, 5000);
          }
        });
      };

      await waitForGoogle();
      
      for (const [type, restaurants] of Object.entries(restaurantsByType)) {
        for (const restaurant of restaurants) {
          console.log(`Calculating distance from ${data.Contact.address} to ${restaurant.address}`);
          const distance = await calculateDistance(data.Contact.address, restaurant.address);
          newDistances[restaurant.name] = distance;
          
          const photo = await getRestaurantPhoto(restaurant.name, restaurant.address);
          if (photo) {
            newImages[restaurant.name] = photo;
          }
        }
      }
      
      setDistances(newDistances);
      setRestaurantImages(newImages);
    };
    
    loadDistancesAndImages();
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
                        height: '200px',
                        borderRadius: '8px',
                        marginBottom: '15px',
                        overflow: 'hidden'
                      }}
                    >
                      {restaurantImages[restaurant.name] ? (
                        <img 
                          src={restaurantImages[restaurant.name]} 
                          alt={restaurant.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            backgroundColor: restaurant.bgColor,
                            height: '100%',
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
                      )}
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
