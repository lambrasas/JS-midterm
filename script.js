/* ------------------------------ TASK 1 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus vidurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
    { id: '1', name: 'John Smith', age: 20 },
    { id: '2', name: 'Ann Smith', age: 24 },
    { id: '3', name: 'Tom Jones', age: 31 },
    { id: '4', name: 'Rose Peterson', age: 17 },
    { id: '5', name: 'Alex John', age: 25 },
    { id: '6', name: 'Ronald Jones', age: 63 },
    { id: '7', name: 'Elton Smith', age: 16 },
    { id: '8', name: 'Simon Peterson', age: 30 },
    { id: '9', name: 'Daniel Cane', age: 51 },
];

const getUserAverageAge=(users)=>{
    const totalAge=users.reduce((sum,user)=>sum+user.age,0)
    return totalAge/users.length
}

const getUsersNames=(users)=>{
    return users.map(user=>user.name)
}
console.log('Average Age:', getUserAverageAge(users));
console.log('Names:', getUsersNames(users));

/* ------------------------------ TASK 2 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
    make: 'audi',
    model: 'A6',
    year: 2005,
    color: 'white',
};
  
const showObjectKeys=(obj)=>{
    return Object.keys(obj)
}
console.log("Automobilio parametrai: " + showObjectKeys(audi));

/* ------------------------------ TASK 3 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(){
    this.sum=function(a,b){
        return a + "+" + b + " = " + (a + b);
    }
    this.sub=function(a,b){
        return a + "-" + b + " = " + (a - b);
    }
    this.mult=function(a,b){
        return a + "*" + b + " = " + (a * b);
    }
    this.div=function(a,b){
       if(b===0){
        throw new Error("Division by zero not allowed")

       }
       return a + "/" + b + " = " + (a / b);
    }
}
var calc = new Calculator();
console.log(calc.sum(1, 2));      
console.log(calc.sub(1, 2));
console.log(calc.mult(1, 2));
console.log(calc.div(1, 2));

/* ------------------------------ TASK 4 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie{
    constructor(title,director,budget){
        this.title=title;
        this.director=director
        this.budget=budget
    }
    wasExpensive(){
        return this.budget > 100000000;
    }
}
const avatar= new Movie("Avatar", "James Cameron",237000000)
const theBigSick = new Movie("Alright Movie", "Some Guy", 1000000);
console.log(theBigSick.wasExpensive()); 

console.log(avatar.wasExpensive())