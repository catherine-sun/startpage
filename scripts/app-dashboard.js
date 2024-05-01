class AppDashboard extends HTMLElement {

    load = [
        "./styles/app-dashboard.css"
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
