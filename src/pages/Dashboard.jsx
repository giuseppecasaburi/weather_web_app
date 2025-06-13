import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Loader from "../components/Loader";

const apiUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_WEATHER;

function Dashboard() {

    const [forecastCondition, setForecastCondition] = useState({});
    const [location, setLocation] = useState({});

    const [load, setLoad] = useState(true);

    const lodiObj = {
        "q": "45.3097228,9.503716",
        "days": "7",
        "lang": "it",
        "custom_id": "Lodi"
    }

    const getWeather = useCallback(async (params) => {
        try {
            const resp = await axios.get(`${apiUrl}/forecast.json`, {
                params: {
                    key: apiKey,
                    q: params.q,
                    days: params.days,
                    lang: params.lang
                }
            })
            setLocation(resp.data.location);
            setForecastCondition(resp.data.forecast.forecastday);
        } catch (error) {
            console.error("Errore Server")
        } finally {
            setLoad(false)
        }
    })

    useEffect(() => {
        getWeather(lodiObj);
    }, [])

    useEffect(() => {
        console.log(location, forecastCondition[0]);
    }, [location, forecastCondition])

    return (
        <>
            <main>
                <div className="container">
                    {load ? (
                        <Loader />
                    ) : (
                        <div className="container-card">
                            <h2>Weather</h2>
                            <div className="card">
                                <div className="top">
                                    <div className="img">
                                    <img src={forecastCondition[0].day.condition.icon} alt={forecastCondition[0].day.condition.text} />
                                    </div>
                                    <div className="content">
                                        <h4>{forecastCondition[0].day.avgtemp_c}</h4>
                                        <p>{forecastCondition[0].day.condition.text}</p>
                                        <span>Today - {forecastCondition[0].date}</span>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <p>{forecastCondition[0].day.avgvis_km}</p>
                                    <p>{forecastCondition[0].day.daily_chance_of_rain}</p>
                                    <p>{forecastCondition[0].day.avghumidity}</p>
                                    <p>{forecastCondition[0].astro.sunrise}</p>
                                    <p>{forecastCondition[0].astro.sunset}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}

export default Dashboard;