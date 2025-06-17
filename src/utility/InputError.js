function InputError(value) {
    if (!value.trim()) {
            return "Il campo è obbligatorio.";
        }
        if (value.trim().length < 2) {
            return "Il nome della città è troppo corto.";
        }
        if (!/^[a-zA-ZÀ-ÿ\s\-']+$/.test(value.trim())) {
            return "Il nome contiene caratteri non validi.";
        }
        return "";
}

export default InputError;