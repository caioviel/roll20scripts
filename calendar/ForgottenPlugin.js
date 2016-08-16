var ForgottenCalendar = ForgottenCalendar || {
    name: "Forgotten Relms Calendar",

    startingDate : {
        day: 30,
        month: 12,
        year: 1489
    },

    setting : {
        daysOfYear : 360,
        daysOfTheWeek: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10'],
        monthsOfTheYear: [
            {name:'Hammer', days: 30, season: 3},
            {name:'Alturiak', days: 30, season: 3},
            {name:'Ches', days: 30, season: 0},
            {name:'Tarsakh', days: 30, season: 0},
            {name:'Mirtul', days: 30, season: 0},
            {name:'Kythorn', days: 30, season: 1},
            {name:'Flamerule', days: 30, season: 1},
            {name:'Eleasis', days: 30, season: 1},
            {name:'Eleint', days: 30, season: 2},
            {name:'Marpenoth', days: 30, season: 2},
            {name:'Uktar', days: 30, season: 2},
            {name:'Nightal', days: 30, season: 3}
        ],
        yearPrefix: 'DR',
        seasons : [
            "Spring",
            "Summer",
            "Fall",
            "Winter"
        ],
    
    },
    
  holidays : {
        "1/1" : [
            {
                name: "Seeing Justice", 
                area: "Tyr", 
                description: ""
            },
            {
                name: "Thunder Blessing",
                area: "Moradin",
                description: ""
            }
        ],        
        "10/1" : [
            {
                name: "Great Clang", 
                area: "Gaerdal", 
                description: ""
            }
        ],
        "1/2" : [
            {
                name: "Seeing Justice",
                area: "Tyr",
                description: ""
            }
        ],
        "1/3" : [
            {
                name: "Seeing Justice",
                area: "Tyr",
                description: ""
            }
        ],
        "1/4" : [
            {
                name: "Queen's Gambit",
                area: "Red Knight",
                description: ""
            }
        ],
        "1/5" : [
            {
                name: "Unwrapping",
                area: "Geb",
                description: ""
            }
        ]
    }


};


CALENDAR = ForgottenCalendar;