import Carousel from "./Carousel";

function SecondaryCard({ forecastCondition }) {
    return (
        <>
            <section id="weather-seven-days">
                <div className="container-card">
                    <h2>Meteo 7 Giorni</h2>
                    {/* <div className="flex">
                        {forecastCondition.map((day) => (
                            <div className="card">
                                <div>
                                    <img src={day.day.condition.icon} alt={day.day.condition.text} />
                                </div>
                                <div>
                                    <h4>{day.day.avgtemp_c}°</h4>
                                    <p>{day.day.condition.text}</p>
                                    <span>{day.date}</span>
                                </div>
                            </div>
                        ))}
                    </div> */}
                </div>
                <Carousel forecastCondition={forecastCondition}/>
            </section>
        </>
    )
}

export default SecondaryCard;