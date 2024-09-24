export { };

//Standard function;
// Can be called before its definition in the code. (hoisting)
//They have theri own 'this'
function addNumbers(a:number, b: number): number {
    return a + b;
};




//Landa function. Used for callbacks.
//You must define it before calling it.
//`this` is sinherit
const addNumbersArrow = (a: number, b: number):string => {
    return `${a+b}`;
}

//Functions with mandatory variables, optional varibales and with default value. (We should specify in this order).
function multiply (firstNumber: number, secondNumber?:number, base:number = 2){
return firstNumber*base;
};

interface Character {
    name:string;
    hp:number;
    showHp: () => void;

}

const healCharacter = (character: Character, amount:number) => {
    if (character.hp + amount <= 100){
        character.hp += amount;
    }else{
        console.log('Not possible to add');
    }
    
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp(){
        console.log(`LivePoints ${this.hp}`);
    }

};

/*
const result: number = addNumbers(9, 4);
const result2:string = addNumbersArrow(1,2);
const multiplyResult = multiply(5);
console.log({ result , result2, multiplyResult });
*/

healCharacter(strider, 20);
strider.showHp();