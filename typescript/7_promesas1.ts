// promesas: sirven para ejecutar un código sin bloquear el código de la aplicación.

(()=>{ 

    console.log('start');

    // no existen promesas en ES5, Angular instala librerias para trabajar con ES5 y promesas
    const prom1 = new Promise((resolve, reject)=>{

        setTimeout(()=>{
            resolve('Timeout is finished.');
        }, 1000);
        
    });

    prom1
        .then( message => console.log(message))
        .catch( err => console.warn(err));

    console.log('end');

})();
