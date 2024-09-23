//Interfcae SuperHeros
interface SuperHero{
    name:String;
    age:number;
    address: Address,
    showAddress: () => String;
}

//Interface Address
interface Address{
    sreet:string;
    pais:string;
    city:string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        sreet: 'Main St',
        pais: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.pais;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};