class TimetableDay extends HTMLElement {
    
    constructor() {
        super();
    }

    connectedCallback() {
        this.day = data.calendars.s24[this.getAttribute('dayindex')]
        this.innerHTML = `
            <div class="cell-wrapper">${this.day.map((event) => this.buildEvent(event)).join('\n')}</div>
        `;
    }

    buildEvent({ style, colour, title, time, location }) {
        let height = style.match(/height: (\d+)px/);
        height = height ? +height[1] : 0;
        return `
            <div 
                tabindex="0" 
                class="cell" 
                style="${style} ${timetable_colours[colour]}"
                onclick="toggleTooltip(this)"
                onblur="hideTooltip(this)"
                onkeydown="handleKeyDown(event, () => toggleTooltip(this))"
            >
                <div class="cell-body">
                    <strong>${title}</strong>
                    ${
                        height < 20 ? `
                            <span>${time}, ${location}</span>
                        ` : height < 40 ? `
                            <div>${time}, ${location}</div>
                        ` : `
                            <div>${time}</div>
                            <div>${location}</div>
                        ` 
                    }
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
        obj.querySelector(".tooltip").classList.remove('active');
    }
}

function toggleTooltip(obj) {
    if (obj instanceof HTMLElement) {
        obj.querySelector(".tooltip").classList.toggle('active');
    }
}