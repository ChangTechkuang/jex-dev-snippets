// uploader.remove(string[]: fileNames, Function: callback) return this

// A file may be removed from the list of files added. To remove user data, refer to the table of removeData below.

var removeNames = ['file1', 'file2'];
var uploader = jexjs.plugin('upload', 'upload_service');
uploader.add(/*...*/);

uploader.remove(removeNames, function (files, removeFiles, obj) {
    // Files: List of all the files added (except those in the Remove list)
    // removeFiles: The list of files removed
    // obj: An object that contains additional information as in the case of removedCount
});