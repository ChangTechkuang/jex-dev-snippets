// Step 1: Create a new Ajax utility instance
// The jexjs.createAjaxUtil() initializes a new Ajax request with the specified endpoint
var jexAjax = jexjs.createAjaxUtil("call URL");

// Step 2: Set request parameters
// Use set() to add key-value pairs that will be sent with the request
jexAjax.set("KEY1", "VALUE1");

// Step 3: Execute the Ajax request
// The execute() method sends the request and handles the response via callback
jexAjax.execute(function(dat) {
    // Step 4: Error handling
    // Check if the response contains an error using jexjs.isJexError()
    if(jexjs.isJexError(dat)) {
        // If error exists, extract error details from COMMON_HEAD.ERROR
        var errCode = jexjs.getJexErrorCode(dat);    // Get error code
        var errMsg = jexjs.getJexErrorMessage(dat);  // Get error message
        
        // Display error to user
        alert(errCode + " : " + errMsg);
        return;
    }

    // Step 5: Success handling
    // If no errors, proceed with success logic
    alert("ajax call success");
});