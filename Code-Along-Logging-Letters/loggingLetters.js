// var sentence = "I love learning software development";

// for(var i = 0; i < sentence.length; i++) {
// 	if(sentence[i] !== " "){
// 		console.log(sentence[i]);
// 	}
// }

// var n = 1;
// var result = 15;

// if(n % 2 === 0)
// {
// 	result +=10;
// }
// else
// {
// 	result -=10;
// }
// console.log(result);

// var n = 5;
// var sum = 0;

// for(i = 0; i < n; i++){
// 	sum+=i;
// }
// console.log(sum);

function countingCharacters(stringToCount){
	console.log(stringToCount + " has " + stringToCount.length + " characters.");
}

function countingCharacters2(stringToCount, characterToFind){
	var characterCount = 0;
	for (var pos = 0; pos < stringToCount.length; pos++){
		if(stringToCount[pos] + stringToCount[pos+1] == characterToFind){
			characterCount++;
		}
	}


console.log("String to search in: " + stringToCount);
console.log("Character to find: " + characterToFind);
console.log("Number of times the character appears: " + characterCount);
}

function countingCharacters3(str, search){
	var count=0;
	var numChars = search.length;
	var lastIndex = str.length - numChars;

	for(var index = 0; index <= lastIndex; index++){
		var current = str.substring(index, index + numChars);
		if(current == search){
			count++;
		}
	}
return count;
}


function addTwoNumbers(firstNumber, secondNumber){
	return firstNumber + secondNumber;
}