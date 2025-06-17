import { useNavigate } from "react-router-dom";

function SettingsPage() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const city_name = form.city_name.value;

        navigate(`/?city_name=${encodeURIComponent(city_name)}`);
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
                                            <label htmlFor="city_name">Nome Città</label>
                                            <input type="text" name="city_name" placeholder="Milano" />
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