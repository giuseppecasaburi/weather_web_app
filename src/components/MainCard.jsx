import Carousel from "./Carousel";

function MainCard({ location, forecastCondition }) {
    return (
        <>
            <section id="weather-today">
                <div className="container-card">
                    <h2>Meteo - {location.name}</h2>
                    <Carousel forecastCondition={forecastCondition}/>
                </div>
            </section>
        </>
    )
}

export default MainCard;