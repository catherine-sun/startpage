const settings = {
    pages: [
        "study",
        "home",
        "other",
    ],
    paginator_style: paginator_item.word,
    open_in_a_new_window: true,
    selected_calendar: "w26",
}

const pages = {
    home: {
        apps: [
            "twitter",
            "files",
            "reddit",
            "github",
        ],
        wallpaper: "./assets/images/penguin-shower-101Neg.jpg",
        artist: {
            name: "@101Neg",
            src: "https://www.pixiv.net/en/artworks/96769333",
        },
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
        artist: {
            name: "@DENDENmuri",
            src: "https://twitter.com/DENDENmuri/status/1729062775274831958/photo/1"
        },
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
        artist: {
            name: "@mochii_lisa",
            src: "https://twitter.com/mochii_lisa/status/1742626752751448357/photo/1",
        },
        accent: "99, 192, 135",
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

// To see changes in the calendars, local storage needs to be cleared
// TODO: change this and let user export/save notes
const calendars = {
    s24: [
        // MONDAY
        [],
        // TUESDAY
        [
            {
                "style": "top: 359px; height: 118px;",
                "colour": "Banana",
                "title": "LGGA82Y3 LEC01",
                "time": "9am – 12pm",
                "location": "KW 120",
                "note": "",
            },
            {
                "style":  "top: 479px; height: 78px;",
                "colour": "Tangerine",
                "title": "CSCC63H3 LEC01",
                "time": "12 – 2pm",
                "location": "HL B101",
                "note": "",
            },
            {
                "style":  "top: 599px; height: 78px;",
                "colour": "Sage",
                "title": "CSCC09H3 PRA0002",
                "time": "3 – 5pm",
                "location": "BV 473",
                "note": "",
            },
        ],
        // WEDNESDAY
        [
            {
                "style":  "top: 399px; height: 78px;",
                "colour": "Grape",
                "title": "CSCD03H3 LEC01",
                "time": "10am – 12pm",
                "location": "IC 200",
                "note": "",
            },
            {
                "style":  "top: 539px; height: 18px;",
                "colour": "Grape",
                "title": "CSCD03H3 TUT0002",
                "time": "1:30pm",
                "location": "IC 308",
                "note": "",
            },
        ],
        // THURSDAY
        [
            {
                "style":  "top: 559px; height: 38px;",
                "colour": "Tangerine",
                "title": "CSCC63H3 LEC01",
                "time": "2pm",
                "location": "HL B101",
                "note": "",
            },
            {
                "style":  "top: 599px; height: 38px;",
                "colour": "Tangerine",
                "title": "CSCC63H3 LEC01",
                "time": "3pm",
                "location": "IC 326",
                "note": "",
            },
            {
                "style":  "top: 679px; height: 78px;",
                "colour": "Sage",
                "title": "CSCC09H3 LEC01",
                "time": "5 – 7pm",
                "location": "IC 220",
                "note": "",
            },
        ],
        // FRIDAY
        [
            {
                "style":  "top: 359px; height: 118px;",
                "colour": "Banana",
                "title": "LGGA82Y3 LEC01",
                "time": "9am – 12pm",
                "location": "KW 264",
                "note": "",
            },
        ],
    ],
    w26: [
        // MONDAY
        [
            {
                "style": "top: 438px; height: 38px;",
                "colour": "Lavender",
                "title": "STAC33 TUT",
                "time": "11am – 12pm",
                "location": "BV 498",
                "note": "",
            },
        ],
        // TUESDAY
        [
            {
                "style": "top: 359px; height: 38px;",
                "colour": "Tangerine",
                "title": "CSCD43 TUT",
                "time": "9am – 10am",
                "location": "IA 3050",
                "note": "",
            },
            {
                "style": "top: 479px; height: 38px;",
                "colour": "Lavender",
                "title": "STAC33 LEC",
                "time": "12pm – 1pm",
                "location": "IC 220",
                "note": "",
            },
            {
                "style": "top: 519px; height: 78px;",
                "colour": "Sage",
                "title": "CSCD21 LEC",
                "time": "1pm – 3pm",
                "location": "IA 2150",
                "note": "",
            },
        ],
        // WEDNESDAY
        [],
        // THURSDAY
        [
            {
                "style":  "top: 559px; height: 38px;",
                "colour": "Lavender",
                "title": "STAC33 LEC",
                "time": "2pm – 3pm",
                "location": "IC 220",
                "note": "",
            },
            {
                "style":  "top: 599px; height: 38px;",
                "colour": "Sage",
                "title": "CSCD21 TUT",
                "time": "3pm – 4pm",
                "location": "IA 2150",
                "note": "",
            },
        ],
        // FRIDAY
        [
            {
                "style":  "top: 359px; height: 78px;",
                "colour": "Tangerine",
                "title": "CSCD43 LEC",
                "time": "9am – 11am",
                "location": "IA 2010",
                "note": "",
            },
        ],
    ],
}
