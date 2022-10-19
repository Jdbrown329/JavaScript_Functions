console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds (count)
{
    for ( let i =1; i <=count; i++)
    {
      if (i %2 != 0) 
      {
        console.log(i);
      }
    }

}
printOdds(10);
printOdds(100);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge (_name, age)
{
let oldEnough = "congrats ${name}! You can drive!";
let cantDrive = "sorry ${name}, you cannot drive until you are 16 in ${16-age} year(s)";

if (age<16) {
    console.log(cantDrive);
}
else ( age >= 16)
{
    console.log(oldEnough);
}
}

checkAge("Layla", 31);
checkAge ("julian", 12);


//Excercise 3 
console.log("EXERCISE 3:\n==========\n");

function checkQuadrant(x, y) 
{
if (x >0 && y > 0){ return 1;}
else if (x<0 && y>0){return 2;}
else if (x<0 && y<0){return 3;}
else if ( x> 0 && y<0){return 4;}
else if (y ==0 && y !=0){return "x Axis";}
else if ( x != 0 && y==0) { return "y Axis";}
else {return "origin";}
}

//Excercise 4
console.log("EXERCISE 4:\n==========\n");

function isValidTriangle (a,b,c) { 
    let isValid = isValidTriangle(a,b,c);
if (isValid){
     if (a ==b && b==c) {
        return 'Equilateral';
    }
else if (a==b || b== c || a==c){
    "Isosceles";
}
else if (a != b && b!=c && a!=c){ 
    return 'scalene';
}
else { return 'not a valid triangle';
}
}
}

//Excercise 5 
console.log("EXERCISE 5:\n==========\n");
