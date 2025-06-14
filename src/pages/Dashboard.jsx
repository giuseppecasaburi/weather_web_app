import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import Loader from "../components/Loader";
import MainCard from "../components/MainCard";
import { useLocation } from "react-router-dom";

const apiUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_WEATHER;

function Dashboard() {
    const locationUrl = useLocation();

    const queryParams = useMemo(() => new URLSearchParams(locationUrl.search), [locationUrl.search]);

    const long = queryParams.get('long') || 45.3097228;
    const lat = queryParams.get('lat') || 9.503716

    const [forecastCondition, setForecastCondition] = useState({});
    const [location, setLocation] = useState({});

    const [load, setLoad] = useState(true);

    const lodiObj = {
        "q": `${long}, ${lat}`,
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
                        <>
                            <MainCard location={location} forecastCondition={forecastCondition} />
                        </>
                    )}
                </div>
            </main>
        </>
    )
}

export default Dashboard;