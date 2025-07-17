// event.removeFile

// This event is called when a file is added removed from the upload object. The list of all files except those removed is entered as the first factor, and the list of files removed is entered as the second factor. The list of all files and the list of files removed are entered in the Array form regardless of the Multiple setting.

// Step 1: Initialize the uploader plugin
var uploader = jexjs.plugin('upload', {
    event: {
        // Step 2: Define removeFile event handler
        // files: Array of remaining files in uploader after removal
        // removeFiles: Array of files that were just removed
        removeFile: function (files, removeFiles) {
            // Step 3: Log the number of files still in uploader
            console.log('all file size: ' + files.length);
            // Step 4: Log how many files were removed in this operation
            console.log('removed file size: ' + removeFiles.length);
        }
    }
});