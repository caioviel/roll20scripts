#Advanced Calendar

This script allows the use of non-homogeneous calendars in Roll20. With this script, months with different number of days, like golarions's calendar or our own gregorian's calendar, are possible. However I haven't bothered myself with leap years.

It has support for weather information. I've used the weather generation rules from Pathfinder, which considers the season (Winter, Summer, Fall and Spring) and climate (cold, desert, temperate). When a new day is reached via **next**, **prev** or **goto** commands (see below) a random weather is generated to that day. If you are not happy with the weather generated, you can use the command **weather** to generate another weather for that day. In future I will add a more deterministic way to setting weather.

The calendar supports holydays. When a day is a holyday, the information about that holyday is showed. However I just entered holyday information for the Golarion Calendar.

The calendar allows players and GM to add notes and logs about the current date.

The calendar engine and the calendars information are separated. Each calendar is a “plugin” that can be founded at the plugin subdirectory. These plugins are fair simple, so I believe anyone with some programing skills can easily create a calendar plugin.

##Installing

To install the Advanced Calendar Script you need to add two different js files to our **Roll20 Campaing**. The first one is the *AdvancedCalendar.js* which is located at the root directory. The other is one of the different plugins available in the plugin subdirectory.

Currently there are 5 plugins calendars supported:

- **ArtonPlugin.js**: compatible with Tormenta RPG, a Brazilian RPG setting.
- **ForgottenPlugin.js**: compatible with Forgotten Realms setting.
- **GolarionPlugin.js**: compatible the Pathfinder Official setting.
- **GregorianPlugin.js**: our own Gregorian’s calendar.
- **GregorianPluginPT.js**: our own Gregorian’s calendar, but in Portuguese.

Chose one of the plugins and add it to your **Roll20 Campaing**

##Using

The Advanced Calendar script currently supports the following commands:


```
!cal month
```

Shows a calendar for the current month. Can be used both by GMs and players.


```
!cal year
```

Shows a calendar for the current year. Can be used both by GMs and players.

                
```
!cal today
```

Shows the current day information in detail, including notes, logs and weather. Can be used both by GMs and players.

```
!cal next [<DAYS>]
```

Advances the current date by a number of days specified by the integer argument <DAYS>. If the argument DAYS is omitted, it advances 1 day. Can be used only by GMs.   


```
!cal prev [<DAYS>]
```

Rewinds the current date by a number of days specified by the integer argument <DAYS>. If the argument DAYS is omitted, it rewinds 1 day. Can be used only by GMs.   
                    
```
!cal goto <DAY> [<MONTH> [<YEAR>]]
```

Moves the current date to the date passed as argument. The arguments <MONTH> and <YEAR> are optional, if they are omitted, it uses the current date month and year instead. Can be used only by GMs.            


```
!cal see <DAY> [<MONTH> [<YEAR>]]
```

It is similar to **today**, but can be used to see detail information of any date passed as argument. The argument <MONTH> and <YEAR> are optional, if they are omitted, it uses the current date month and year instead. Can be used both by GMs and players. 


```
!cal log -m <MESSAGE>
```

This command allows adding information to the current day. The value of the <MESSAGE> argument, as well as the **Roll20** user who used the command are stored. The stored values are displayed via **today** or **see** commands.

```
!cal note -m <MESSAGE>
```

This command is similar to the **log**, but can be used only by GM and the values stored are visible only to GMs.


```
!cal weather
```

This command can be used only by GM and it generates a random weather for the current day. Someone could call this command several times until it generates the desired weather for that date.
