// .execute( callback ) : void
// Step 1: Create an Ajax Request
// - Use jexjs.createAjaxUtil() to create a new Ajax utility instance
// - Pass the service name as parameter ("basic_service" in this example)

// Step 2: Simple Execution
// - Call execute() with a single callback function
// - The callback receives the response data
// - Only handles successful responses
var jexAjax = jexjs.createAjaxUtil("basic_service");
jexAjax.execute( function( dat ) {
    // Handle successful response here
    // dat contains the server response data
});

// Step 3: Advanced Execution
// - Call execute() with an options object
// - Specify separate success and error handlers
// - Provides more control over response handling
jexAjax.execute({
    success: function( dat ) {
        // Handle successful response
        // dat contains the server response data
    },
    error: function( dat ) {
        // Handle error response
        // dat contains error details
    }
});