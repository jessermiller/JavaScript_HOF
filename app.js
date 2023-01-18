console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

//function plus(num) {
    
  //  return function(plusNumber){
    //    return num + plusNumber;
        
    //}
//}

const plus = (num) => (plusNumber) => num + plusNumber;

const plus15 = plus(15);
console.log(plus15(10));


console.log("EXERCISE 2:\n==========\n");

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];


users.forEach(user => console.log(user.name));

console.log("EXERCISE 3:\n==========\n");

let newUser = users.map((user) => {
    return {name: user.name, score: user.score};
})
console.log(newUser);

console.log("EXERCISE 4:\n==========\n");

let resultArray = users.filter((user) => user.isActive == true);
console.log(resultArray);



console.log("EXERCISE 5:\n==========\n");

const scoreSort = users.sort((a,b)=>{
    if (a.score < b.score) return 1;
    else return -1;
} )

console.log(scoreSort);

console.log("EXERCISE 6:\n==========\n");


let sumScore = users.reduce((sum, user) => sum + user.score ,0);
const avgScore = (userCount) => sumScore / userCount;

console.log(sumScore, avgScore(4));