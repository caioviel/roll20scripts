var GolarionCalendar = GolarionCalendar || {
    name: "Golarion Calendar",

    startingDate : {
            day: 30,
            month: 6,
            year: 4715
    },

    setting :  {
        daysOfYear : 365,
        daysOfTheWeek: [
            'Sunday',
            'Moonday',
            'Toilday',
            'Wealday',
            'Oathday',
            'Fireday',
            'Starday'
        ],
        monthsOfTheYear: [
            {name:'Abadius', days: 31, season: Season.WINTER},
            {name:'Calistril', days: 28, season: Season.WINTER},
            {name:'Pharast', days: 31, season: Season.SPRING},
            {name:'Gozran', days: 30, season: Season.SPRING},
            {name:'Desnus', days: 31, season: Season.SPRING},
            {name:'Sarenith', days: 31, season: Season.SUMMER},
            {name:'Erastus', days: 30, season: Season.SUMMER},
            {name:'Arodus', days: 31, season: Season.SUMMER},
            {name:'Rova', days: 30, season: Season.FALL},
            {name:'Lamashan', days: 31, season: Season.FALL},
            {name:'Neth', days: 30, season: Season.FALL},
            {name:'Kuthona', days: 31, season: Season.WINTER}
        ],
        yearPrefix: 'AR',
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
                name: "Foundation Day", 
                area: "Absalom", 
                description: "A civil holiday celebrating the foundation of the city by the god Aroden"
            },
            {
                name: "Pjallarane Day",
                area: "Irrisen",
                description: "This Irrisen New Year celebration commemorates the one-day rebellion launched by Queen Pjallarane against her mother, Baba Yaga."
            }
        ],
        "6/1" : [
            {
                name: "Vault Day",
                area: "Abadar",
                description: ""
            }
        ],
        "20/1" : [
            {
                name: "Ruby Prince's Birthday",
                area: "Osirion",
                description: "A national holiday in honor of the birthday of Khemet III, the Ruby Prince."
            }
        ],
        "2/2" : [
            {
                name: "Merrymead ",
                area: "Druma, Cayden Cailean",
                description: "During this holiday in celebration of the approaching Spring, the previous year's alcohol is consumed."
            }
        ],
        "16/2" : [
            {
                name: "King Eodred II's Birthday",
                area: "Korvosa",
                description: "A probably now defunct holiday honoring King Eodred (given the King's death in 4708 AR) on the occasion of his birthday."
            }
        ],
        "5/3" : [
            {
                name: "Day of Bones",
                area: "Pharasma",
                description: "Priests and worshipers of the Lady of Graves parade the bodies of the recently dead on this holiday, holding free burials afterwards"
            }
        ],
        "6/3" : [
            {
                name: "Sable Company Founding Day",
                area: "Korvosa",
                description: "A military holiday marked by parades, celebrating the founding of the Sable Company in 4409 AR"
            }
        ],
        "7/3" : [
            {
                name: "Night of Tears",
                area: "Solku",
                description: "A solemn vigil commemorating those lost in the Battle of Red Hail in 4701 AR."
            }
        ],
        "13/3" : [
            {
                name: "Kaliashahrim",
                area: "Qadira",
                description: "This national holiday celebrates the Padishah Emperor and Qadira's allegiance to him."
            }
        ],
        "20/3" : [
            {
                name: "Vernal Equinox",
                area: "",
                description: "",
            },
            {
                name: "Days of Wrath",
                area: "Cheliax, Asmodeus",
                description: "Contests and blood sports are held to honor and elevate those who are superior."
            },
            {
                name: "Firstbloom",
                area: "Gozreh",
                description: "Fertility dances celebrate the coming of spring."
            },
            {
                name: "Planting Week",
                area: "Erastil",
                description: "This holy week to the god Erastil is a time of heavy work in the fields for farmers."
            }
        ],
        "26/3" : [
            {
                name: "Conquest Day",
                area: "Nex",
                description: "A national holiday in which citizens of Nex renew their pledge to conquer their eternal enemy, Geb."
            }
        ],
        "7/4" : [
            {
                name: "Currentseve",
                area: "Gozreh", 
                description: "On this religious holiday, all who travel on the water make offerings to Gozreh in the hopes of safe passage for the coming year."
            }
        ],
        "15/4" : [
            {
                name: "Taxfest",
                area: "Abadar",
                description: "Priests of the god accompany tax collectors on this holiday. After completing their duties, the church sponsors large (and free) public celebrations to help mend relations with common folk."
            }
        ],
        "16/4" : [
            {
                name: "Wrights of Augustana",
                area: "Andoran",
                description: "This local festival in the Andoran port city of Augustana is held to honor and celebrate the local shipbuilding industry as well as the navy."
            }
        ],
        "2/5" : [
            {  
                name: "Ascendance Night",
                area: "Norgorber",
                description: "Day marking the apotheosis of the Reaper of Reputation."
            }
        ],
        "13/5" : [
            {
                name: "Old-Mage Day",
                area: "Nantambu, Mwangi Expanse",
                description: "Holiday celebrating Old-Mage Jatembe, the father of Garundi magic."
            }
        ],
        "31/5" : [
            {
                name: "Angel Day",
                area: "Magnimar, Varisia",
                description: "A day of masquerades acting as a celebration to the Empyreal Lords"
            }
        ],
        "3/6" : [
            {
                name: "Day of Destiny Festival",
                area: "Korvosa",
                description: "This day celebrates the day the emperor of Cheliax signed the charter for the founding of the city of Korvosa."
            },
            {
                name: "Liberty Day",
                area: "Andoran",
                description: "Holiday celebrating Andoran's independence"
            }
        ],
        "10/6" : [
            {
                name: "Burning Blades",
                area: "Serenrae",
                description: "The holy, month-long festival ends on this day, featuring dances with flaming blades."
            }
        ],
        "20/6" : [
            {
                name: "Summer Solstice",
                area: "",
                description: "",
            },
            {
                name: "Days of Wrath",
                area: "Cheliax, Asmodeus",
                description: "Contests and blood sports are held to honor and elevate those who are superior."
            },
            {
                name: "Ritual of Stardust",
                area: "Desna",
                description: "Festival held in the evening and through the night, where Desna's faithful sing songs and throw sand and powdered gems into bonfires."
            },
            {
                name: "Sunwrought Festival",
                area: "Sarenrae",
                description: "Day commemorating the defeat of Rovagug by Sarenrae, celebrated with the flying of kites, fireworks, and gift giving."
            }
        ],
        "21/6" : [
            {
                name: "Talon Tag",
                area: "Andoran",
                description: "The Eagle Knights perform aerial displays in Almas on this day."
            }
        ],
        "22/6" : [
            {
                name: "Riverwind Festival",
                area: "Korvosa",
                description: "An early summer holiday that honors a cooling shift in the winds, celebrated with much drinking."
            }
        ],
        "3/7" : [
            {
                name:  "Archer's Day or Archerfeast",
                area: "Erastil",
                description: "Holy day celebrated with archery contests, bartering for livestock, and the courting of women."
            }
        ],
        "14/7" : [
            {
                name: "Founding Festival",
                area: "Korvosa",
                description: "An all-night party filled with fireworks and alcohol commemorating the founding of the city in 4407 AR."
            }
        ],
        "17/7" : [
            {
                name: "Burning Night",
                area: "Razmiran",
                description: "Items or people who have transgressed against the god-king of Razmiran are burned on this day."
            }
        ],
        "15/7" : [
            {
                name: "Kianidi Festival",
                area: "Garundi",
                description: "Celebration where tribal ties are honored and stories of travels are shared."
            }
        ],
        "1/8" : [
            {
                name: "Inheritor's Ascendance",
                area: "Iomedae",
                description: ""
            }
        ],
        "6/8" : [
            {
                name: "First Crusader Day",
                area: "Mendev",
                description: "Holiday in celebration of the continuing crusade against the demons of the Worldwound."
            }
        ],
        "9/8" : [
            {
                name: "Day of Silenced Whispers",
                area: "Ustalav",
                description: "Holiday celebrating the defeat of the Whispering Tyrant and the freeing of Ustalav."
            }
        ],
        "10/8" : [
            {
                name: "Founding Day",
                area: "Ilsurian, Varisia",
                description: "Festival celebrating the founding by Ilsur of the town of Ilsurian in 4631 AR."
            }
        ],
        "16/8" : [
            {
                name: "Armasse",
                area: "Aroden, Iomedae",
                description: "Holy day where commoners are trained to fight and historical tales are told with the hope that someone will learn from them."
            }
        ],
        "31/8" : [
            {
                name: "Saint Alika's Birthday",
                area: "Korvosa",
                description: "Quiet holiday honoring the birth of Saint Alika the Martyr."
            }
        ],
        "6/9" : [
            {
                name: "Start of Classes",
                area: "Acadamae, Arcanamirium, College of Mysteries, Clockwork Cathedral",
                description: ""
            }
        ],
        "16/9" : [
            {
                name: "Autumnal Carpentry Court",
                area: "Andoran",
                description: ""
            }
        ],
        "19/9" : [
            {
                name: "Day of the Inheritor",
                area: "Iomedae",
                description: "Holiday commemorating the church of Iomedae's adoption of the forlorn faithful of the dead god Aroden into their midst."
            }
        ],
        "22/9" : [
            {
                name: "Autumnal Equinox",
                area: "",
                description: "",
            },
            {
                name: "Days of Wrath",
                area: "Cheliax, Asmodeus",
                description: "Contests and blood sports are held to honor and elevate those who are superior."
            },
            {
                name: "Swallowtail Festival",
                area: "Desna, Sandpoint",
                description: "Holiday celebrated with storytelling, feasting, and the release of butterflies."
            }
        ],
        "26/9" : [
            {
                name: "Feast of Szurpade",
                area: "Irrisen",
                description: "This \"celebration of plenty\" festival mocks the traditional harvest festivals celebrated in the region before Baba Yaga and her eternal winter descended upon the land."
            }
        ],
        "29/9" : [
            {
                name: "Day of Sundering",
                area: "Ydersius",
                description: "Once many holidays were celebrated by the faith of Ydersius, but today only this date has much significance."
            }
        ],
        "6/10" : [
            {
                name: "Ascendance Day",
                area: "Iomedae",
                description: "Holiday marking the ascension of the goddess Iomedae after taking the Test of the Starstone."
            }
        ],
        "19/10" : [
            {
                name: "Bastion Day",
                area: "Solku",
                description: "A festival honoring the founding of the town of Solku."
            }
        ],
        "27/10" : [
            {
                name: "Jestercap",
                area: "Andoran, Druma, Taldor",
                description: "Holiday marked by the playing of many practical jokes; particularly popular among gnomes."
            }
        ],
        "30/10" : [
            {
                name: "Allbirth",
                area:  "Lamashu",
                description: ""
            },
            {
                name: "Festival of the Witch",
                area: "Irrisen",
                description: "Festival celebrating witchcraft and the central part it plays in Irriseni culture."
            }
        ],
        "5/11" : [
            {
                name: "Independence Day",
                area: "Galt",
                description: "Marks the beginning of the Red Revolution."
            }
        ],
        "8/11" : [
            {
                name: "Abjurant Day",
                area: "Nethys",
                description: "Day of communal strengthening of defenses and the teaching of magic to children."
            }
        ],
        "13/11" : [
            {
                name: "Great Fire Remembrance",
                area: "Korvosa",
                description: "Holiday commemorates the dead of the Great Fire of 4429 AR."
            }
        ],
        "14/11" : [
            {
                name: "Even-Tongued Day",
                area: "Cheliax, Asmodeus",
                description: "Day that celebrates when Andoran, Galt, and Isger were put under Chelish control."
            }
        ],
        "18/11" : [
            {
                name: "Evoking Day",
                area: "Nethys",
                description: "Holiday marked by displays of fireworks and magical duels (both mock and real)."
            }
        ],
        "23/11" : [
            {
                name: "Seven Veils",
                area: "",
                description: "Celebration of the unity of all races, commemorated by multi-species masquerade balls."
            }
        ],
        "24/11" : [
            {
                name: "Baptism of Ice",
                area: "Irrisen",
                description: "A fertility festival where the children born in the previous year are paraded through the towns."
            }
        ],
        "28/11" : [
            {
                name: "Transmutatum",
                area: "Nethys",
                description: "Festival promoting self-improvement."
            }
        ],
        "7/12" : [
            {
                name: "Pseudodragon Festival",
                area: "Korvosa",
                description: "Holiday marking the return of the wild pseudodragons to Conqueror's Bay."
            }
        ],
        "11/12" : [
            {
                name: "Ascension Day",
                area: "Cayden Cailean",
                description: "Holiday celebrating Cayden's divine ascension after taking the Test of the Starstone."
            }
        ],
        "21/12" : [
            {
                name: "Winter Solstice",
                area: "",
                description: "",
            },
            {
                name: "Days of Wrath",
                area: "Cheliax, Asmodeus",
                description: "Contests and blood sports are held to honor and elevate those who are superior."
            },
            {
                name: "Crystalhue",
                area: "Shelyn",
                description: "Holiday marked by the creation of artistic works, and the start of romantic courtships."
            },
            {
                name: "Ritual of Stardust",
                area: "Desna",
                description: "Bi-annual festival held on the solstices, where the faithful of Desna sing songs through the night around bonfires."
            }
        ],
        "31/12" : [
            {
                name: "Night of the Pale",
                area: "",
                description: "Night of morbid revelry, as people wait indoors for the ghosts of last year's dead to pass by their homes."
            },
            {
                name: "The Final Day",
                area: "Groetus",
                description: "Cultists of Groetus perform an hour's silence at dusk on the last day of the year seeking guidance from their god about the End Time."
            }
        ]
    }

};

CALENDAR = GolarionCalendar;