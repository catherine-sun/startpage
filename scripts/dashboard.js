class Dashboard extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<div>${data.links.map((url) => {
            return `<a class="link" href="${url}">hi</a>`
        }).join('')}</div>`;
    }
}
