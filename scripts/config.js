
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
    page.setAttribute("data", "./pages/" + data.pages[n2] + ".html");
    page_id = n2;
}

data.pages.forEach((_, index) => {
    var elem = document.createElement("span");
    elem.setAttribute("id", "page" + index);
    elem.classList.add(data.paginator_style);

    if (data.paginator_style === paginator_item.word) {
        elem.innerText = data.pages[index];
        icons[data.pages[index]] ? elem.classList.add("material-symbols-outlined") : null;
    }

    index == page_id ? elem.classList.add("active") : null;
    paginator.appendChild(elem);

    elem.addEventListener("click", () => {
        index == page_id ? null : changePage(page_id, index);
    })
})
