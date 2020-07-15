(()=>{

    class Avenger {
        /*
        name:string;
        team:string;
        realName:string;
        canFight:boolean;
        winsAverage:number;
        */

        constructor(public name:string, 
                    public team:string, 
                    public realName?:string,
                    public canFight:boolean=true, 
                    public winsAverage?:number){

        }
        
    }

    const antman:Avenger = new Avenger('Antman','Captain America');

    console.log(antman);





})();
