function myMax(array) {
	var max = array[0];
	for (i=1; i < array.length; i++) {
		(array[i] > max) && (max = array[i])
	}
	return max
}

console.log(myMax([458, 15, 236, 49, 47, 874, 145, 258, 364, 762, 176, 483, 941, 135]))


function vowelCount(string) {
	var m = string.match(/[aeiouy]/gi)
	return m === null ? 0 : m.length;
}

console.log(vowelCount("Bonjour monde !"))


function reverse(string) {
	retrun string.split("").reverse().join("");
}

console.log(revers("Bonjour monde !"))