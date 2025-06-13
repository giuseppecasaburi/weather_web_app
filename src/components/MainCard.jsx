import Carousel from "./Carousel";

function MainCard({ location, forecastCondition }) {
    return (
        <>
            <section id="weather-today">
                <div className="container-card">
                    <h2>Meteo - {location.name} (MI)</h2>
                    <Carousel forecastCondition={forecastCondition}/>
                    {/* <div className="mc-card">
                        <div className="top">
                            <div className="img">
                                <img src={forecastCondition[0].day.condition.icon} alt={forecastCondition[0].day.condition.text} />
                            </div>
                            <div className="content">
                                <h4>{forecastCondition[0].day.avgtemp_c}°</h4>
                                <p>{forecastCondition[0].day.condition.text}</p>
                                <span>Oggi<span id="date"> - {forecastCondition[0].date}</span></span>
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
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default MainCard;