(()=>{

    const addition = (a:number, b:number): number => a+b;

    const name = ():string => 'Hello World!';

    const getSalary = ():Promise<string> => {
        return new Promise ((resolve, reject) => {
            resolve('John');
        });
    }

    getSalary().then(a => console.log(a.toUpperCase()));

})();
