// uploader.canAbort() Since v0.2.1 return boolean

// Whether it is possible to cancel the upload request is returned. False is returned if the upload has already been completed or not been initiated yet.

// Step 1: Initialize the uploader plugin
var uploader = jexjs.plugin('upload', {
    // Step 2: Set multiple file upload to false to only allow single file
    multiple: false,
    
    // Step 3: Define event handlers
    event: {
        // Step 4: Handle file addition event
        // files: Array of all files currently in uploader
        // addFiles: Array of newly added files in this operation
        addFile: function (files, addFiles) {
            // Step 5: Log total number of files
            console.log('all file size: ' + files.length);
            // Step 6: Log number of newly added files
            console.log('added file size: ' + addFiles.length);
        }
    }
});