// event.progress Type: XMLHttpRequest.progress [https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/progress_event]

// This event is to notify of the progress rate of uploading files to the server.

var uploader = jexjs.plugin('upload', {
    event: {
        // The progress event handler is called periodically during file upload
        // e.lengthComputable: Boolean indicating if the progress is measurable
        // e.loaded: Number of bytes transferred so far
        // e.total: Total number of bytes to transfer
        progress: function (e) {
            // Only show progress if we can compute it
            if (e.lengthComputable) {
                // Log current upload progress as bytes uploaded / total bytes
                console.log('uploading... ' + e.loaded + ' / ' + e.total);
                
                // Could also:
                // - Update a progress bar width: (e.loaded / e.total * 100) + '%'
                // - Show percentage complete
                // - Display transfer speed
            }
        }
    }
});