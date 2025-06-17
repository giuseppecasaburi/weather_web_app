const urlApi = import.meta.env.VITE_URL_API
const urlRepo = import.meta.env.VITE_URL_REPOSITORY

function Footer() {
    return (
        <footer className="bg-gray-900 text-white p-4 text-center text-sm">
            <p>Dati forniti da <a href={`${urlApi}`} target="_blank" rel="noopener noreferrer" className="underline">OpenWeatherMap</a></p>
            <p>&copy; 2025 MeteoApp. Tutti i diritti riservati.</p>
            <p><a href={`${urlRepo}`} className="underline">Codice sorgente su GitHub</a></p>
        </footer>
    )
}


export default Footer;