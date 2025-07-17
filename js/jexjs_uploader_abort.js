// uploader.abort(string: text) Since v0.2.1 return this

// The upload request is canceled. Please note that any file can be canceled before the server sends a response even after the file is uploaded to the server.
var uploader = jexjs.plugin('upload', 'upload_service');
uploader.upload()
    .done(function (data, jqXHR) {
        // TODO
    })
    .fail(function (data, textStatus, jqXHR) {
        if (textStatus === 'abort') {
            // Cancel user request
        }
        if (textStatus === 'abort:cancel') {
            // Cancel user request (input text argument)
        }
    });

uploader.abort();  // uplaod cancel
uploader.abort('cancel');  // If you enter a text value, you can get data from the textStatus value when an error occurs.