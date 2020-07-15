"use strict";
(() => {
    class Avenger {
        /*
        name:string;
        team:string;
        realName:string;
        canFight:boolean;
        winsAverage:number;
        */
        constructor(name, team, realName, canFight = true, winsAverage) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            this.canFight = canFight;
            this.winsAverage = winsAverage;
        }
    }
    const antman = new Avenger('Antman', 'Captain America');
    console.log(antman);
})();
