class PageContent extends HTMLElement {
    static observedAttributes = ["data-content"];

    constructor() {
        super();
        this.active = "home";
        this.default_accent = "141, 131, 255";
        this.classList.add("loading");
    }

    connectedCallback() {
        this.addEventListener("transitionstart", (e) => {
            if (e.target instanceof PageContent) {
                document.querySelectorAll(".page").forEach((page) => page.classList.add("moving"));
            }
        })
        this.addEventListener("transitionend", (e) => {
            if (e.target instanceof PageContent) {
                document.querySelectorAll(".page").forEach((page) => page.classList.remove("moving"));
            }
        })
        this.innerHTML = `
            ${settings.pages.map((id) => `
                ${pages[id].wallpaper ? `
                    <style>
                        #page-${id}::before {
                            background-image: url(${pages[id].wallpaper}) !important;
                        }
                    </style>
                ` : ""}
                <div id="page-${id}" class="page">
                    <div class="app-dashboard">
                        ${pages[id].apps.map((name) => `<app-item name="${name}"></app-item>`).join("")}
                    </div>
                </div>
            `).join("")}
        `;
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name !== "data-content") return;
        if (oldValue) {
            this.classList.remove("loading");
            document.getElementById("page-" + oldValue).classList.remove("active");
        }
        this.active = newValue;
        this.render();
    }

    render() {
        document.getElementById("page-" + this.active)?.classList.add("active");
        this.updateAccent(pages[this.active].accent);
        const active_id = settings.pages.indexOf(this.active);
        this.style.transform = `translateX(-${active_id * 100 / settings.pages.length}%)`;
        document.querySelector("greeting-loop").setAttribute("data-content", this.active);
    }

    updateAccent(a) {
        document.querySelector(":root").style.setProperty("--accent", a ?? this.default_accent);
    }
}
