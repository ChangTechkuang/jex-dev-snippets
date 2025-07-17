// Global methods
// Step 1: Configure Global Upload Settings
// jexjs.fileUploadSetup(object: settings)
// This function sets default configuration for all upload plugin instances

// Step 2: Settings Object Structure
// - prefix: String - URL prefix added to all upload requests
// - indicator: Object - Loading indicator configuration
//   - Uses indicator plugin with modal display

// Step 3: Apply Global Configuration
jexjs.fileUploadSetup({
    // Add 'filedata/' prefix to all upload URLs
    prefix: 'filedata/',
    
    // Configure loading indicator with modal overlay
    // This will show during all file uploads
    indicator: jexjs.plugin('indicator', { modal: true })
});