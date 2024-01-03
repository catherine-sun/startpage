let paginator = document.getElementById("paginator");
let page = document.getElementById("page");
let page_id = data.pages.indexOf("home");

window.addEventListener("keydown", (e) => {
    var page_id2;
    switch(e.key) {
        case "ArrowLeft":
        case "j":
            page_id2 = page_id - 1 < 0 ? data.pages.length - 1 : page_id - 1;
            break;
        case "ArrowRight":
        case "l":
        case " ":
            page_id2 = page_id + 1 == data.pages.length ? 0 : page_id + 1;
            break;
        default:
            return;
    }
    changePage(page_id, page_id2);
})

const changePage = (n1, n2) => {
    document.getElementById("page" + n1).classList.remove("active");
    document.getElementById("page" + n2).classList.add("active");
    page.setAttribute("data", data.pages[n2]);
    page_id = n2;
}

data.pages.forEach((_, index) => {
    var elem = document.createElement("span");
    elem.setAttribute("id", "page" + index);

    if(icons[data.pages[index]]) {
        elem.innerText = data.pages[index];
        elem.classList.add(paginator_item.word, "material-symbols-outlined");
    } else {
        elem.innerText = data.paginator_style === paginator_item.word ? data.pages[index] : null;
        elem.classList.add(data.paginator_style);
    }

    index == page_id ? elem.classList.add("active") : null;
    paginator.appendChild(elem);

    elem.addEventListener("click", () => {
        index == page_id ? null : changePage(page_id, index);
    })
})

const components = {
    "page-content": PageContent,
    "app-dashboard": Dashboard,
    "app-item": App,
}

for(const name in components) {
    customElements.define(name, components[name]);
}
