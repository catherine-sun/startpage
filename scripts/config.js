let paginator = document.getElementById("paginator");
let page_id = settings.pages.indexOf("home");
let page_content = document.getElementById("page-content");
let art_credit = document.getElementById("art-credit");

const updateArtCredit = (page) => {
    const artist = pages[page].artist;
    art_credit.setAttribute("data-content", `art by ${artist.name}`);
    art_credit.setAttribute("onclick", `openUrl("${artist.src}")`);
    art_credit.setAttribute("onkeydown", `handleKeyDown(event, () => openUrl("${artist.src}"))`);
}

updateArtCredit("home");

window.addEventListener("keydown", (e) => {
    if (document.activeElement !== document.body) return;
    let page_id2;
    switch (e.key) {
        case "ArrowLeft":
        case "j":
        case "a":
            page_id2 = page_id - 1 < 0 ? settings.pages.length - 1 : page_id - 1;
            break;
        case "ArrowRight":
        case "l":
        case "d":
        case " ":
            page_id2 = page_id + 1 === settings.pages.length ? 0 : page_id + 1;
            break;
        default:
            return;
    }
    changePage(page_id, page_id2);
})

const changePage = (n1, n2) => {
    document.activeElement.blur();
    document.getElementById("page" + n1).classList.remove("active");
    document.getElementById("page" + n2).classList.add("active");
    page_content.setAttribute("data-content", settings.pages[n2]);
    updateArtCredit(settings.pages[n2])
    page_id = n2;
}

settings.pages.forEach((_, index) => {
    let elem = document.createElement("span");
    elem.setAttribute("id", "page" + index);

    if (icons[settings.pages[index]]) {
        elem.innerText = settings.pages[index];
        elem.classList.add(paginator_item.word, "material-symbols-outlined");
    } else {
        elem.innerText = settings.paginator_style === paginator_item.word ? settings.pages[index] : null;
        elem.classList.add(settings.paginator_style);
    }

    index === page_id ? elem.classList.add("active") : null;
    elem.setAttribute("tabindex", "0");
    elem.addEventListener("keydown", (e) => handleKeyDown(e, () => changePage(page_id, +e.target.id.substr(-1) + 1)));
    elem.addEventListener("click", () => index === page_id ? null : changePage(page_id, index));
    paginator.appendChild(elem);
})

function handleKeyDown(event, action) {
    if (event.key === "Enter" || event.key === " ") {
        action();
    } else if (event.key === "Escape") {
        event.target.blur();
    }
}

function openUrl(url) {
    document.activeElement.blur();
    settings.open_in_a_new_window ?  window.open(url) : window.location = url;
}

const components = {
    "page-content": PageContent,
    "app-item": AppItem,
    "greeting-loop": GreetingLoop,
    "greeting-text": GreetingText,
    "timetable-week": TimetableWeek,
}

for(const name in components) {
    customElements.define(name, components[name]);
}
