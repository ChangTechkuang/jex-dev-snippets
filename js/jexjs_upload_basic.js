// Step 1: Initialize the upload plugin
// Create an uploader instance with configuration options
var uploader = jexjs.plugin('upload', {
    url: uploadUrl,          // Target URL for file uploads
    name: 'FILE_NM',        // Form field name for the file
    multiple: false,        // Allow only single file upload
    reset: true,           // Clear existing files when adding new ones
    event: {
        // Step 2: Configure event handlers
        addFile: function (files, addFiles) {
            // Called when files are added
            console.log('added file size: ' + addFiles.length);
        },
        removeFile: function (files, removeFiles) {
            // Called when files are removed
            console.log('removed file size: ' + removeFiles.length);
        },
        progress: function (e) {
            // Track upload progress
            console.log(e.loaded + ' / ' + e.total);
        }
    }
});

// Step 3: Add files for upload
// Method 1: Add with callback
uploader.add(function (files, addFiles) {
    // Handle files after they're added
});

// Method 2: Add without parameters (opens file dialog)
uploader.add();

// Method 3: Add a specific File object
var file = //[object File];
uploader.add(file);

// Method 4: Add a Blob object
uploader.add(new Blob(['Hello World'], { type: 'text/plain' }));

// Step 4: Initiate the upload
uploader.upload(function (data, jqXHR) {
    // Handle successful upload
    // data contains server response
    // jqXHR is the jQuery XHR object
});