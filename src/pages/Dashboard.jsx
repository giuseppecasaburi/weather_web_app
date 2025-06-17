import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import Loader from "../components/Loader";
import MainCard from "../components/MainCard";
import { useLocation } from "react-router-dom";
import ErrorModal from "../components/ErrorModal";

const apiUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_WEATHER;

function Dashboard() {
    const locationUrl = useLocation();
    const [error, setError] = useState(false);

    const queryParams = useMemo(() => new URLSearchParams(locationUrl.search), [locationUrl.search]);

    const city_name = queryParams.get('city_name') || "Lodi";

    const [forecastCondition, setForecastCondition] = useState({});
    const [location, setLocation] = useState({});

    const [load, setLoad] = useState(true);

    const lodiObj = {
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
            setError(true);
            if (error.response) {
                if (error.response.status === 404) {
                    console.log("Films non trovati");
                    setError("Films non trovati")
                } else if (error.response.status === 500) {
                    console.log("Errore del server");
                    setError("Errore del server");
                } else {
                    console.log("Errore generico");
                    setError("Errore generico");
                }
            } else if (error.request) {
                // Nessuna risposta dal server
                console.error("Nessuna risposta dal server.");
                setError("Nessuna risposta dal server.");
            } else {
                // Altro tipo di errore (es. errore nella configurazione)
                console.error("Errore nella richiesta:", error.message);
                setError("Errore nella richiesta.");
            }
        } finally {
            setLoad(false)
        }
    })

    useEffect(() => {
        getWeather(lodiObj);
    }, [])

    if (error) {
        return (
            <ErrorModal />
        )
    }

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