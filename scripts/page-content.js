class PageContent extends HTMLElement {
    static observedAttributes = ["data"];

    constructor() {
        super();
        this.data = "";
        this.default_accent = "141, 131, 255";
        this.active = "home";
        this.classList.add("loading");
    }

    connectedCallback() {
        this.innerHTML = data.pages.map((page) => `
            <style>
                #page-${page}::before {
                    background-image: ${data[page].wallpaper ? `url(${data[page].wallpaper}) !important` : "unset"};
                }
            </style>
            <div id="page-${page}" class="page">
                <app-dashboard apps=${data[page].apps}></app-dashboard>
            </div>
        `).join("");

        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue) {
            this.classList.remove("loading");
        }
        if(name === "data") {
            this.data = newValue;
            this.render();
        }
    }

    render() {
        this.updateAccent(data[this.data].accent);
        document.querySelectorAll(".page").forEach((elem) => {
            if(elem.id === "page-" + this.data) {
                elem.classList.add("active");
            } else {
                elem.classList.remove("active");
            }
        })

        const active_id = data.pages.indexOf(this.data);
        this.style.transform = `translateX(-${active_id * 100 / data.pages.length}%)`
    }

    updateAccent(a) {
        document.querySelector(":root").style.setProperty('--accent', a ?? this.default_accent);
    }
}
