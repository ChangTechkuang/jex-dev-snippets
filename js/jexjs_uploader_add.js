// uploader.add(Blob: blobData / File: fileData / Function: callback) return this

// A file may be added through Blob & File data or the ‘Select Files’ window. From v0.2.1 onwards, File & Blob data simultaneous uploading is possible.

// You can display the ‘Select Files’ window by using the callback function and then add files.
var uploader = jexjs.plugin('upload', 'upload_service');
uploader.add(function (files, addFiles) {
    // files: List of all files added
    // addFiles: List of files selected by the user
});

// Additionally, if you want to name the file to be uploaded in Blob data, please add the name attribute. This function to name the file to be uploaded is available from v0.2.1 onwards.
var blobData = new Blob(['Hello World!'], { type: 'text/plain' });
blobData.name = 'hello.txt';

var uploader = jexjs.plugin('upload', 'upload_service', { type: 'data' });
uploader.add(blobData);  // Attach data information such as blob.