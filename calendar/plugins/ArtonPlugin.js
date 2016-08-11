var ArtonCalendar = ArtonCalendar || {

    name: "Calendário Artoniano",

    startingDate : {
        day: 7,
        month: 2,
        year: 1400
    },

    setting : {
        daysOfYear : 365,
        daysOfTheWeek: [
            'Aztag',
            'Lanag',
            'Tirag',
            'Jetag',
            'Morag',
            'Kalag',
            'Valag'],
        monthsOfTheYear: [
            {name:'Altossol', days: 30, season: 1},
            {name:'Wynn', days: 30, season: 1},
            {name:'Cyd', days: 30, season: 1},
            {name:'Salizz', days: 30, season: 2},
            {name:'Terraviva', days: 30, season: 2},
            {name:'Dantal', days: 30, season: 2},
            {name:'Luvitas', days: 30, season: 3},
            {name:'Weez', days: 30, season: 3},
            {name:'Exinn', days: 30, season: 3},
            {name:'Lunaluz', days: 30, season: 0},
            {name:'Pace', days: 30, season: 0},
            {name:'Aurea', days: 30, season: 0}
        ],
        yearPrefix: 'CA',
        seasons : [
            "Primavera",
            "Verão",
            "Outono",
            "Inverno"
        ],
    
    },
    
    holidays : {
        "9/2" : [
              {
                name: "Dia do Arcano", 
                area: "", 
                description: "Todos os magos de uma localidade reúnem-se em uma grande confraternização no dia do Arcano. "
                             +"Não-magos evitam participar (ou mesmo se aproximar!) desses encontros, mas eles não são de modo "
                             +"algum secretos. Conta-se que a maioria das pessoas nascidas nesse dia tem uma grande aptidão para "
                             +"a magia. O dia também é consagrado aos seis gênios elementais que dão os nomes às suas respectivas"
                             +"sub-raças: Asura, Dao, Div, Djinn, Efreet e Marid"
            },
        ],
        "12/2" : [
              {
                name: " Cerimônia de Admissão da Ordem da Luz referente ao verão", 
                area: "", 
                description: ""
            },
        ],
    },
};

CALENDAR = ArtonCalendar;