const accountId = 1234
let accountName = "Surjo"
var accountEmail = "surjosen400@gmail.com"
accountCity = "Dhanbad"

// accountId = 2345
accountName = "Sekhar"
accountEmail = "surjosen9905@gmail.com"
accountCity = "Bengaluru"
let accountState;

/* Never use var because it is old and it does not allow block scope and scoping of variables inside a block basically!!
Use let instead!!..Even don't leave any variable without declaration with let or const!! */

console.table([accountId, accountName, accountEmail, accountCity, accountState])