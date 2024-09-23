export{} ; //Transform a file into a module

const skill: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: String;
    hp: number;
    skills: String[];
    hometown?: String; //Optional attribut.
};

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
};

strider.hometown = 'Rivendell';

console.table(strider);