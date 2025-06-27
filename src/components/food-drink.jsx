import React from 'react';

export const FoodDrink = () => {
  const restaurants = [
    {
      name: "Pecan Lodge",
      type: "BBQ",
      description: "Award-winning barbecue in Deep Ellum",
      address: "2702 Main St, Dallas, TX",
      image: "img/restaurants/pecan-lodge.jpg",
      bgColor: "#8B4513"
    },
    {
      name: "Knife",
      type: "Steakhouse", 
      description: "Upscale dining by John Tesar",
      address: "5300 E Mockingbird Ln, Dallas, TX",
      image: "img/restaurants/knife.jpg",
      bgColor: "#2F4F4F"
    },
    {
      name: "Heimat Bar + Kitchen",
      type: "German",
      description: "Modern German cuisine in Bishop Arts",
      address: "312 W 7th St, Dallas, TX",
      image: "img/restaurants/heimat.jpg",
      bgColor: "#B8860B"
    },
    {
      name: "Meridian",
      type: "Mediterranean",
      description: "Turkish-Mediterranean flavors in Preston Center",
      address: "4152 Cole Ave, Dallas, TX",
      image: "img/restaurants/meridian.jpg",
      bgColor: "#4682B4"
    }
  ];

  return (
    <div id="food-drink" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Food & Drink in Dallas</h2>
          <p>My favorite spots for great food and drinks around the city</p>
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
                <span className="restaurant-type">{restaurant.type}</span>
                <p>{restaurant.description}</p>
                <small>{restaurant.address}</small>
              </div>
            </div>
          ))}
        </div>
        <div className="row" style={{marginTop: '40px'}}>
          <div className="col-md-12">
            <a href="/" className="btn btn-custom">Back to Home</a>
          </div>
        </div>
      </div>
    </div>
  );
};