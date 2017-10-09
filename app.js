//Find the shortest element in the set of strings
function getShortest(s) {
	return Math.min.apply(null, s.split(" ").map(w => w.length));
}

console.log(getShortest("One Two Three"));