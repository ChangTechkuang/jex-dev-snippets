// Step 1: Register an Ajax Filter
// jexjs.ajaxFilter( filter, index ) : void
// This function registers a filter that runs after successful Ajax calls
// The filter runs before any success callbacks

// Step 2: Filter Function Definition
// The filter takes a data parameter containing the Ajax response
// Returns true to continue processing, false to trigger error handling
jexjs.ajaxFilter(function(dat) {
    // Step 3: Check for Jex Errors
    // Use jexjs.isJexError to detect if response contains error data
    if(jexjs.isJexError(dat)) {
        // Step 4: Extract Error Details
        // Get the error code and message from the response
        var errCode = jexjs.getJexErrorCode(dat);
        var errMsg = jexjs.getJexErrorMessage(dat);

        // Step 5: Display Error
        // Show error to user and stop further processing
        alert(errCode + " :: " + errMsg);
        return false;  // Triggers error callback
    }

    // Step 6: Success Path
    // If no errors found, allow processing to continue
    return true;
}, 0); // Index 0 ensures this runs first