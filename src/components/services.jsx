export const Services = (props) => {
  const handleIconClick = (service) => {
    if (service.link?.url) {
      window.open(service.link.url, '_blank');
    }
  };

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Home Services</h2>
          <p>Making our home yours</p>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem'}}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`}>
                  <div className="service-item">
                    <i 
                      className={d.icon} 
                      onClick={() => handleIconClick(d)}
                      style={d.link ? {cursor: 'pointer'} : {}}
                    ></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

