class GreetingLoop extends HTMLElement {
    static observedAttributes = ["data-content"];

    constructor() {
        super();
    }

    connectedCallback() {
        this.config = pages.home;
        this.render();
    }

    attributeChangedCallback(name, _, newValue) {
        if (name !== "data-content") return;
        this.config = pages[newValue];
        this.render();
    }

    render() {
        const before = this.config.separator?.before;
        const after = this.config.separator?.after;
        const text = this.getGreeting();
        this.innerHTML = `
            <greeting-text class="looping" before=${before} after=${after}>${text}</greeting-text>
            <greeting-text class="looping" before=${before} after=${after}>${text}</greeting-text>
            <greeting-text class="looping" before=${before} after=${after}>${text}</greeting-text>
        `;
    }

    getGreeting() {
        const date = new Date();
        var greeting = "";

        if (this.config.include_datetime_in_greeting) {
            greeting += new Intl.DateTimeFormat(this.config.datetime_format.locale, this.config.datetime_format.options).format(date);
            greeting += this.config.separator.between ? `\t${this.config.separator.between}\t` : "\t";
        }

        let hour = date.getHours();
        greeting += this.config.greetings?.map((g) => {
            if (g.start <= hour && hour < g.end) return g.msg;
        }).join("");
        return greeting;
    }
}
