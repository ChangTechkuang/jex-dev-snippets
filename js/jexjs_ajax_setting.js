// Step 1: Understanding Ajax Settings
// .setting( key , value ) : void - Sets a single setting
// .setting( obj ) : void - Sets multiple settings using an object
// Note: Individual settings take precedence over common settings defined via jexjs.ajaxSetup

// Step 2: Create Ajax Instance
var jexAjax = jexjs.createAjaxUtil("basic_service");

// Step 3: Set Individual Setting
// Set URL prefix for this specific Ajax instance
jexAjax.setting("prefix", "");

// Step 4: Set Multiple Settings
// Configure both async behavior and URL suffix
jexAjax.setting({
    "async": true,  // true = asynchronous (non-blocking)
                    // false = synchronous (blocking)
    "suffix": ""    // URL suffix for this instance
});

// Step 5: Retrieving Settings
// .setting(key) : Object - Gets the value of a specific setting
// This demonstrates how to:
// 1. Create an Ajax instance
// 2. Change its URL setting
// 3. Retrieve the modified setting

// Create new Ajax utility instance
var jexAjax = jexjs.createAjaxUtil("basic_service");

// Change the URL setting to a different service
jexAjax.setting("url", "basic_service2");

// Retrieve and display the modified URL setting
// This will output "basic_service2"
alert( jexAjax.setting("url") );
