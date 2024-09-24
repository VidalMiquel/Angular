//<T> represents a generic type. So TS tanks to  the parameter value know which type the variable is. 
export function whatsMyType<T>(argument: T): T{
    return argument;
}

//The generic definition has priority over the passed argument.
const amIString = whatsMyType<string>('Hola Mundo');
console.log(amIString.split(' '));

