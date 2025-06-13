import React, { useState } from 'react';
// // import { ChevronLeft, ChevronRight } from 'lucide-react';

function Carousel ({forecastCondition}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === forecastCondition.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? forecastCondition.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>

      <div className="container">
        <h1 className="title">
          Slider di Card
        </h1>
        
        <div className="slider-wrapper">
          <div className="slider-container">
            <div 
              className="slider-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {forecastCondition.map((day) => (
                <div key={day.id} className="slide">
                  <div className="card">
                    <img 
                      src={day.day.condition.icon} 
                      alt={day.day.condition.text}
                      className="card-image"
                    />
                    <div className="card-content">
                      <div className="card-header">
                        <span className="tag">
                          {day.date}
                        </span>
                      </div>
                      <h3 className="card-title">
                        {day.day.condition.text}
                      </h3>
                      <p className="card-description">
                        {day.day.avgtemp_c}°
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="nav-button prev-button"
            aria-label="Slide precedente"
          >
            {/* <={24} color="#666" /> */}
          </button>

          <button
            onClick={nextSlide}
            className="nav-button next-button"
            aria-label="Slide successivo"
          >
            {/* <ChevronRight size={24} color="#666" /> */}
          </button>
        </div>

        <div className="indicators">
          {forecastCondition.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              aria-label={`Vai alla slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="counter">
          {currentIndex + 1} di {forecastCondition.length}
        </div>
      </div>
    </>
  );
};

export default Carousel;