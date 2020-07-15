(function(){ 

    //función estandard
    let myFunction = function(a:string){
        return a.toUpperCase();
    }

    // función de flecha
    const myFunctionArrow = (a:string) => a.toUpperCase();
   
    const additionN = function(a:number, b:number){
        return a+b;
    }

    const additionF = (a:number, b:number) => a+b;

    console.log(additionN(2,3));
    console.log(additionF(5,5));

    const hulk = {
        name: 'Hulk',
        smash(){

            setTimeout(() => { // las funciones de flecha no modifican el this.

                console.log(`${this.name} smash!!!`);

            }, 1000);

        }
    }

    hulk.smash();
})();
