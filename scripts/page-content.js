class PageContent extends HTMLElement {
    static observedAttributes = ["data"];

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.data = "";
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === "data") {
            this.data = newValue;
            this.render();
        }
    }

    render() {
        switch(this.data) {
            case "home":
                this.root.innerHTML = `<h1>${this.data}</h1><app-dashboard apps="${data.home.apps}"/>`;
                break;
            default:
                this.root.innerHTML = `<h1>${this.data}</h1>`;
        }
    }
}
