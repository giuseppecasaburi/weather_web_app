import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
// // import { ChevronLeft, ChevronRight } from 'lucide-react';

function Carousel({ forecastCondition }) {
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
                                <div className="mc-card h">
                                    <div className="top">
                                        <div className="img">
                                            <img
                                                src={day.day.condition.icon}
                                                alt={day.day.condition.text}
                                            />
                                        </div>
                                        <div className="content">
                                            <h4>{day.day.avgtemp_c}°</h4>
                                            <p>{day.day.condition.text}</p>
                                            <span id="date">{day.date.split('-').reverse().join('-')}</span>
                                        </div>
                                    </div>

                                    <div className="bottom flex">
                                        <div>
                                            <span>Vento</span>
                                            <p>{forecastCondition[0].day.avgvis_km}km/h</p>
                                        </div>
                                        <div>
                                            <span>Pioggia</span>
                                            <p>{forecastCondition[0].day.daily_chance_of_rain}%</p>
                                        </div>
                                        <div>
                                            <span>Umidità</span>
                                            <p>{forecastCondition[0].day.avghumidity}%</p>
                                        </div>
                                        <div>
                                            <span>Alba</span>
                                            <p>{forecastCondition[0].astro.sunrise}</p>
                                        </div>
                                        <div>
                                            <span>Tramonto</span>
                                            <p>{forecastCondition[0].astro.sunset}</p>
                                        </div>
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
                    <MdKeyboardArrowLeft />
                </button>

                <button
                    onClick={nextSlide}
                    className="nav-button next-button"
                    aria-label="Slide successivo"
                >
                    <MdKeyboardArrowRight />
                </button>
            </div>
            
            <div className="flex indicatori">
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