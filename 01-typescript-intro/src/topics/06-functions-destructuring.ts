export interface Product {
    description:string;
    price: number; 
}

const phone: Product = {
    description: 'Nokia All',
    price: 150
}

const tablet: Product = {
    description: 'iPad Air',
    price: 500
}
interface TaxCalculationsOptions{
    tax: number;
    products: Product[];
}

export function taxCalculation(options: TaxCalculationsOptions): number[] {
    let total = 0;
    options.products.forEach( product =>{
        total+= product.price;
    });
    return [total, total*options.tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const result = taxCalculation({
    products:shoppingCart,
    tax
});


//console.log(result[0]);
//console.log(result[1]);

//Destructured way


