function ErrorModal() {
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h2 className="modal-title">Si è verificato un errore</h2>
                </div>

                <div className="modal-body">
                    <p className="modal-description">Qualcosa è andato storto. Ricarica la pagina o riprova più tardi.</p>
                </div>

                <div className="modal-footer">
                    <button className="btn btn-primary" onClick={handleReload}>
                        Ricarica
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorModal;