class TimetableWeek extends HTMLElement {

    constructor() {
        super();
        this.BASE_HOUR = 9;
        this.BASE_TOP = 360;
        this.PX_PER_HOUR = 40;
        this.PX_GAP = 2;
    }

    connectedCallback() {
        const calendar = calendars[settings.selected_calendar] || {};
        const days = Object.keys(calendar);
        this.notes = Store.getNotes();

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
            <div class="events-wrapper">
              ${(calendar[d] || []).map((evt, idx) => this.buildEvent(Object.assign({}, evt, { note: this.getSavedNote(d, idx) }))).join("\n")}
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
                if (!textarea) return;
                textarea.addEventListener("blur", (e) => {
                    if (!event.contains(e.relatedTarget)) {
                        hideTooltip(event);
                        const dayKey = days[day];
                        this.saveNote(dayKey, id, textarea.value);
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

    getSavedNote(day, idx) {
        try {
            return this.notes?.[this.calendarName]?.[day]?.[idx] ?? "";
        } catch (e) {
            return "";
        }
    }

    saveNote(day, idx, value) {
        this.notes ??= {};
        this.notes[this.calendarName] ??= {};
        this.notes[this.calendarName][day] ??= [];
        this.notes[this.calendarName][day][idx] = value;
        try {
            Store.setNotes(this.notes);
        } catch (e) {
            console.warn('Failed to save timetable note', e);
        }
    }

    buildEvent({ title, start, minutes, description, note, colour }) {
        const style = this.timeToStyle(start, parseInt(minutes, 10));
        return `
        <div
          tabindex="0"
          class="event"
          style="${style} ${timetable_colours[colour] || ''}"
          onclick="showTooltip(this)"
          onblur="!this.contains(event.relatedTarget) && hideTooltip(this)"
          onkeydown="handleKeyDown(event, () => this === event.target && toggleTooltip(this))"
        >
          <div class="event-body ${minutes > 30 && "not-short-event"}">
            <strong>${title}</strong>
            <span>${this.formatTimeRange(start, minutes)}, ${description || ''}</span>
          </div>
          <div class="tooltip">
            <textarea
              class="${note ? "hidden" : ""}"
              onkeydown="{
                if (event.key === 'Escape')
                  return event.target.blur();
                if (event.key === 'Tab') {
                  event.preventDefault();
                  event.target.value += '\t';
                }
                event.target.style.height = 'auto';
                event.target.style.height = event.target.value !== '' ? event.target.scrollHeight + 'px' : '50px';
              }"
              placeholder="write something down"
            >${note || ''}</textarea>
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
            >${note || ''}</span>
          </div>
        </div>
      `;
    }

    // convert a start time and duration into CSS `top` and `height`
    timeToStyle(start, minutes) {
        if (!start) return "";
        const [hh, mm] = start.split(":").map((s) => parseInt(s, 10));
        const minutesFromBase = (hh - this.BASE_HOUR) * 60 + (mm || 0);
        const top = Math.round(this.BASE_TOP + (minutesFromBase / 60) * this.PX_PER_HOUR);
        const height = Math.max(18, Math.round((minutes / 60) * this.PX_PER_HOUR));
        return `top: ${top}px; height: ${height - this.PX_GAP}px;`;
    }

    // convert a start time and duration into a time range
    formatTimeRange(start, minutes) {
        if (!start) return "";
        const [hh, mm] = start.split(":").map((s) => parseInt(s, 10));
        const startDate = new Date();
        startDate.setHours(hh, mm || 0, 0, 0);
        const endDate = new Date(startDate.getTime() + (parseInt(minutes || 0, 10) * 60000));
        const fmt = (d) => {
            let h = d.getHours();
            const m = d.getMinutes();
            const ampm = h >= 12 ? 'pm' : 'am';
            h = ((h + 11) % 12) + 1;
            return `${h}${m ? ':' + String(m).padStart(2, '0') : ''}${ampm}`;
        }
        return minutes <= 60 ? fmt(startDate) : `${fmt(startDate)} – ${fmt(endDate)}`;
    }
}

function showTooltip(obj) { obj.querySelector(".tooltip").classList.add("active") }
function hideTooltip(obj) { obj.querySelector(".tooltip").classList.remove("active"); }
function toggleTooltip(obj) { obj.querySelector(".tooltip").classList.toggle("active"); }
