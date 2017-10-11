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
