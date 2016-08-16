var Climate = {
    COLD : 0,
    DESERT : 1,
    TEMPERATE : 2,
};

var Season = {
    SPRING : 0,
    SUMMER : 1,
    FALL : 2,
    WINTER : 3
};

var WeatherRandomGenerator = WeatherRandomGenerator || {
    version : 1.0,

    CheckInstall: function(calendar) {
        if(! state.hasOwnProperty('WeatherRandomGenerator') || state.WeatherRandomGenerator.version != WeatherRandomGenerator.version)
        {
            // Default Settings stored in the state.
            state.WeatherRandomGenerator = {
                version: AdvancedCalendar.version,
                climate: Climate.TEMPERATE,
                options: {
                    useMetricalSystem : true
                }
            }
        }
    },

    _randomNumber : function(min, max) {
        return Math.floor((Math.random() * (max-min)) + min);
    },

    _GetWeatherAsString : function(w) {
        return w.name + ' - ' + w.description;
    },

    _normalWeather : function(climate, season) {
        if (climate == Climate.COLD) {
            var w = {
                name : "cold",
                temperatureHigh : WeatherRandomGenerator._randomNumber(0, 40), 
                windSpeed : WeatherRandomGenerator._randomNumber(0, 10),
                description: "",
            };

            w["temperatureLow"] = w.temperatureHigh - WeatherRandomGenerator._randomNumber(10, 20);

            return w;

        } else if (climate == Climate.TEMPERATE) {
            if (season == Season.SPRING || season == Season.FALL) {
                var w = {
                    temperatureHigh : WeatherRandomGenerator._randomNumber(40, 70), 
                    windSpeed : WeatherRandomGenerator._randomNumber(0, 10), 
                    description: "",
                };

                w["temperatureLow"] = w.temperatureHigh - WeatherRandomGenerator._randomNumber(10, 20);

                if (w.temperatureHigh < 50) {
                    w["name"] = "cold";
                } else {
                    w["name"] = "warm";
                }


                return w;
            } else if (season == Season.SUMMER) {
                var w =  {
                    name : "warm",
                    temperatureHigh : WeatherRandomGenerator._randomNumber(60, 85), 
                    windSpeed : WeatherRandomGenerator._randomNumber(0, 10), 
                    description: "",
                };

                w["temperatureLow"] = w.temperatureHigh - WeatherRandomGenerator._randomNumber(10, 20);

                return w;

            } else {
                var w =  {
                    name : "cold",
                    temperatureHigh : WeatherRandomGenerator._randomNumber(0, 40), 
                    windSpeed : WeatherRandomGenerator._randomNumber(0, 10), 
                    description: "",
                };

                w["temperatureLow"] = w.temperatureHigh - WeatherRandomGenerator._randomNumber(10, 20);

                return w;
            }

        } else {
            var w =  {
                name : "hot",
                temperatureHigh : WeatherRandomGenerator._randomNumber(85, 110), 
                windSpeed : WeatherRandomGenerator._randomNumber(0, 10), 
                description: "",
            };

            w["temperatureLow"] = w.temperatureHigh - WeatherRandomGenerator._randomNumber(10, 20);

            return w;
        }
    },

     _abnormalWeather : function(climate, season) {
        var w = WeatherRandomGenerator._normalWeather(climate, season);

        if (climate == Climate.DESERT) {
            w.name = "windy",
            w.windSpeed = WeatherRandomGenerator._randomNumber(10, 30);
        } else {
            var d100 = WeatherRandomGenerator._randomNumber(1, 100);
            if ( (climate == Climate.COLD && d100 <= 30) || (climate == Climate.TEMPERATE && d100 <= 50) ) {
                w.name = "heatWave";
                w.temperatureHigh += 10;
                w.temperatureLow += 10;
            } else {
                w.name = "coldSnap";
                w.temperatureHigh -= 10;
                w.temperatureLow -= 10;
            }
        }
        return w;
    },

    _inclementWeather : function(climate, season) {
        var w = WeatherRandomGenerator._normalWeather(climate, season);

        if (climate == Climate.DESERT) {
            w.name = "windy";
            w.windSpeed = WeatherRandomGenerator._randomNumber(10, 30);
        } else if (climate == Climate.COLD) {
            w.name = 'snow';
            w.description = "" + WeatherRandomGenerator._randomNumber(2, 8) + " hours of snow.";
        } else {
            var d100 = WeatherRandomGenerator._randomNumber(1, 100);
            if (d100 <= 30) {
                w.name = "fog";
                w.description = "" + WeatherRandomGenerator._randomNumber(2, 8) + " hours of fog.";
            } else if (d100 <=90) {
                if (w.temperatureHigh <= 30) {
                    w.name = "snow";
                    w.description = "" + WeatherRandomGenerator._randomNumber(2, 8) + " hours of snow.";
                } else {
                    w.name = "rain";
                    w.description = "" + WeatherRandomGenerator._randomNumber(2, 8) + " hours of rain.";
                }
            } else {
                if (w.temperatureHigh <= 30) {
                    w.name = "sleet";
                    w.description = "" + WeatherRandomGenerator._randomNumber(2, 8) + " hours of sleet.";
                } else {
                    w.name = "hail";
                    w.description = "" + WeatherRandomGenerator._randomNumber(1, 20) + " of minutes of hail followed by "
                        + WeatherRandomGenerator._randomNumber(1,4) + " hours of rain.";
                }
            }
        }

        return w;
    },

     _storm : function(climate, season) {
         var w = WeatherRandomGenerator._normalWeather(climate, season);
         w.windSpeed = WeatherRandomGenerator._randomNumber(30, 50);

        if (climate == Climate.DESERT) {
            w.name = "duststorm";
            w.description = "" + WeatherRandomGenerator._randomNumber(1, 7) + " hours of duststom.";
        } else if (climate == Climate.COLD) {
            w.name = "snowstorm";
            w.description = "" + WeatherRandomGenerator._randomNumber(1, 7) + " hours of snowstorm.";
        } else {
            if (w.temperatureHigh <= 30) {
                w.name = "snowstorm";
                w.description = "" + WeatherRandomGenerator._randomNumber(1, 7) + " hours of snowstorm.";
            } else {
                var d10 = WeatherRandomGenerator._randomNumber(1, 20);

                if (d10 == 1) {
                    w.name = "tornado";
                    w.description = "" + WeatherRandomGenerator._randomNumber(1, 7) + " hours of thunderstorm with "
                        + "tornado (wind speed " + WeatherRandomGenerator.GetSpeed(WeatherRandomGenerator._randomNumber(175, 300))
                        + ") for " + WeatherRandomGenerator._randomNumber(10, 60) + " minutes.";
                } else {
                    w.name = "thunderstorm";
                    w.description = "" + WeatherRandomGenerator._randomNumber(1, 7) + " hours of thunderstorm.";

                }
            }
        }

        return w;
    },

    _powerfulStorm : function(climate, season) {

         var w = WeatherRandomGenerator._normalWeather(climate, season);

        if (climate == Climate.DESERT) {
            w.name = "downspor";
            w.windSpeed = WeatherRandomGenerator._randomNumber(30, 50);
            w.description = "" + WeatherRandomGenerator._randomNumber(2, 8) + " hours of downspor.";
        } else if (climate == Climate.COLD) {
            w.name = "blizzard";
            w.windSpeed = WeatherRandomGenerator._randomNumber(51, 74);
            w.description = "" + WeatherRandomGenerator._randomNumber(1, 3) + " days of blizzard.";
        } else {
            if (w.temperatureHigh <= 30) {
                w.name = "blizzard";
                w.windSpeed = WeatherRandomGenerator._randomNumber(51, 74);
                w.description = "" + WeatherRandomGenerator._randomNumber(1, 3) + " days of blizzard.";
            } else {
                var percent = WeatherRandomGenerator._randomNumber(1, 100);
                if (w.windSpeed < 75) {
                    w.name = "windstorm";
                    w.windSpeed = WeatherRandomGenerator._randomNumber(51, 74);
                    w.description = "" + WeatherRandomGenerator._randomNumber(1, 6) + " hours of windstorm.";
                } else {
                    w.name = "hurricane";
                    w.windSpeed = WeatherRandomGenerator._randomNumber(75, 174);
                    w.description = "" + WeatherRandomGenerator._randomNumber(1, 7) + " days of hurricane.";
                }
            }
        }

        return w;

    },

    GetSpeed : function (speed) {
        if (state.WeatherRandomGenerator.options.useMetricalSystem) {
            return Math.ceil(speed*1.6) + " km/h";
        } else {
            return speed + " mph";
        }
    },

    GetTemperature : function (temperature) {
        if (state.WeatherRandomGenerator.options.useMetricalSystem) {
             return Math.ceil((temperature-32)/1.8) + " °C";
        } else {
            return temperature + " °F";
        }
    },

    GenerateWeather : function(season) {
        var d100 = WeatherRandomGenerator._randomNumber(1, 100);
        var climate = state.WeatherRandomGenerator.climate;

        if (d100 <= 70) {
            //Normal Weather
            return WeatherRandomGenerator._normalWeather(climate, season);
        } else if (d100 <= 80) {
            //Abnormal Weather
            return WeatherRandomGenerator._abnormalWeather(climate, season);
        } else if (d100 <= 90) {
            //Inclement weather
            return WeatherRandomGenerator._inclementWeather(climate, season);
        } else if (d100 <= 99) {
            //Storm
            return WeatherRandomGenerator._storm(climate, season);
        } else {
            //Powerful Storm
            return WeatherRandomGenerator._powerfulStorm(climate, season);
        }

    },

    RegisterEventHandlers : function() {

    }
};

var AdvancedCalendar = AdvancedCalendar || {
        version: 1.0,
        lunarPhaseSize: 15,
        lunarPhasesImage: 'https://s3.amazonaws.com/files.d20.io/images/4277527/CJJWBbiHx3jHglPdccPx3A/max.png?1401939451',
        clearImage: 'https://s3.amazonaws.com/files.d20.io/images/4277467/iQYjFOsYC5JsuOPUCI9RGA/max.png?1401938659',
        seasonImage: 'https://s3.amazonaws.com/files.d20.io/images/15888656/ICJhf5iNk0wtC3GbK0Y6iQ/original.png?14544194835',
        seasonImageSize : 30,

        weatherImage : 'https://s3.amazonaws.com/files.d20.io/images/15894686/Zaby88WaMRSRO104_1eAug/original.png?14544320015',
        weatherImageSize : 30,
        weatherImageBorderHorizontal: 14.5,
        weatherImageVerticalBorder: 11,

        weathersIcons : {
                hot: {name: "hot", x: 0, y: 1},
                warm: {name: "warm", x: 1, y: 1},
                cold: {name: "cold", x: 2, y: 1},
                
                heatWave: {name: "heat wave", x: 3, y: 7},
                coldSnap: {name: "cold snap", x: 4, y: 7},

                calm: {name: "calm", x: 0, y: 5},
                windy: {name: "windy", x: 1, y: 5},
                windstorm: {name: "windstorm", x: 2, y: 5},
                hurricane: {name: "hurricane", x: 3, y: 5},
                tornado: {name: "tornado", x: 3, y: 5},

                fog: {name: "fog", x: 7, y: 4},
                rain: {name: "rain", x: 6, y: 1},
                hail: {name: "hail", x: 9, y: 1},
                downspor: {name: "downspor", x: 0, y: 2},
                thunderstorm: {name: "thunderstorm", x: 3, y: 2},

                snow: {name: "snow", x: 5, y: 4},
                sleet: {name: "sleet", x: 3, y: 3},
                snowstorm: {name: "snowstorm", x: 8, y: 4},
                blizzard: {name: "blizzard", x: 9, y: 4},
                
                duststorm: {name: "duststorm", x: 1, y: 4}
        },

        _Ordinal: function(num) {
            var ones=(num%10);
            var tens=((num%100)-ones);
            switch(ones)
            {
                case 1: return ((10 == tens) ? 'th' : 'st');
                case 2: return ((10 == tens) ? 'th' : 'nd');
                case 3: return ((10 == tens) ? 'th' : 'rd');
                default: return 'th';
            }
        },
        
        _GetOptionsFromTokens: function (tokens) {
            var options={};
            var switches=_.filter(tokens, function(tok){
                return null != tok.match(/^--/);
            });
            _.each(switches,function(s){
                switch(s)
                {
                    case '--lunar': options.showLunarPhases=true; break;
                    case '--nolunar': options.showLunarPhases=false; break;
                    
                }
            });
            
           return options;
        },

        CheckInstall: function(calendar) {
            /*if(! state.hasOwnProperty('AdvancedCalendar') || state.AdvancedCalendar.version != AdvancedCalendar.version)
            {*/
                log("Reseting calendar data...");
                // Default Settings stored in the state.
                state.AdvancedCalendar = {
                    version: AdvancedCalendar.version,
                    now: calendar.startingDate,
                    setting: calendar.setting,
                    holidays : calendar.holidays,
                    schedule: {},
                }
            /*}*/
        },

        SetWeather: function(date, weather) {
            var dateId = (AdvancedCalendar._GetTotalDaysForDate(date)).toString();

            if (! _.has(state.AdvancedCalendar.schedule, dateId)) {
                state.AdvancedCalendar.schedule[dateId] = {};
            }

            state.AdvancedCalendar.schedule[dateId]["weather"] = weather;
        },

        GetWeather: function(date) {
            var dateId = (AdvancedCalendar._GetTotalDaysForDate(date)).toString();
            var sched =  state.AdvancedCalendar.schedule;

            if (_.has(sched, dateId) && _.has(sched[dateId], "weather")) {
                return sched[dateId]["weather"];
            } else {
                var s = state.AdvancedCalendar.setting;
                var season = s.monthsOfTheYear[date.month -1].season;
                log(season);
                var w = WeatherRandomGenerator.GenerateWeather(season);
                sched[dateId] = {};
                sched[dateId]["weather"] = w;
                return w;
            }
        },

        ChangeWeather: function(date) {
            var dateId = (AdvancedCalendar._GetTotalDaysForDate(date)).toString();
            var sched =  state.AdvancedCalendar.schedule;

            if (_.has(sched, dateId) && _.has(sched[dateId], "weather")) {
                sched[dateId]["weather"] = WeatherRandomGenerator.GenerateWeather(season);
            } else {
                var s = state.AdvancedCalendar.setting;
                var season = s.monthsOfTheYear[date.month -1].season;
                log(season);
                var w = WeatherRandomGenerator.GenerateWeather(season);
                sched[dateId] = {};
                sched[dateId]["weather"] = w;
            }
        },

        AddLog: function(date, character, log, isNote) {
            var dateId = (AdvancedCalendar._GetTotalDaysForDate(date)).toString(); 

            if (! _.has(state.AdvancedCalendar.schedule, dateId)) {
                state.AdvancedCalendar.schedule[dateId] = {};
                state.AdvancedCalendar.schedule[dateId]["logs"] = [];
            } else if (! _.has(state.AdvancedCalendar.schedule[dateId], "logs")) {
                state.AdvancedCalendar.schedule[dateId]["logs"] = [];
            }

            state.AdvancedCalendar.schedule[dateId]["logs"].push(
                {character: character, log: log, isNote: isNote });
        },

        GetLogs: function(date) {
            var dateId = (AdvancedCalendar._GetTotalDaysForDate(date)).toString();
            var sched =  state.AdvancedCalendar.schedule;

            if (_.has(sched, dateId) && _.has(sched[dateId], "logs")) {
                return sched[dateId]["logs"];
            } else {
                return [];
            }
        },
        
        AdvanceDays: function(days){
            var n = state.AdvancedCalendar.now;
            var s = state.AdvancedCalendar.setting;

            log(n);

            var y = Math.floor(days/s.daysOfYear);
            days-=(y*s.daysOfYear);

            log(n.day + days);
            log(s.monthsOfTheYear[n.month -1].days);

            while (n.day + days > s.monthsOfTheYear[n.month -1].days) {
                days =  days - s.monthsOfTheYear[n.month -1].days + n.day;

                n.day = 0;
                n.month++;

                if (n.month > 12) {
                    n.month = 1;
                    n.year++;
                }

            }

            log("days: " + days);
            log("years: " + y);

            n.day += days; 
            n.year = n.year + y;
            
            state.AdvancedCalendar.now=n;
        },
        
        RemoveDays: function(days){
            var n = state.AdvancedCalendar.now;
            var s = state.AdvancedCalendar.setting;

            var y = Math.floor(days/s.daysOfYear);
            days-=(y*s.daysOfYear);

            while (days >= n.day) {
                days =  days - n.day;

                n.month--;
                if (n.month < 1) {
                    n.month = 12;
                    n.year--;
                }

                n.day = s.monthsOfTheYear[n.month -1].days;

            }

            n.day-=days; 
            n.year-=y;
            
            state.AdvancedCalendar.now=n;
        },

        _GetTotalDaysForDate: function(d) {
            var s = state.AdvancedCalendar.setting;
            var totalDays = d.year*s.daysOfYear;
            

            for (var i=0; i < d.month-1; i++) {
                totalDays += s.monthsOfTheYear[i].days;
            }
            totalDays += d.day;
            return totalDays;
        },

        _GetWeekDayForDate: function(d) {
            var s = state.AdvancedCalendar.setting;
            var totalDays = AdvancedCalendar._GetTotalDaysForDate(d);
            var weekday = totalDays % s.daysOfTheWeek.length;
            return ( weekday ? weekday : 7);
        },
        
        _GetPhaseForDate: function(d,options){
            var opt=_.defaults((options||{}),{
                showLunarPhases: true
            });
            return ((opt.showLunarPhases)?(
            '<img src="'
                +AdvancedCalendar.clearImage
                +'" style="margin-left: 4px; vertical-align: top;width: '+AdvancedCalendar.lunarPhaseSize+'px; height: '+AdvancedCalendar.lunarPhaseSize+'px; background:url('
                +AdvancedCalendar.lunarPhasesImage
                +') -'+(AdvancedCalendar._GetTotalDaysForDate(d) % 7)*AdvancedCalendar.lunarPhaseSize
                +'px -'+Math.floor( AdvancedCalendar._GetTotalDaysForDate(d) / 7)*AdvancedCalendar.lunarPhaseSize+'px;">'
                ):('')); 
        },

        _GetWeatherForDate: function(d, options) {
            var opt=_.defaults((options||{}),{
                showWeather: true
            });

            var w = AdvancedCalendar.GetWeather(d);


            return ((opt.showWeather)?(
                '<div style="color: white; font-family: Arial; text-align: left; vertical-align: middle;'
                    +'line-height: 30px">'
                    + AdvancedCalendar._GetWeatherImage(w)
                    + " " + AdvancedCalendar.weathersIcons[w.name].name
                +'</div>'
                +'<div style="color: white; font-family: Arial; text-align: left;"  >'
                    + "max: " + WeatherRandomGenerator.GetTemperature(w.temperatureHigh)
                    + " min: " + WeatherRandomGenerator.GetTemperature(w.temperatureLow) + '<br>'
                    + "wind speed: " + WeatherRandomGenerator.GetSpeed(w.windSpeed)
                    + "<br>" + w.description
                +'</div>'
                ):(''));

        },


        _GetWeatherImage: function(w) {
            var i = AdvancedCalendar.weathersIcons[w.name];

            return '<img src="'
                        +AdvancedCalendar.clearImage
                        +'" style="margin-left: 4px; vertical-align: top;width: '+AdvancedCalendar.weatherImageSize+'px; height: '+AdvancedCalendar.weatherImageSize+'px; background:url('
                        +AdvancedCalendar.weatherImage
                        +') -'+(AdvancedCalendar.weatherImageSize + AdvancedCalendar.weatherImageBorderHorizontal)*i.x
                        +'px -'+ (AdvancedCalendar.weatherImageSize + AdvancedCalendar.weatherImageVerticalBorder)*i.y+'px;">';
        },

         _GetSeasonForDate: function(d,options){
            s = state.AdvancedCalendar.setting;
            var opt=_.defaults((options||{}),{
                showSeason: true
            });

            return ((opt.showSeason)?(
                '<div style="color: white; font-family: Arial; text-align: center; vertical-align: middle;'
                    +'line-height: 30px">'
                    +AdvancedCalendar._GetSeasonImageForDate(d)
                    + " " + s.seasons[s.monthsOfTheYear[d.month-1].season]
                +'</div>'
                ):(''));
        },

        _GetSeasonImageForDate: function(d,options){
            s = state.AdvancedCalendar.setting;
            var opt=_.defaults((options||{}),{
                showSeason: true
            });

            return ((opt.showSeason)?(
            '<img src="'
                +AdvancedCalendar.clearImage
                +'" style="margin-left: 4px; vertical-align: top;width: '+AdvancedCalendar.seasonImageSize+'px; height: '+AdvancedCalendar.seasonImageSize+'px; background:url('
                +AdvancedCalendar.seasonImage
                +') -' + s.monthsOfTheYear[d.month-1]["season"] * AdvancedCalendar.seasonImageSize +'px;">'
                ):(''));
        },

        _GetHolidays: function(d, options) {
            var opt=_.defaults( (options||{}), {
                showHolidays: true
            });

            var s = state.AdvancedCalendar.holidays;
            var dayId = d.day + "/" + d.month;

            if (opt.showHolidays && _.has(s, dayId)) {
                var temp = "<div>";

                _.each(s[dayId], function(h) {
                    var t = '<span style="font-weight: bold;">' + h.name;

                    if (h.area != "") {
                        t += " (" + h.area + "): </span>"
                    } else {
                        t += ": :</span>"
                    }

                    if (h.description != "") {
                        t += h.description;
                    }
                    temp += "<br>" + t;
                });
                temp += "</div>";

                return temp;
            } else {
                return '';
            }
        },

        _GetLogs: function(d, options) {
            var opt=_.defaults( (options||{}), {
                showLogs: true
            });

            var logs = AdvancedCalendar.GetLogs(d);

            if (opt.showLogs) {
                var temp = "<div>";

                _.each(logs, function(h) {
                   if (!h.isNote) {
                        var t = '<span style="font-weight: bold;">' + h.character + ": ";

                        if (h.description != "") {
                            t += h.log;
                        }
                        temp += "<br>" + t;
                    }
                });
                temp += "</div>";

                return temp;
            } else {
                return '';
            }
        },
        
        _GetDayForDate: function(d,options){
            var opt=_.defaults((options||{}),{
            });
            
            var n = state.AdvancedCalendar.now;
            var img = AdvancedCalendar._GetPhaseForDate(d,opt)
            
            if(d.year == n.year && d.month == n.month && d.day == n.day) {
                return '<div style="white-space: nowrap;">'
                        +'<span style="font-weight: bold; color: #990000; font-size: 13px; background: white; border-radius: 2px; padding: 2px; box-shadow: 0 0 1px 1px red;">'+d.day
                        +'</span>'
                        +img
                    +'</div>';
            }
            else if( (d.year < n.year) 
            || ( (d.year <= n.year) && (d.month<n.month)) 
            || ( (d.year <= n.year) && (d.month<=n.month) && (d.day<n.day)) ) {
                return '<div style="white-space: nowrap;">'
                        +'<strike style="color:red; font-weight: bold;">'
                            +'<span style="font-weight:bold; color:#999999; font-size: 13px;">'
                                +d.day
                            +'</span>'
                        +img
                        +'</strike>'
                    +'</div>';
            }
            else {
                return '<div style="white-space: nowrap;">'
                        +'<span style="font-weight: bold; color: #000099; font-size: 13px;">'
                            +d.day
                        +'</span>'
                        +img
                    +'</div>';
            }
        },
        
        _GetMonthForDate: function(d,options){
            var opt=_.defaults((options||{}),{
                showYear: true,
                showMonthNumber: false
            });

            log(d);
            
            var s=state.AdvancedCalendar.setting;
            var daysHeader='';
            _.each(s.daysOfTheWeek,function(d){
                daysHeader+='<th><div style="width: 25px;margin: 0px auto;">'+d.substring(0,2)+'</div></th>';
            });
            
            var mday=_.clone(d);
            var weeks='';
            mday.day=1;

            var rows = 0;

            //First week can be trick
            var firstWeekDay = AdvancedCalendar._GetWeekDayForDate(mday);

            //placing empty spaces for month that doesn't start at first week day.
            weeks+='<tr>'
            for (i=1; i < firstWeekDay; i++) {
                weeks+='<td style="vertical-align: middle; text-align:right;">';
                weeks+= '<div style="white-space: nowrap;">'
                        +'<strike style="color:red; font-weight: bold;">'
                            +'<span style="font-weight:bold; color:#999999;">'
                                + ' '
                            +'</span>'
                        +'</strike>'
                    +'</div>';
                weeks+='</td>';
            }

            //Filling the rest of the week
            for (i = firstWeekDay; i <= s.daysOfTheWeek.length; i++) {
                weeks+='<td style="vertical-align: middle; text-align:center; padding:0px 5px;">';
                weeks+=AdvancedCalendar._GetDayForDate(mday,opt);
                weeks+='</td>';
                mday.day++;
            }
            weeks+='</tr>';
            var restingWeeks = Math.ceil( (s.monthsOfTheYear[mday.month -1].days -1) / s.daysOfTheWeek.length);

            var j = 0;
            for (i= 0; i < restingWeeks; i++) {
                weeks+='<tr>';
                for (j=0;  j < s.daysOfTheWeek.length && mday.day <= s.monthsOfTheYear[mday.month -1].days; j++)  {
                    weeks+='<td style="vertical-align: middle; text-align:center; padding:0px 5px;">';
                    weeks+=AdvancedCalendar._GetDayForDate(mday,opt);
                    weeks+='</td>';
                    mday.day++;
                }


                //filling the last week
                if (j < s.daysOfTheWeek.length) {
                    for (var k = j; k < s.daysOfTheWeek.length; k++) {
                        weeks+='<td style="vertical-align: middle; text-align:center; padding:0px 5px;">';
                        weeks+= '<div style="white-space: nowrap;">'
                            +'<strike style="color:red; font-weight: bold;">'
                                +'<span style="font-weight:bold; color:#999999;">'
                                    + ' '
                                +'</span>'
                            +'</strike>'
                        +'</div>';
                    weeks+='</td>';
                    }
                }
                weeks+='</tr>';
            }
            
            return '<table style="background-color:#ffffff; min-height:210px; border-radius:5px; box-shadow: 0 0 5px 1px rgba(0,0,0,0.5);">'
            +'<tr><th colspan="'+s.daysOfTheWeek.length+'">'
                +'<div style="float:left; padding: 0px 3px;">'+AdvancedCalendar._GetSeasonImageForDate(mday)+'</div>'
                +((opt.showMonthNumber)?('<div style="float:right; padding: 0px 3px;">'+d.month+'</div>'):(''))
                +'<div style="margin-left: auto; margin-right: auto;">' + s.monthsOfTheYear[d.month-1]["name"] 
                +((opt.showYear)?(' '+d.year):(''))
                +'</div>'
            +'</th></tr>'
            +'<tr style="border-bottom: 1px solid #aaaaaa;">'+daysHeader+'</tr>'
            +weeks
            +'</table>';
        },
        
        _GetYearForDate: function(d,options){
            var opt=_.defaults((options||{}),{
                showLunarPhases: false,
                showYear: false,
                showMonthNumber: true
            });
            var s=state.AdvancedCalendar.setting;
            var yday=_.clone(d);
            yday.day=1;
            yday.month=1;
            var months='';
            _.each(s.monthsOfTheYear, function(r){
                months+='<div style="float:left;padding: 2px 2px;">';
                months+=AdvancedCalendar._GetMonthForDate(yday,opt);
                months+='</div>';
                yday.month++;
            });
            
            return '<div style="background-color: darkseagreen; padding: 15px;">'
            +'<div style="margin: 3px 3px; font-weight: bold; font-size: 27px; color: white; text-shadow: 0px 0px 6px rgba( 0 , 0 , 0 , 0.9 ); border-bottom: 3px solid white; padding: 1px; margin-bottom: 11px; padding-bottom: 10px;">'+d.year+' '+s.yearPrefix+'</div>'+months +'<div style="clear:both;"></div></div>';
        },
        
        _GetDateAsString: function(date){
            var s=state.AdvancedCalendar.setting;
            return s.daysOfTheWeek[AdvancedCalendar._GetWeekDayForDate(date)-1] + " - " +date.day + "  "
                + s.monthsOfTheYear[date.month-1]["name"] + ', ' + date.year + ' ' +s.yearPrefix;
        },
        
        ShowDate: function(d,options) {
            var opt=_.defaults((options||{}),{
                showLunarPhases: true
            });
            sendChat('','/direct '
                +'<div style="color: moccasin; font-weight: bold; font-family: Arial; text-align: center; padding: 10px; '
                    +'background: #333; border-radius: 10px; box-shadow: 2px 2px 3px 1px rgba(0,0,0,0.5); '
                    +'border: 4px solid #fff; font-size: 16px; margin: 0 10px;">'
                    +AdvancedCalendar._GetDateAsString(d,opt)
                    +' '
                    +AdvancedCalendar._GetPhaseForDate(d,opt)
                    +AdvancedCalendar._GetSeasonForDate(d, opt)
                    +AdvancedCalendar._GetWeatherForDate(d, opt)
                    +AdvancedCalendar._GetHolidays(d, opt)
                    +AdvancedCalendar._GetLogs(d, opt)
                +'</div>'
                );
        },


        ShowDateAsWhisper: function(who, d, options) {
            sendChat('','/w GM ' 
                    +AdvancedCalendar._GetDateAsString(d,options)
                    +' '
                    +WeatherRandomGenerator._GetWeatherAsString(AdvancedCalendar.GetWeather(d), options)
            );
        },

        ShowFutureDate: function(d, options) {
            var opt=_.defaults((options||{}),{
                showLunarPhases: true
            });
            sendChat('','/direct '
                +'<div style="color: moccasin; font-weight: bold; font-family: Arial; text-align: center; padding: 10px; '
                    +'background: #333; border-radius: 10px; box-shadow: 2px 2px 3px 1px rgba(0,0,0,0.5); '
                    +'border: 4px solid #fff; font-size: 16px; margin: 0 10px;">'
                    +AdvancedCalendar._GetDateAsString(d,opt)
                    +' '
                    +AdvancedCalendar._GetPhaseForDate(d,opt)
                    +AdvancedCalendar._GetSeasonForDate(d, opt)
                    +AdvancedCalendar._GetHolidays(d, opt)
                    +AdvancedCalendar._GetLogs(d, opt)
                +'</div>'
                );
        },
        
        ShowMonth: function(d,options){
            var opt=_.defaults((options||{}),{
            });
            sendChat('','/direct '+AdvancedCalendar._GetMonthForDate(d,opt));
        },
        
        ShowYear: function(d,options){
            var opt=_.defaults((options||{}),{
                showYear: false
            });
            sendChat('','/direct '+AdvancedCalendar._GetYearForDate(d,opt));
        },

        GoToDate: function(day, month, year) {
            var s = state.AdvancedCalendar.setting;

            if (month < 1 || month > 12) {
                return;
            }

            if (day < 1 || day > s.monthsOfTheYear[state.AdvancedCalendar.now.month-1]) {
                return;
            }

            state.AdvancedCalendar.now = {
                day : day,
                month : month,
                year : year
            };
        },
        
        HandleInput: function(tokens, msg, isGM){ 
            var options = AdvancedCalendar._GetOptionsFromTokens(tokens);        
            tokens=_.filter(tokens, function(tok){
                return null == tok.match(/^--/);
            });
            var cmd = tokens[0] || 'month';
            switch (cmd)
            {
                /* Show the current month calendar */
                case 'month':
                    AdvancedCalendar.ShowMonth(state.AdvancedCalendar.now,options);
                    break;
                
                /* Show the current year calendar */
                case 'year':
                    AdvancedCalendar.ShowYear(state.AdvancedCalendar.now,options);
                    break;
                    
                /* Show todays info in detail */
                case 'today':
                    AdvancedCalendar.ShowDate(state.AdvancedCalendar.now,options);
                    break;
                    
                /* Advance the current date by a number of days (1 of argument is ommited) */
                case 'next':
                    if (!isGM) return;

                    var days=tokens[1] || 1;
                    AdvancedCalendar.AdvanceDays(days);
                    AdvancedCalendar.ShowDate(state.AdvancedCalendar.now,options);
                    break;
                
                /* Go back a number of days (1 of argument is ommited) in the current date */
                case 'prev':
                    if (!isGM) return;

                    var days=tokens[1] || 1;
                    AdvancedCalendar.RemoveDays(days);
                    AdvancedCalendar.ShowDate(state.AdvancedCalendar.now,options);
                    break;

                /* Go to a specific date using the parameters according to DD MM YYYY */
                case 'goto':
                    if (!isGM) return;

                    var day = parseInt(tokens[1]);
                    var month = parseInt(tokens[2] || state.AdvancedCalendar.now.month);
                    var year = parseInt(tokens[3] || state.AdvancedCalendar.now.year);
                    AdvancedCalendar.GoToDate(day, month, year);
                    AdvancedCalendar.ShowDate(state.AdvancedCalendar.now,options);
                    break;

                case 'see':
                    var day = parseInt(tokens[1]);
                    var month = parseInt(tokens[2] || state.AdvancedCalendar.now.month);
                    var year = parseInt(tokens[3] || state.AdvancedCalendar.now.year);
                    var seedate = {
                        day : day,
                        month : month,
                        year : year
                    };

                    AdvancedCalendar.ShowFutureDate(seedate, options);
                    break;
                case 'log':
                    var mindex = msg.content.indexOf('-m ');
                    if (mindex <0) return;

                    var logdata = msg.content.substring(mindex +3);
                    log(logdata);
                    AdvancedCalendar.AddLog(state.AdvancedCalendar.now, msg.who, logdata, false);
                    break;
                case 'note':
                    if (!isGM) return;

                    var mindex = msg.content.indexOf('-m ');
                    if (mindex <0) return;

                    var logdata = msg.content.substring(mindex +3);
                    log(logdata);
                    AdvancedCalendar.AddLog(state.AdvancedCalendar.now, msg.who, logdata, true);
                    break;
                    
                case 'weather':
                    if (!isGM) return;

                    AdvancedCalendar.ChangeWeather(state.AdvancedCalendar.now,options);
                    AdvancedCalendar.ShowDateAsWhisper(msg.who, state.AdvancedCalendar.now, options)
                    break;
            }
        },
        
        RegisterEventHandlers: function() {
            on("chat:message", function (msg) {
                // Exit if not an api command 
                if (msg.type != "api") return;
                
                // clean up message bits.
                msg.who = msg.who.replace(" (GM)", "");
                msg.content = msg.content.replace("(GM) ", "");
                var isGM = playerIsGM(msg.playerid);

                log(msg.content);

                var tokenized = msg.content.split(" ");
                var command = tokenized[0];

                switch(command)
                {
                    case "!cal":
                    case "!calendar":
                    {
                        AdvancedCalendar.HandleInput(_.rest(tokenized), msg, isGM);
                    }
                    break;
                    
                    case "!s":
                    {
                        sendChat('',
                            '/direct <div style="border: 2px solid red;"><b>state.AdvancedCalendar</b><br><pre>'
                            +JSON.stringify(state.AdvancedCalendar,undefined,"   ").replace(/\n/g,'<br>')
                            +"</pre></div>" );
                    }
                    break;

                    case "!t": 
                    {
                        AdvancedCalendar._GetWeekDayForDate(state.AdvancedCalendar.now);
                    }
                    break;
                }
            });
        } 
    };

on("ready",function(){
    log("WeatherRandomGenerator - Version " + WeatherRandomGenerator.version);
    WeatherRandomGenerator.CheckInstall(); 
    WeatherRandomGenerator.RegisterEventHandlers();


    log("AdvancedCalendar - Version " + AdvancedCalendar.version);
    log("Installing " + CALENDAR.name + "...");
    AdvancedCalendar.CheckInstall(CALENDAR); 
    AdvancedCalendar.RegisterEventHandlers();
});