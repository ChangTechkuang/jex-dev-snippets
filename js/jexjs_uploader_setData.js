// uploader.setData(string: key, any: value) return void

// This function is used when there are additional data other than the file itself.

var uploader = jexjs.plugin('upload');
uploader.setData('FLD_1', 'field value1');
uploader.setData('FLD_2', 'field value2');

// Multiple data can be added at once.
uploader.setData({
    'FLD_3': 'field value3',
    'FLD_4': 'field value4'
});