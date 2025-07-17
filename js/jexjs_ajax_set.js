// Step 1: Setting Parameters Using Key-Value Pairs
// .set( key, value ) : void - Sets a single parameter
// .set( dataObj ) : void - Sets multiple parameters using an object
// Parameters can be set either individually or as an object

// Example of setting single parameter
var jexAjax = jexjs.createAjaxUtil("basic_service");
jexAjax.set("FLD_1", "FLD_VAL_1");  

// Example of setting multiple parameters using an object
jexAjax.set({  
    "FLD_2": "FLD_VAL_2",
    "FLD_3": "FLD_VAL_3"
});

// Step 2: Retrieving Parameters
// .get( key ) : Object
// Use .get() to retrieve previously set parameter values
// Returns the value associated with the given key

// Example of getting a single parameter
var jexAjax = jexjs.createAjaxUtil("basic_service");
jexAjax.set("FLD_ID", "FLD_VALUE");
jexAjax.get("FLD_ID"); // return "FLD_VALUE"

// Step 3: Complete Example
// Demonstrates setting multiple parameters and retrieving them
var jexAjax = jexjs.createAjaxUtil("basic_service");
jexAjax.set({
    "ID": "gil-dong",     // Set user ID
    "NAME": "Hong-Gil-Dong"  // Set user name
});
alert( jexAjax.get("ID") );   // "gil-dong" - Retrieves and displays the ID