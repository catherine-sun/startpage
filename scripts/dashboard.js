class Dashboard extends HTMLElement {

    load = [
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
            ${this.apps.map((name) => `<app-item name="${name}"></app-item>`).join("")}
        `;
    }
}

class App extends HTMLElement {

    constructor() {
        super();

        this.name = this.getAttribute("name");
        this.url = apps[this.name].url;
        this.icon = apps[this.name].icon;
        this.fgcol = apps[this.name].fgcol ?? "currentColor";
        this.bgcol = apps[this.name].bgcol;

        this.addEventListener("click", () => {
            if(data.open_in_a_new_window) {
                window.open(this.url);
            } else {
                window.location = this.url;
            }
        });

        this.isHardcoded = this.icon.match("^\.\/assets\/images\/.*\.svg$");
    }

    connectedCallback() {
        this.innerHTML = `
            <div
                class="app-icon"
                ${this.bgcol ? `style="background-color: ${this.bgcol};"` : ""}
            >
                <i ${this.isHardcoded ?`
                    class="large"
                    style="background: url(${this.icon}) no-repeat center center / contain;;"
                ` : `
                    class="large mask"
                    style="
                        mask-image: url(${this.icon});
                        background-color: ${this.fgcol};
                    "
                `}></i>
            </div>
            <span class="label">${this.name}</span>
        `;
    }
}