class Store {

    constructor() {
        this.store = window.localStorage;
    }

    getCalendar() {
        return JSON.parse(this.store.getItem('calendar')) || [];
    }

    setCalendar(calendar) {
        this.store.setItem('calendar', JSON.stringify(calendar));
    }

    updateEventNote(day, id, note) {
        const calendar = this.getCalendar();
        calendar[day][id].note = note;
        this.setCalendar(calendar);
    }

    clear() {
        this.store.clear();
    }
}
