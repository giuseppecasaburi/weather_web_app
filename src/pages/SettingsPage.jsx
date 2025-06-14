import { useNavigate } from "react-router-dom";

function SettingsPage() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const long = form.long.value;
        const lat = form.lat.value;

        navigate(`/?long=${encodeURIComponent(long)}&lat=${encodeURIComponent(lat)}`);
    }


    return (
        <>
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
                                            <label htmlFor="long">Longitudine</label>
                                            <input type="text" name="long" placeholder="41.902783" />
                                        </div>
                                        <div>
                                            <label htmlFor="lat">Latitudine</label>
                                            <input type="text" name="lat" placeholder="12.496365" />
                                        </div>
                                        <button type="submit">Aggiorna Ricerca</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default SettingsPage;