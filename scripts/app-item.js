class AppItem extends HTMLElement {

    constructor() {
        super();

        this.name = this.getAttribute("name");
        this.url = apps[this.name].url;
        this.icon = apps[this.name].icon;
        this.fgcol = apps[this.name].fgcol ?? "currentColor";
        this.bgcol = apps[this.name].bgcol;

        this.addEventListener("click", () => openUrl(this.url));
        this.addEventListener("keydown", (e) => handleKeyDown(e, () => openUrl(this.url)));

        this.isHardcoded = this.icon.match("^\.\/assets\/images\/.*\.svg$");
    }

    connectedCallback() {
        this.innerHTML = `
            <div
                class="app-icon"
                ${this.bgcol ? `style="background-color: ${this.bgcol};"` : ""}
                tabindex="0"
            >
                <i ${this.isHardcoded ?`
                    class="large"
                    style="background: url(${this.icon}) no-repeat center center / contain;"
                ` : `
                    class="large mask"
                    style="
                        mask-image: url(${this.icon});
                        background-color: ${this.fgcol};
                    "
                `}></i>
            </div>
            <div class="label">${this.name}</div>
        `;
    }
}
