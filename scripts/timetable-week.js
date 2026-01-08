class TimetableWeek extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        const calendar = calendars[settings.selected_calendar] || {};
        const days = Object.keys(calendar);
        this.innerHTML = `
            <div class="timetable-header">
                ${days.map((d) => `<h2>${d}</h2>`).join("")}
            </div>
            <div class="timetable-grid">
                <div class="timetable-lines">
                ${Array.from({ length: 12 }, () => "<div></div>").join("\n")}
                </div>
                ${days.map((d) => `
                <div class="timetable-day">
                    ${calendar[d].map((evt, id) => `
                        <timetable-event
                            event='${JSON.stringify(evt)}'
                            key="timetable:${settings.selected_calendar}:${d}:${id}}"
                        ></timetable-event>
                    `).join("\n")}
                </div>
                `).join("\n")}
            </div>
            <div
                class="icon-button"
                data-content="open full calendar"
                tabindex="0"
                onclick="openUrl('https://calendar.google.com')"
                onkeydown="handleKeyDown(event, () => openUrl('https://calendar.google.com'))"
            >
                <object type="image/svg+xml" data="./assets/images/open-external-link-icon.svg"></object>
            </div>
        `;
    }
}