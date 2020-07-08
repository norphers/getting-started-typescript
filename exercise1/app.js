// (function(){})(); == función anónima autoinvocada o patrón módulo de javascript 
(function () {
    function greetings(character) {
        console.table('Hello ' + character);
    }
    var startrek = { character: 'Spock' };
    greetings(startrek.character);
})();
// >_ tsc app.ts --> compila el archivo app.ts para pasarlo a app.js
