// uploader.reset() Since v0.2.1 return this

// All of the files and user data added to the upload object are initialized.
// Basically, data after file uploading are not initialized. Please keep this in mind.

var uploader = jexjs.plugin('upload', 'upload_service');
uploader.add(new Blob([], { type: 'text/plain' }));
uploader.setData('key1', 'value1');

// All of the files and data added previously are initialized.
uploader.reset();