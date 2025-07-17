// Step 1: Define the basic error handler
// jexjs.ajaxError( errorCallback ) : void
// The common error callback is designated. A call is issued when an Ajax error (404 not found) occurs 
// or the filter returns 'false.' If individual ajax defines any error callback, no call is issued on 
// the common error callback.

jexjs.ajaxError(function (dat) {
    alert("This is a common error.");
});

// Step 2: Set up error filtering
// Example showing how to handle both common and individual error processing
// This filter checks if the response contains a Jex error and returns false if it does
jexjs.ajaxFilter(function (dat) {
    return !jexjs.isJexError(dat);
});

// Step 3: Define comprehensive error handling
// This handler differentiates between Jex errors and other HTTP errors
jexjs.ajaxError(function (dat) {
    if (jexjs.isJexError(dat)) {
        // Handle Jex-specific errors
        var errCode = jexjs.getJexErrorCode(dat);
        var errMsg = jexjs.getJexErrorMessage(dat);
    } else {
        // Handle general HTTP errors
        alert("ERROR!! " + dat.status + " :: " + dat.statusText);
    }
});

// Step 4: Example of global error handling
// This Ajax call will use the common error handler defined above
var gAjax = jexjs.createAjaxUtil("basic_service");
gAjax.execute(function (dat) {
    // Success callback
});

// Step 5: Example of individual error handling
// This Ajax call defines its own success and error handlers
var pAjax = jexjs.createAjaxUtil("basic_service");
pAjax.execute({
    success: function (dat) {
        // Individual success handler
    },
    error: function (dat) {
        // Individual error handler
    }
});