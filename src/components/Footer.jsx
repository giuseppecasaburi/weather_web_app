const urlApi = import.meta.env.VITE_URL_API
const urlRepo = import.meta.env.VITE_URL_REPOSITORY

function Footer() {
    return (
        <footer>
            <p>Dati forniti da <a href={`${urlApi}`} target="_blank" rel="noopener noreferrer">OpenWeatherMap</a></p>
            <p>&copy; 2025 MeteoApp. Tutti i diritti riservati.</p>
            <p><a href={`${urlRepo}`} target="_blank" rel="noopener noreferrer">Codice sorgente su GitHub</a></p>
        </footer>
    )
}


export default Footer;