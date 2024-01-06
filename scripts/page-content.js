class PageContent extends HTMLElement {
    static observedAttributes = ["data-content"];

    load = [
        "./styles/page-content.css"
    ];

    constructor() {
        super();
        this.active = "home";
        this.default_accent = "141, 131, 255";
        this.classList.add("loading");
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                ${this.load.map((url) => `@import url(${url});`).join("")}
            </style>
            ${data.pages.map((page) => `
                ${data[page].wallpaper ? `
                    <style>
                        #page-${page}::before {
                            background-image: url(${data[page].wallpaper}) !important;
                        }
                    </style>
                ` : ""}
                <div id="page-${page}" class="page">
                    <app-dashboard apps=${data[page].apps}></app-dashboard>
                </div>
            `).join("")}
        `;

        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name !== "data-content") { return; }

        if (oldValue) {
            this.classList.remove("loading");
            document.getElementById("page-" + oldValue).classList.remove("active");
        }
        this.active = newValue;
        this.render();
    }

    render() {
        document.getElementById("page-" + this.active)?.classList.add("active");
        this.updateAccent(data[this.active].accent);
        const active_id = data.pages.indexOf(this.active);
        this.style.transform = `translateX(-${active_id * 100 / data.pages.length}%)`

        document.querySelector("greeting-loop").setAttribute("data-content", this.active);
        console.log(this.active)
    }

    updateAccent(a) {
        document.querySelector(":root").style.setProperty('--accent', a ?? this.default_accent);
    }
}
