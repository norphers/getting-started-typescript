// (function(){})(); == función anónima autoinvocada o patrón módulo de javascript 

(function(){ 

    function greetings(character:string)
    {
        console.table('Hello, ' + character);
    }
    
    const startrek = {character: 'Spock'};
    
    greetings(startrek.character);

})();

(function(){

    let message = 'message';
    const number = 1234;
    const URL_SERVICES = 'url'; // "mayuscName" convención para constantes de datos que no deben cambiarse en la app

    if(true){
        let message = 'true message';
    }

    console.log(message);

})();

// TYPESCRIPT CONSOLE COMANDS

// >_ tsc --version
// >_ tsc app.ts --> compila el archivo app.ts para pasarlo a app.js
// >_ tsc --init --> genera el archivo tsconfig.json
// >_ tsc -w or tsc --watch --> pone a typescript en modo observador y compila los cambios que realices. Ya no es necesario usar el "tsc app.ts".