(()=>{

    interface Xmen {
        name:string;
        age:number;
    }

    const sendToMission = (xmen:Xmen)=>{
        console.log(`Sending ${xmen.name} to the mission.`);
    };

    const returnToMission = (xmen:Xmen)=>{
        console.log(`${xmen.name} returning from the mission.`);
    };

    const wolverine:Xmen = {name:'Logan', age:50};

    sendToMission(wolverine);
    returnToMission(wolverine);




})();
