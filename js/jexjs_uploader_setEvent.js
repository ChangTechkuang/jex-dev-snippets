// uploader.setEvent(string: name, Function: func) Since v0.2.1 return this

// Register an event on the upload object. Events that have already been registered will be replaced with those events.

var uploader = jexjs.plugin('upload', {
    event: {
        addFile: function () {
            // This function is not called.
        }
    }    
});

// 이벤트 등록
uploader.setEvent('addFile', function (files, addFiles) {
    // addFile event
});