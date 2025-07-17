// uploader.upload(Function: callback) return $.Deferred

// All the files and data added are uploaded to the defined url.
var uploader = jexjs.plugin('upload', 'upload_service');
uploader.upload(function (data, jqXHR) {

});

// To handle an upload failure (including JexError), the method is defined as below:
var uploader = jexjs.plugin('upload', 'upload_service');
uploader.upload({
    success: function (data, jqXHR) {
        // TODO uplaod success
    },
    error: function (data, textStatus, jqXHR) {
        // TODO uplaod fail (JexError, NetworkError, Handling all errors such as cancellation of user requests)
    }
});

// From v0.2.1 onwards, jQuery Deferred Object [https://api.jquery.com/category/deferred-object/] is supported. Instead of the callback method, failures may be handled as below:
var uploader = jexjs.plugin('upload', 'upload_service');
uploader.upload()
    .done(function (data, jqXHR) {
        // TODO uplaod success
    })
    .fail(function (data, textStatus, jqXHR) {
        /// TODO uplaod fail (JexError, NetworkError, Handling all errors such as cancellation of user requests)
    })
    .always(function () {
        // Logic that must be executed unconditionally regardless of TODO upload success/failure
    });