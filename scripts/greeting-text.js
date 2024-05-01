class GreetingText extends HTMLElement {

    constructor() {
        super();
        this.before = this.getAttribute("before");
        this.after = this.getAttribute("after");
    }

    connectedCallback() {
        this.update("before", this.before);
        this.update("after", this.after);
    }

    update(name, value) {
        document.querySelector(":root").style.setProperty(`--${name}`, `url(${value})`);
        this.setAttribute(`data-${name}`, value !== undefined);
    }
}
