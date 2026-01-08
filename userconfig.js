const settings = {
    pages: [
        "study",
        "home",
        "other",
    ],
    paginator_style: paginator_item.word,
    open_in_a_new_window: true,
    selected_calendar: "s24",
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

const calendars = {
    s24: {
        MONDAY: [],
        TUESDAY:
            [
                {
                    title: "LGGA82 LEC",
                    start: "09:00",
                    minutes: "180",
                    colour: "Banana",
                    description: "KW 120",
                },
                {
                    title: "CSCC63 LEC",
                    start: "12:00",
                    minutes: "120",
                    colour: "Tangerine",
                    description: "HL B101",
                },
                {
                    title: "CSCC09 PRA",
                    start: "15:00",
                    minutes: "120",
                    colour: "Sage",
                    description: "BV 473",
                },
            ],
        WEDNESDAY:
            [
                {
                    title: "CSCD03H3 LEC",
                    start: "10:00",
                    minutes: "120",
                    colour: "Grape",
                    description: "IC 200",
                },
                {
                    title: "CSCD03H3 TUT",
                    start: "13:30",
                    minutes: "15",
                    colour: "Grape",
                    description: "IC 308",
                },
            ],
        THURSDAY:
            [
                {
                    title: "CSCC63 LEC",
                    start: "14:00",
                    minutes: "60",
                    colour: "Tangerine",
                    description: "HL B101",
                },
                {
                    title: "CSCC63 TUT",
                    start: "15:00",
                    minutes: "60",
                    colour: "Tangerine",
                    description: "IC 326",
                },
                {
                    title: "CSCC09 LEC",
                    start: "17:00",
                    minutes: "120",
                    colour: "Sage",
                    description: "IC 220",
                },
            ],
        FRIDAY:
            [
                {
                    title: "LGGA82 LEC",
                    start: "09:00",
                    minutes: "180",
                    colour: "Banana",
                    description: "KW 120",
                },
            ],
    },
    w26: {
        MON: [
            {
                title: "STAC33 TUT",
                start: "11:00",
                minutes: "60",
                colour: "Lavender",
                description: "BV 498",
            },
        ],
        TUE: [
            {
                title: "CSCD43 TUT",
                start: "09:00",
                minutes: "60",
                colour: "Tangerine",
                description: "IA 3050",
            },
            {
                title: "STAC33 LEC",
                start: "12:00",
                minutes: "60",
                colour: "Lavender",
                description: "IC 220",
            },
            {
                title: "CSCD21 LEC",
                start: "13:00",
                minutes: "120",
                colour: "Sage",
                description: "IA 2150A",
            },
        ],
        WED: [],
        THU: [
            {
                title: "STAC33 LEC",
                start: "14:00",
                minutes: "60",
                colour: "Lavender",
                description: "IA 2150A",
            },
            {
                title: "CSCD21 TUT",
                start: "15:00",
                minutes: "60",
                colour: "Sage",
                description: "IA 2010",
            },
        ],
        FRI: [
            {
                title: "CSCD43 LEC",
                start: "09:00",
                minutes: "120",
                colour: "Tangerine",
                description: "IA 2010",
            },
        ],
    }
}