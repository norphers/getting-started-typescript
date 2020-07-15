(function(){ 

    const avenger = {
        name: 'Steve',
        key: 'Captain America',
        power: 'Diamantium Shield'
    }

    const extract = ( {name, power,}: any ) => {

        //const {name, key, power} = avenger;

        console.log(name);
        console.log(power);

    }

    extract(avenger);

    const avengers:string[] = ['thor', 'ironman', 'spiderman']

    const [loki, , hulk] = avengers;

    console.log(loki);
    //console.log(antman);
    console.log(hulk);



})();
