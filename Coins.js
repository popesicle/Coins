// Write a function coins() that takes 
// an amount of US ¢, and returns the smallest 
// possible array of coins to make up that sum.
// 
// The coins in the returned array should be
// sorted from highest to lowest.
//
// The available coins are 25¢, 10¢, 5¢, 1¢

// Submit a link to a github repo via TIY-classroom

function coins(sum){

	var coinArray = [25, 10, 5, 1],
		coinMoney = []
// 		for(i = 0; i < coinArray.length; i ++){
// 			if(sum >= coinArray[i]){
// 				coinMoney.push(coinArray[i])
// 				sum = sum - coinArray[i]
// 			}
// 		}
// 		console.log(coinArray)
// 		console.log(coinMoney)
// 		return(coinMoney)

		coinArray.forEach(function(coin){
			while(sum >= coin){
					sum = sum - coin
					coinMoney.push(coin)
			}
		})
		return coinMoney
}

// tests
// ---
var result = coins(11)
// --> 10, 1
console.assert( result instanceof Array )
console.assert( result[0] === 10 && result[1] === 1 )

result = coins(39)
// --> 25, 10, 1, 1, 1, 1
console.assert( result[0] === 25 && result[1] === 10 && result[2] === 1 && result[3] === 1 && result[4] === 1 && result[5] === 1)







