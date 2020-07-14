(function(){ 

    // --> orden de los argumentos: obligatorios, opcionales, default 

    function activate ( who:string,
                        moment?:string,   // ? indica que el argumento es opcional 
                        object:string = 'batsignal'){ 
                        
        if(moment){
            
            console.log(`${who} activated the ${object} ${moment}.`);

        } else {

            console.log(`${who} activated the ${object}.`);
        }
    
    }

    activate('Gordon', 'late');

})();
