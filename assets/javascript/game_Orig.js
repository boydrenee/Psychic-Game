
var ans = Math.floor(Math.random() * 26);
var guess = prompt("You have 10 opportunities to guess the letter I am thinking of, what is it?");

var letterArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
                   "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
                   "u", "v", "w", "x", "y", "z"];
console.log(letterArr[0]);
console.log(letterArr[25]);
console.log(ans);
console.log(letterArr[ans]);
if ((guess > letterArr[ans]) || (guess < letterArr[ans]))
	alert("No. My letter is " + letterArr[ans]);
	else
	alert("Yes! My letter is " + letterArr[ans]);	
			