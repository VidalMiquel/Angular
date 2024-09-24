export class Person{

/*
ANGULAR WAY
    public name?:string;
    private address?:String;

    constructor(name:string, address:string){
        this.name = name;
        this.address = address;
    }

*/
//TYPESCRIPT WAY
    constructor(public name:string, private address:string){}

}

//Class extension
export class Hero extends Person{
    constructor( public alterEgo:string, public age:number, public realName:string){
        super(realName, 'NewYork');
    }
}

const ironMan = new Hero('IronMan', 45, 'Tony');
console.log(ironMan);