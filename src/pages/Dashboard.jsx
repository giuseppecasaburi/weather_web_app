import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import Loader from "../components/Loader";
import MainCard from "../components/MainCard";
import { useLocation } from "react-router-dom";
import ErrorModal from "../components/ErrorModal";
import ApiHandleError from "../utility/ApiHandleError";

const apiUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_WEATHER;

function Dashboard() {
    // Lettura Url e impostazione error
    const locationUrl = useLocation();
    const [error, setError] = useState("");

    // Stati informazioni meteo
    const [forecastCondition, setForecastCondition] = useState([]);
    const [location, setLocation] = useState({});

    const [load, setLoad] = useState(true);

    // Creazione oggetto e dati per la ricerca
    const queryParams = useMemo(() => new URLSearchParams(locationUrl.search), [locationUrl.search]);
    const city_name = queryParams.get('city_name') || "Lodi";

    const queryObj = {
        "q": `${city_name}, Italy`,
        "days": "7",
        "lang": "it"
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
            const apiError = ApiHandleError(error);
            setError(apiError);
        } finally {
            setLoad(false)
        }
    })

    useEffect(() => {
        getWeather(queryObj);
    }, [])

    if (error) {
        return (
            <ErrorModal error_text={error} />
        )
    }

    return (
        <main>
            <div className="container">
                {load ? (
                    <Loader />
                ) : (
                    <MainCard location={location} forecastCondition={forecastCondition} />
                )}
            </div>
        </main>
    )
}

export default Dashboard;