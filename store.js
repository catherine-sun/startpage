class Store {

    static clear() {
        localStorage.clear();
    }

    static getNote(key) {
        return localStorage.getItem(key);
    }

    static setNote(key, value) {
        if (value && value !== "") localStorage.setItem(key, value);
        else localStorage.removeItem(key);
    }
}
