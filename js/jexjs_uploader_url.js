// Instance methods

// uploader.url(string: url) return void

// Change the upload URL of the upload object.

// Create an uploader instance with basic configuration
var uploader = jexjs.plugin('upload', 'upload_service');

// The url() method allows dynamically updating the target URL
// This is useful when the upload endpoint needs to change based on conditions
uploader.url('changed_upload_service');