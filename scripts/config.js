
let container = document.getElementById("container");
let page = document.getElementById("page");
let paginator = document.getElementById("paginator");

const pages = [
    "./pages/1.html",
    "./pages/home.html",
    "./pages/2.html",
];

let pgId = pages.indexOf("./pages/home.html");

document.addEventListener("keydown", (e) => {
    var pgId2;
    switch(e.key) {
        case "ArrowLeft":
        case "j":
            pgId2 = pgId - 1 < 0 ? pages.length - 1 : pgId -1;
            break;
        case "ArrowRight":
        case "l":
        case " ":
            pgId2 = pgId + 1 == pages.length ? 0 : pgId + 1;
            break;
        default:
            return;
    }
    document.getElementById("pg" + pgId).classList.remove("active");
    pgId = pgId2;
    document.getElementById("pg" + pgId).classList.add("active");
    page.setAttribute("data", pages[pgId]);
})

pages.forEach((_, index) => {
    var el = document.createElement("div");
    el.setAttribute("id", "pg" + index.toString());
    el.classList.add("circle");
    index == pgId ? el.classList.add("active") : null;
    paginator.appendChild(el);
})