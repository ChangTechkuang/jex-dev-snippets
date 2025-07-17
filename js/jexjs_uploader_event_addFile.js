// event.addFile

// This event is called when a file is added to the upload object. The list of files added is entered as the first factor, and the list of files selected/added by the user is entered as the second factor. The list of all files and the list of files added are entered in the Array form regardless of the Multiple setting.

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