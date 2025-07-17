// event.loadend Type: XMLHttpRequest.loadend [https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/loadend_event]

// his event is called when file uploading to the server is completed. Caution! This is not an event that is called when the response from the server is completed.

var uploader = jexjs.plugin('upload', {
    event: {
        // The loadend event fires when the upload operation completes
        // This happens after all data is sent but BEFORE the server response
        // e.lengthComputable: Boolean indicating if progress was measurable
        // e.loaded: Final number of bytes transferred
        // e.total: Total number of bytes that were transferred
        loadend: function (e) {
            if (e.lengthComputable) {
                // Log the final upload progress showing bytes transferred
                console.log('upload finished ' + e.loaded + ' / ' + e.total);
            }

            // Important: At this point the data transfer is complete
            // but we are still waiting for the server's response
            console.log('waiting for response...');

            // Common tasks to do here:
            // - Update UI to show upload complete
            // - Hide upload progress indicators
            // - Enable form elements that were disabled during upload
        }
    }
});