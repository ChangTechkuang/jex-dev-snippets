// event.loadstart Type: XMLHttpRequest.loadstart [https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/loadstart_event]

// this event is called when the user initiates uploading and the file starts to be uploaded to the server.

var uploader = jexjs.plugin('upload', {
    event: {
        // The loadstart event fires when the upload begins
        // e.loaded: Number of bytes transferred so far
        // e.total: Total number of bytes to transfer
        loadstart: function (e) {
            // Log the initial upload progress (usually 0/total bytes)
            console.log('upload start! ' + e.loaded + ' / ' + e.total);
            
            // At this point you could:
            // - Show a loading indicator
            // - Disable form submission
            // - Start tracking upload progress
        }
    }
});