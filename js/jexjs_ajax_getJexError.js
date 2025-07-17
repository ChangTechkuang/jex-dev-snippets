// Step 1: Function Descriptions
// jexjs.getJexErrorCode( resultData ) : string
// Returns the error code from a Jex error response
// jexjs.getJexErrorMessage( resultData ) : string  
// Returns the error message from a Jex error response

// Step 2: Example Error Response Structure
// {
//     "COMMON_HEAD": {
//         "ERROR": true,
//         "CODE": "JEXS0000000", 
//         "MESSAGE": "An unexpected error has occurred."
//     }
// }

// Step 3: Error Handling Example
// First check if response contains a Jex error
if( jexjs.isJexError( dat ) ) {
    // Step 4: Extract Error Details
    var errorCode = jexjs.getJexErrorCode( dat );   // Gets "JEXS0000000"
    var errorMsg = jexjs.getJexErrorMessage( dat );   // Gets "An unexpected error has occurred."
    
    // Step 5: These values can then be used for:
    // - Displaying error messages to users
    // - Logging errors
    // - Conditional error handling based on error codes
}