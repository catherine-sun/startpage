const data = {
    pages: [
        "study",
        "home",
        "other",
    ],
    paginator_style: paginator_item.word,
    open_in_a_new_window: true,
    home: {
        apps: [
            "twitter",
            "files",
            "reddit",
            "github",
        ],
        wallpaper: "./assets/images/penguin-shower-101Neg.jpg",
        include_datetime_in_greeting: true,
        datetime_format: {
            locale: undefined,
            options: {
                weekday: "short",
                month: "short",
                day: "numeric",
            },
        },
        separator: {
            before: "./assets/images/sparkles.gif",
            after: "./assets/images/sparkles.gif",
            between: " ⸜(｡> ᵕ < )⸝♡ ",
        },
        greetings: [
        ],
    },
    study: {
        apps: [
            "acorn",
            "twitter",
            "acorn",
            "twitter",
            "files",
            "reddit",
            "reddit",
        ],
        wallpaper: "./assets/images/wadoatsume-DENDENmuri.png",
        accent: "247, 126, 91",
        include_datetime_in_greeting: false,
        greetings: [
            {
                start: 0,
                end: 5,
                msg: "Go to bed...",
            },
            {
                start: 5,
                end: 12,
                msg: "Good morning! 🌻",
            },
            {
                start: 12,
                end: 20,
                msg: "Time to Learn :)",
            },
            {
                start: 20,
                end: 24,
                msg: "Good evening! 🌛",
            },
        ],
    },
    other: {
        apps: [
            "reddit",
            "reddit",
            "acorn",
            "twitter",
            "acorn",
            "twitter",
            "files",
        ],
        wallpaper: "./assets/images/hollowknight-mochii_lisa.jpg",
        accent: "97, 141, 114",
        include_datetime_in_greeting: true,
        datetime_format: {
            locale: undefined,
            options: {
                weekday: undefined,         //"narrow", "short", "long"
                era: undefined,             //"narrow", "short", "long"
                year: undefined,            //"2-digit", "numeric"
                month: undefined,           //"2-digit", "numeric", "narrow", "short", "long"
                day: undefined,             //"2-digit", "numeric"
                hour: "numeric",            //"2-digit", "numeric"
                minute: "numeric",          //"2-digit", "numeric"
                second: undefined,          //"2-digit", "numeric"
                timeZoneName: undefined,    //"short", "long"
                hour12: true,
                dayPeriod: "long",          //"narrow", "short", "long"
            },
        },
        separator: {
            after: "./assets/images/n.gif",
        },
        greetings: [
        ],
    },
}
