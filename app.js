//Find the shortest element in the set of strings
function getShortest(s) {
	Math.min.apply(null, s.split(" ").map(function(w) {
        return w.length;
    }));
}

console.log(getShortest("One Two Three"));


//Get average number from the array
function find_average(array) {
  return eval(array.join('+')) / array.length;
}

console.log(find_average([1,2,3,4,5]));


//Detect if a certain string and the certain number are in the given string
function isLockNessMonster(s) {
  return /tree fiddy|three fifty|3.50/.test(s);  
} 

console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"));


//return only the odd numbers from the given array
function odds(values) {
    return values.filter(v => v % 2);
}

console.log(odds([1,2,3,4,5,6]));


//Take the array and remove all the elements that match the geese array elements
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(item => !geese.includes(item));
}

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));


//Given conditions:
//Number 1 and 2 cannot be selected at the same time
//Number 3 and 4 cannot be selected at the same time
//Number 5 and 6 must be selected at the same time or both cannot be selected
//Number 7 and 8 => at least one of them has to be selected if any
function isValid(formula){
  return (!(formula.includes(1) && formula.includes(2)) &&
          !(formula.includes(3) && formula.includes(4)) &&
          formula.includes(5) === formula.includes(6) &&
          (formula.includes(7) || formula.includes(8)));
}

console.log(isValid([7,1,2,3]);

            
//Take the given object and check the value of the property
//Return the one you are interested in
const cannonsReady = (gunners) => {
  return Object.values(gunners).some(m => m === 'nay') ? 'Shiver me timbers!' : 'Fire!';
}        

console.log(cannonsReady({Mike: 'aye', Dan: 'aye', Roger: 'nay', Bob: 'aye'}));           
            