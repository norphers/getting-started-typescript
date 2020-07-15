(()=>{

    const withdrawCash = (quantity:number): Promise<number> => {

        let currentCash = 1000;

        return new Promise( (resolve, reject) => {

            if(quantity>currentCash){
                reject('Denied operation');
            } else {
                currentCash-=quantity;
                resolve(currentCash);
            }
            
        });

    }

    withdrawCash(500)
        .then(currentCash => console.log(`You've got ${currentCash} $ in your bank account.`))
        .catch(console.warn);

})();
