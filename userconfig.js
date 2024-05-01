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
    calendars: {
        s24: [
            [],
            [
                {
                    'style': 'top: 359px; height: 118px;',
                    'colour': 'Banana',
                    'title': 'LGGA82Y3 LEC01',
                    'time': '9am – 12pm', 
                    'location': 'KW 120'
                },
                {
                    'style':  'top: 479px; height: 78px;',
                    'colour': 'Tangerine',
                    'title': 'CSCC63H3 LEC01',
                    'time': '12 – 2pm', 
                    'location': 'HL B101'
                },
                {
                    'style':  'top: 599px; height: 78px;',
                    'colour': 'Sage',
                    'title': 'CSCC09H3 PRA0002',
                    'time': '3 – 5pm', 
                    'location': 'BV 473'
                },
            ],
            [
                {
                    'style':  'top: 399px; height: 78px;',
                    'colour': 'Grape',
                    'title': 'CSCD03H3 LEC01',
                    'time': '10am – 12pm', 
                    'location': 'IC 200'
                },
                {
                    'style':  'top: 539px; height: 18px;',
                    'colour': 'Grape',
                    'title': 'CSCD03H3 TUT0002',
                    'time': '1:30pm', 
                    'location': 'IC 308'
                },
            ],
            [
                {
                    'style':  'top: 559px; height: 38px;',
                    'colour': 'Tangerine',
                    'title': 'CSCC63H3 LEC01',
                    'time': '2pm', 
                    'location': 'HL B101'
                },
                {
                    'style':  'top: 599px; height: 38px;',
                    'colour': 'Tangerine',
                    'title': 'CSCC63H3 LEC01',
                    'time': '3pm', 
                    'location': 'IC 326'
                },
                {
                    'style':  'top: 679px; height: 78px;',
                    'colour': 'Sage',
                    'title': 'CSCC09H3 LEC01',
                    'time': '5 – 7pm', 
                    'location': 'IC 220'
                },
            ],
            [
                {
                    'style':  'top: 359px; height: 118px;',
                    'colour': 'Banana',
                    'title': 'LGGA82Y3 LEC01',
                    'time': '9am – 12pm', 
                    'location': 'KW 264'
                },
            ]
        ]
    }
}
