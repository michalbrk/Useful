//Find the shortest element in the set of strings
function getShortest(s) {
	return Math.min.apply(null, s.split(" ").map(w => w.length));
}

console.log(getShortest("One Two Three"));


//Get average number from the array
function find_average(array) {
  return eval(array.join('+')) / array.length;
}

console.log(find_average([1,2,3,4,5]));