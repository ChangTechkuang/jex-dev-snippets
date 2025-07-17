// Step 1: Basic Ajax Configuration
// The Jex Ajax plugin performs asynchronous tasks and handles responses
// jexjs.ajaxSetup( options ) : void configures global Ajax settings

// Step 2: Default Configuration
// Set initial empty values and configure the loading indicator
jexjs.ajaxSetup({
    contextPath: "",          // Base URL path prefix
    prefix: "",               // Service name prefix 
    suffix: ".jct",          // File extension suffix
    indicator: jexjs.plugin("indicator", { modal: true }), // Loading indicator
});

// Step 3: URL Path Configuration
// Example showing how to set up URL components
// Final URL will be: /demo/WSVC/[service-name].testjct
jexjs.ajaxSetup({
    contextPath: "/demo",     // Root context path
    prefix: "WSVC",          // Service prefix
    suffix: ".testjct",      // Custom file extension
});

// Step 4: Global Parameters
// Configure default parameters sent with every request
// These values will be automatically included in all Ajax calls
jexjs.ajaxSetup({
    commonData: {
        IS_FIRST: "N",       // Flag for first-time requests
        IS_LOGIN: "Y",       // User login status
        USER_ID: "GUEST",    // Default user identifier
    },
});