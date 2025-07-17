// uploader.removeData(string: key) Since v0.2.1 return boolean

// A file may be removed from the list of files added. To remove user data, refer to the table of remove below.

var uploader = jexjs.plugin('upload');
uploader.setData('key1', 'value1');

uploader.removeData('key1'); // return true
uploader.removeData('key2'); // return false