
// (function(){})(); == función anónima autoinvocada o patrón módulo de javascript 

(function(){ 

    function greetings(character:string) 
    {
        console.table('Hello ' + character);
    }
    
    const startrek = {character: 'Spock'};
    
    greetings(startrek.character);
    
})();
