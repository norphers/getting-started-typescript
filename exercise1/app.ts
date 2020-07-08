// (function(){})(); == función anónima autoinvocada o patrón módulo de javascript 

(function(){ 

    function greetings(character:string) 
    {
        console.table('Hello ' + character);
    }
    
    const startrek = {character: 'Spock'};
    
    greetings(startrek.character);
    
})();

// TYPESCRIPT CONSOLE COMANDS

// >_ tsc --version
// >_ tsc app.ts --> compila el archivo app.ts para pasarlo a app.js
// >_ tsc --init --> genera el archivo tsconfig.json