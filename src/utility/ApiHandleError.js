function ApiHandleError(error) {
    // Se arriva risposta dal server
    if (error.response) {
        // Destrutturazione
        const { status, data } = error.response;

        // Se WeatherAPI restituisce un corpo con errore strutturato
        if (data && data.error && data.error.message) {
            return (data.error.message);
        }
        // Altri status HTTP
        else if (status === 400) {
            return "Richiesta non valida. Controlla i parametri.";
        } else if (status === 401) {
            return "Chiave API non valida, contatta l'assistenza.";
        } else if (status === 403) {
            return "Accesso negato.";
        } else if (status === 500) {
            return "Errore interno del server.";
        } else {
            return `Errore HTTP ${status}`;
        }
    }
    // Nessuna risposta dal server
    else if (error.request) {
        return "Nessuna risposta dal server. Verifica la connessione.";
    }
    // Errore nella configurazione o altro
    else {
        return `Errore nella richiesta: ${error.message}`;
    }
}

export default ApiHandleError;