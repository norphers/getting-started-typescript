function printConsole(classConstructor: Function){
    console.log(classConstructor);
}

@printConsole
export class XMen{

    constructor (
        public name:string,
        public key:string
    ){}

    print(){
        console.log(`${this.name} - ${this.key}`);
    }

}