var ans = Math.floor(Math.random() * 26);
					var guess;
					var cnt;
					var ans = Math.floor(Math.random() * 26);
					var guess;
					var cnt;
					var guessCnt = 0;
					var remainCnt = 5;
					var winCnt = 0;
					var lossCnt = 0;
					function myFunction() {
    					document.getElementById("wins").innerHTML = winCnt;
    					document.getElementById("losses").innerHTML = lossCnt;
    				};
					//guess = prompt("I am thinking of a letter, what is it?");
					var letterArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
					                   "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
					                   "u", "v", "w", "x", "y", "z"];
					cnt = 0;
					while  (cnt < 4) {
						if (cnt === 0) {
							guess = prompt("I am thinking of a letter, you have 5 chances to guess. What is the letter?");
						}
						console.log(letterArr[0]);
						console.log(letterArr[25]);
						console.log(ans);
						console.log(letterArr[ans]);
						
						if ((guess > letterArr[ans]) || (guess < letterArr[ans])) {
							guessCnt++;
							remainCnt--;
							alert("The letter is not " + guess + "; Remaining guesses: " + remainCnt);
						}
							else {
							guessCnt++;
							alert("Yes! My letter is " + letterArr[ans] + ". It only took you " + guessCnt + " guesses!");
							winCnt++;
							guessCnt = 0;
							remainCnt = 5;
							break;}
						cnt++;
						if (cnt < 5)
							guess = prompt("Please try again.");
						console.log(cnt);
					}	
					if ((cnt => 4) && ((guess > letterArr[ans]) || (guess < letterArr[ans]))) {
						    guessCnt++;
							alert("Sorry. My letter is " + letterArr[ans] + " Total Guesses: " + guessCnt);
							lossCnt++;
							guessCnt = 0;
							remainCnt = 5;
						}						

			
					

