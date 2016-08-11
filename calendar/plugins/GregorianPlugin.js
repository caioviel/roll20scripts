var GregorianCalendar = GregorianCalendar || {
    name: "Grecorian Calendar",

    startingDate : {
            day: 11,
            month: 8,
            year: 2016
    },

    setting :  {
        daysOfYear : 365,
        daysOfTheWeek: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ],
        monthsOfTheYear: [
            {name:'January', days: 31, season: Season.WINTER},
            {name:'February', days: 28, season: Season.WINTER},
            {name:'March', days: 31, season: Season.SPRING},
            {name:'April', days: 30, season: Season.SPRING},
            {name:'May', days: 31, season: Season.SPRING},
            {name:'June', days: 30, season: Season.SUMMER},
            {name:'July', days: 31, season: Season.SUMMER},
            {name:'August', days: 31, season: Season.SUMMER},
            {name:'September', days: 30, season: Season.FALL},
            {name:'October', days: 31, season: Season.FALL},
            {name:'November', days: 30, season: Season.FALL},
            {name:'December', days: 31, season: Season.WINTER}
        ],
        yearPrefix: 'AD',
        seasons : [
            "Spring",
            "Summer",
            "Fall",
            "Winter"
        ],
    }

};

CALENDAR = GregorianCalendar;