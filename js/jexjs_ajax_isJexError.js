// Step 1: Function Description
// jexjs.isJexError(resultData) : boolean
// Checks if the Ajax response contains a Jex error
// Note: This only checks for application-level errors, not HTTP errors (404, 500, etc.)

// Step 2: Example Usage
var jexAjax = jexjs.createAjaxUtil("basic_service");
jexAjax.execute(function(dat) {
    // Step 3: Error Check
    if(jexjs.isJexError(dat)) {
        // Step 4: Error Structure
        // Response format when error exists:
        // {
        //     "COMMON_HEAD": {
        //         "ERROR": true,
        //         "ERROR_CODE": "ERR001", 
        //         "ERROR_MSG": "Error description"
        //     }
        // }
        
        // Step 5: Error Handling
        var errCode = jexjs.getJexErrorCode(dat);
        var errMsg = jexjs.getJexErrorMessage(dat);
        alert(errCode + " :: " + errMsg);
        return;
    }
    
    // Step 6: Success Path
    // Process successful response here
});