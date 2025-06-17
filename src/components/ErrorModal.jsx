function ErrorModal( {error_text} ) {
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
                    <p className="modal-description">{error_text}</p>
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