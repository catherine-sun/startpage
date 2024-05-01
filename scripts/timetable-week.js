class TimetableWeek extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.calendar = calendars[this.getAttribute("calendar")];
        this.innerHTML = `
            <div class="timetable-header">
                <h2>MON</h2>
                <h2>TUE</h2>
                <h2>WED</h2>
                <h2>THU</h2>
                <h2>FRI</h2>
            </div>
            <div class="timetable-grid">
                <div class="timetable-lines">${Array.from({length: 12}, () => "<div></div>").join("\n")}</div>
                ${this.calendar.map((day) => `
                    <div class="timetable-day">
                        <div class="events-wrapper">
                            ${day.map((event) => this.buildEvent(event)).join("\n")}
                        </div>
                    </div>
                `).join("\n")}
            </div>
            <div
                class="icon-button"
                data-content="open full calendar"
                tabindex="0"
                onclick="window.open('https://calendar.google.com')"
                onkeydown="handleKeyDown(event, () => window.open('https://calendar.google.com'))"
            >
                <object type="image/svg+xml" data="./assets/images/open-external-link-icon.svg"></object>
            </div>
        `;
    }

    buildEvent({style, colour, title, time, location}) {
        let height = style.match(/height: (\d+)px/);
        height = height ? +height[1] : 0;
        return `
            <div
                tabindex="0"
                class="event"
                style="${style} ${timetable_colours[colour]}"
                onclick="toggleTooltip(this)"
                onblur="hideTooltip(this)"
                onkeydown="handleKeyDown(event, () => toggleTooltip(this))"
            >
                <div class="event-body">
                    <strong>${title}</strong>
                    ${height < 20 ? `
                        <span>${time}, ${location}</span>
                    ` : height < 40 ? `
                        <div>${time}, ${location}</div>
                    ` : `
                        <div>${time}</div>
                        <div>${location}</div>
                    `}
                </div>
                <!-- TODO: replace placeholder text -->
                <div class="tooltip">
                    put something here but i'm not sure what to put so i'll just write a long sentence for now in case I want to add more stuff here later perhaps it should wrap, i'm not sure
                </div>
            </div>
        `;
    }

}

function hideTooltip(obj) {
    if (obj instanceof HTMLElement) {
        obj.querySelector(".tooltip").classList.remove("active");
    }
}

function toggleTooltip(obj) {
    if (obj instanceof HTMLElement) {
        obj.querySelector(".tooltip").classList.toggle("active");
    }
}
