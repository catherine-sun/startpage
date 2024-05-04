class TimetableWeek extends HTMLElement {

    constructor() {
        super();
        this.store = new Store();
        if (this.store.getCalendar().length === 0) {
            this.store.setCalendar(calendars[this.getAttribute("calendar")]);
        }
    }

    connectedCallback() {
        this.calendar = this.store.getCalendar();
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
                onclick="openUrl('https://calendar.google.com')"
                onkeydown="handleKeyDown(event, () => openUrl('https://calendar.google.com'))"
            >
                <object type="image/svg+xml" data="./assets/images/open-external-link-icon.svg"></object>
            </div>
        `;
        this.querySelectorAll(".timetable-day").forEach((elem, day) => {
            elem.querySelectorAll(".event").forEach((event, id) => {
                const textarea = event.querySelector("textarea");
                textarea.addEventListener("blur", (e) => {
                    if (!event.contains(e.relatedTarget)) {
                        hideTooltip(event);
                        this.store.updateEventNote(day, id, textarea.value);
                    }
                    if (textarea.value) {
                        textarea.nextElementSibling.textContent = textarea.value;
                        textarea.nextElementSibling.classList.remove("hidden");
                        textarea.classList.add("hidden");
                    }
                })
            })
        })
    }

    buildEvent({style, colour, title, time, location, note}) {
        let height = style.match(/height: (\d+)px/);
        height = height ? +height[1] : 0;
        return `
            <div
                tabindex="0"
                class="event"
                style="${style} ${timetable_colours[colour]}"
                onclick="showTooltip(this)"
                onblur="!this.contains(event.relatedTarget) && hideTooltip(this)"
                onkeydown="handleKeyDown(event, () => this === event.target && toggleTooltip(this))"
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
                <div class="tooltip">
                    <textarea
                        class="${note ? "hidden" : ""}"
                        onkeydown="{
                            if (event.key === 'Escape') return event.target.blur();
                            if (event.key === 'Tab') {
                                event.preventDefault();
                                event.target.value += '\t';
                            }
                            event.target.style.height = 'auto';
                            event.target.style.height = event.target.value !== '' ? event.target.scrollHeight + 'px' : '50px';
                        }"
                        placeholder="write something down"
                    >${note}</textarea>
                    <span
                        class="${note ? "" : "hidden"}"
                        tabindex="0"
                        onfocus="{
                            const textarea = this.previousElementSibling;
                            textarea.style.height = (this.getBoundingClientRect().height - 8) + 'px';
                            textarea.classList.remove('hidden');
                            this.classList.add('hidden');
                            textarea.focus();
                            textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
                        }"
                    >${note}</span>
                </div>
            </div>
        `;
    }
}

function showTooltip(obj) { obj.querySelector(".tooltip").classList.add("active") }
function hideTooltip(obj) { obj.querySelector(".tooltip").classList.remove("active"); }
function toggleTooltip(obj) { obj.querySelector(".tooltip").classList.toggle("active"); }
