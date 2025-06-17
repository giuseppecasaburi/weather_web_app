import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InputError from "../utility/InputError";

function SettingsPage() {
    // Hook di navigazione
    const navigate = useNavigate();
    const [error, setError] = useState("");

    // Handle gestore del submit di ricerca
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const form = e.target;
        const city_name = form.city_name.value;

        const validationError = InputError(city_name);
        if (validationError) {
            setError(validationError);
            return;
        }

        navigate(`/?city_name=${encodeURIComponent(city_name.trim())}`);
    };

    return (
            <main>
                <section id="settings-page">
                    <div className="container-card">
                        <div id="change-location">
                            <div className="sc-card">
                                <div className="sc-top">
                                    <h2>Cambia Località</h2>
                                </div>
                                <div className="sc-bottom">
                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <label htmlFor="city_name">Nome Città</label>
                                            <input
                                                type="text"
                                                name="city_name"
                                                placeholder="Milano"
                                            />
                                        </div>
                                        {error && (
                                            <p>{error}</p>
                                        )}
                                        <button type="submit">Aggiorna Ricerca</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    );
}

export default SettingsPage;