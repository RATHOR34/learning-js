let array =  new Array("chanchal","prashant","shalu","meena","arti")
// console.log(array);
// console.log(array.at(1));
// console.log(array[1])
console.log(array[array.length-2]) //giving last value of array

array.push("soniya","shanu"); // adds the value to the last of the existing array
console.log(array);

array.pop()         //remove the value to the last of the existing array
console.log(array);

array.pop()         //remove the value to the last of the existing array
console.log(array);

array.shift()          //to remove value from first index
console.log(array);

array.shift()          //to remove value from first index
console.log(array);

array.unshift("chayan","chirag");
console.log(array)

array.unshift("chinu","chiku");
console.log(array)

let teamMember = ["yash","kanha","rahul","Ritika","vcvcb","hjhjkk"];   //slice(initialize, before the index) //you can take only the values from the array// key point:   it will give you new value
let team = teamMember.slice(1,2)
  console.log(team);

  teamMember.splice(0,6,"hhhhh");
console.log(teamMember);
