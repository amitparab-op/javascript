const accountId = 12455
let accountEmail = "parabamit052@gmail.com"
var accountPassword = "2345" 
accountCity = "Vapi"

let accountState;

// accountId = 5 // not allowed
console.log(accountId)

accountEmail = "amit75@gmail.com"
 accountPassword = "5545" 
accountCity = "Mumbai"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope

*/
