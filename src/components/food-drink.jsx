import restaurantsByType from '../data/restaurants.json';

export const FoodDrink = () => {

  return (
    <div id="food-drink" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Food & Drink in Dallas</h2>
          <p>My favorite spots for great food and drinks around the city</p>
        </div>
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
