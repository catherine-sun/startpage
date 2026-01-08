class TimetableEvent extends HTMLElement {

  constructor() {
    super();
    this.BASE_HOUR = 9;
    this.BASE_TOP = 42;
    this.PX_PER_HOUR = 40;
    this.PX_GAP = 2;

    const evt = JSON.parse(this.getAttribute("event"));
    const key = this.getAttribute("key");
    const [top, height] = this.timeToStyle(evt.start, evt.minutes);
    this.buildEvent(evt, key, top, height);
    this.buildTooltip(key, top + 20);
  }

  buildEvent({ title, start, minutes, description, colour }, key, top, height) {
    const eventDiv = document.createElement("div");
    eventDiv.tabIndex = 0;
    eventDiv.className = "event";
    eventDiv.style = `top: ${top}px; height: ${height}px; ${timetable_colours[colour]}`;
    eventDiv.addEventListener("click", () => this.showTooltip(key));
    eventDiv.addEventListener("focusout", (e) => {
      if (!this.contains(e.relatedTarget)) this.hideTooltip(key);
    });
    eventDiv.addEventListener("keydown", (e) => handleKeyDown(e, () => e.currentTarget === e.target && this.toggleTooltip(key)));
    eventDiv.innerHTML = `
      <div class="event-body ${minutes > 30 && "not-short-event"}">
        <strong>${title}</strong>
        <span>${this.formatTimeRange(start, minutes)}, ${description || ""}</span>
      </div>
    `;

    this.appendChild(eventDiv);
  }

  buildTooltip(key, top) {
    const tooltipDiv = document.createElement("div");
    tooltipDiv.className = "tooltip";
    tooltipDiv.style = `top: ${top}px`;
    tooltipDiv.setAttribute("data-key", key);

    const tooltipText = document.createElement("textarea");
    tooltipText.placeholder = "write something down";
    tooltipText.value = Store.getNote(key) ?? "";
    tooltipText.addEventListener("keydown", (e) => {
      if (e.key === 'Escape') return e.target.blur();
      this.setTextHeight(tooltipDiv, e.target);
    });
    tooltipText.addEventListener("keyup", (e) => this.setTextHeight(tooltipDiv, e.target));
    tooltipText.addEventListener("blur", (e) => {
      const related = e.relatedTarget;
      if (!tooltipDiv.contains(related)) {
        this.hideTooltip(key);
        Store.setNote(key, tooltipText.value);
      }
    });

    tooltipDiv.appendChild(tooltipText);
    this.appendChild(tooltipDiv);
  }

  // convert a start time and duration into CSS `top` and `height`
  timeToStyle(start, minutes) {
    if (!start) return "";
    const [hh, mm] = start.split(":").map((s) => parseInt(s, 10));
    const minutesFromBase = (hh - this.BASE_HOUR) * 60 + (mm || 0);
    const top = Math.round(this.BASE_TOP + (minutesFromBase / 60) * this.PX_PER_HOUR);
    const height = Math.max(18, Math.round((minutes / 60) * this.PX_PER_HOUR));
    return [top, height - this.PX_GAP];
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

  setTextHeight(tooltip, textarea) {
    tooltip.style.height = 'auto';
    tooltip.style.height = textarea.value !== '' ? textarea.scrollHeight + 'px' : '50px';
  }

  showTooltip(key) {
    document.querySelectorAll('.tooltip.active').forEach(t => t.classList.remove('active'));
    const t = document.querySelector(`.tooltip[data-key="${key}"]`);
    if (!t) return;
    t.classList.add('active');
    this.setTextHeight(t, t.querySelector('textarea'));
  }

  hideTooltip(key) {
    document.querySelector(`.tooltip[data-key="${key}"]`)?.classList.remove('active');
  }

  toggleTooltip(key) {
    const t = document.querySelector(`.tooltip[data-key="${key}"]`);
    if (!t) return;
    if (t.classList.contains('active')) {
      t.classList.remove('active');
    } else {
      document.querySelectorAll('.tooltip.active').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
    }
  }
}