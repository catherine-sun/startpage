class Dashboard extends HTMLElement {

    load = [
        "https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css",
        "./styles/dashboard.css"
    ];

    constructor() {
        super();
        this.apps = this.getAttribute("apps").split(",");
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                ${this.load.map((url) => `@import url(${url});`).join("")}
            </style>
            <div class="app_list">
                ${this.apps.map((name) => `
                    <app-item
                        name="${name}"
                        url="${apps[name].url}"
                        icon="${apps[name].icon}"
                    ></app-item>
                `).join("")}
            </div>
        `;
    }
}

class App extends HTMLElement {

    constructor() {
        super();

        this.name = this.getAttribute("name");
        this.url = this.getAttribute("url");
        this.icon = this.getAttribute("icon");

        this.addEventListener("click", () => {
            if(data.open_in_a_new_window) {
                window.open(this.url);
            } else {
                window.location = this.url;
            }
        });
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="app_icon">
                <i class="large" style="content: url(./assets/images/${this.icon}.svg);"></i>
            </div>
            <span class="label">${this.name}</span>
        `;
    }
}