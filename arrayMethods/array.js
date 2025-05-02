let array =  new Array("chanchal","prashant","shalu","meena","arti")
console.log(array);
console.log(array.at(1));
console.log(array[0]);  //giving first value in our index
console.log(array.length) //it's return the length of array
console.log(array[array.length-1]) //giving last value of array

array.push("soniya","shanu"); // adds the value to the last of the existing array
console.log(array);

array.pop()         //remove the value to the last of the existing array
console.log(array);
 
array.pop()
console.log(array);

array.shift()          //to remove value from first index
console.log(array);

array.unshift("chayan","chirag");

let teamMember = ["yash","kanha","rahul","Ritika","vcvcb","hjhjkk"];   //slice(initialize, before the index) //you can take only the values from the array// key point:   it will give you new value
let team = teamMember.slice(1,5)
  console.log(team);

//splice       splice(startingIndex, how many value you want to remove,   adding new values)
// key point:  it will change your original array 
teamMember.splice(2,3,"hhhhh");
console.log(teamMember);
