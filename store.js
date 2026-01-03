class Store {

    static clear() {
        localStorage.clear();
    }

    static getNotes() {
        return JSON.parse(localStorage.getItem('calendars_v2_notes') || '{}');
    }

    static setNotes(notes) {
        localStorage.setItem('calendars_v2_notes', JSON.stringify(notes));
    }
}
