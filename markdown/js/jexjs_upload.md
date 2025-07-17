# Upload Plugin Documentation

## Overview

The Upload plugin enables uploading of File and Blob data. Starting from jexjs v0.2.1, it supports:
- Simultaneous File & Blob uploads 
- jQuery Deferred Object [ https://api.jquery.com/category/deferred-object/ ] integration

## Configuration Options

The following settings can be configured when initializing the Upload plugin:

| Option        | Type              | Default   | Description                                                                   |
|---------------|-------------------|-----------|-------------------------------------------------------------------------------|
| url           | string            | -         | Target upload URL. Can be modified via `uploader.url(string)`                 |
| contextPath   | string            | -         | Application context path prefix                                               |
| prefix        | string            | -         | URL prefix for requests                                                       |
| suffix        | string            | .jct      | URL suffix for requests                                                       |
| async         | boolean           | true      | Controls asynchronous/synchronous upload                                      |
| name          | string            | "FILE_NM" | Input field name used for file uploads                                        |
| multiple      | boolean           | false     | Enables multiple file upload support. Files can be added via `uploader.add()` |
| reset         | boolean           | true      | When true, clears existing files when new ones are added via `uploader.add()` |
| indicator     | boolean/Object    | -         | Loading indicator configuration                                               |

## Event Handlers (v0.2.1+)

| Event         | Type              | Description                                                                               |
|---------------|-------------------|-------------------------------------------------------------------------------------------|
| addFile       | Function          | Called when files are added                                                               |
| removeFile    | Function          | Called when files are removed                                                             |
| loadstart     | ProgressEvent     | Called when upload begins                                                                 |
| progress      | ProgressEvent     | Called during upload to track progress                                                    |
| loadend       | ProgressEvent     | Called when upload completes                                                              |

## Deprecated Options

The following options are deprecated as of v0.2.1:

- `type`: No longer needed due to unified File/Blob upload support
- `draggable`: Drag-and-drop functionality removed
- `element/drop`: Related to removed drag-and-drop support

### How to use it in a web service Action
# Changes to the input field type
In order to process uploaded files in Jex system, the field type should be changed to FILE as below. The Input field should be set with the name value designated by the upload plugin.

## An example of using the plugin
* Reminder This example is for better understanding of developers, and the content may have to be adjusted according to each actual task.

1. Attaching a single file to an object to be uploaded

> A file is attached to an object to be uploaded.

```
<div class="row">
    <div class="col-sm-6">
        <div class="input-group">
            <input type="text" class="form-control" id="EX_SINGLE_UPLOAD" readonly/>
            <span class="input-group-btn">
                <button class="btn btn-primary" id="singleUpload">File Upload</button>
            </span>
        </div>
    </div>
</div>

<script type="text/javascript">
$('#singleUpload').on('click', function () {
    var jexFileUploader = jexjs.plugin('upload', 'upload_service', { multiple: false });
    jexFileUploader.add(function (file, addFile, obj) {
        $('#EX_SINGLE_UPLOAD').val(file.name);
    });
});
</script>
```

2. Attaching multiple files to an object to be uploaded

> Set the Multiple option of the upload plugin to ‘true’ so that multiple files can be attached at once.

```
<div class="row">
    <div class="col-sm-6">
        <button class="btn btn-primary" id="multiUpload">Multiple-file uploading</button>
        <textarea class="form-control" rows="5" id="EX_MULTI_UPLOAD" readonly></textarea>
    </div>
</div>

<script type="text/javascript">
$('#multiUpload').on('click', function () {
    var jexFileUploader = jexjs.plugin('upload', 'upload_service', { multiple: true });
    jexFileUploader.add(function (files, addFiles, obj) {
        $('#EX_MULTI_UPLOAD').val('');
        var fileString = '';

        for (var i = 0; i < files.length; i++) {
            fileString += files[i].name + '\n';
        }

        $('#EX_MULTI_UPLOAD').val(fileString);
    });
});
</script>
```

3. File uploading

> An example where files are added and uploaded immediately

```
<div class="row">
    <div class="col-sm-6">
        <div class="input-group">
            <input type="text" class="form-control" id="EX_UPLOAD" readonly/>
            <span class="input-group-btn">
                <button class="btn btn-primary" id="singleFileUpload">File uploading</button>
            </span>
        </div>
    </div>
</div>

<script type="text/javascript">
$('#singleFileUpload').on('click', function () {
    var jexFileUploader = jexjs.plugin('upload', 'upload_service');
    jexFileUploader.add(function (file, addFile, obj) {
        $('#EX_UPLOAD').val(file.name);

        // // Files are uploaded right after being added.
        jexFileUploader.upload({
            success: function (data, jqXHR) {
                alert('Upload Success! ' + JSON.stringify(data));
            },
            error: function (data, textStatus, jqXHR) {
                alert('Upload Error! ' + JSON.stringify(data));
            }
        });
    });
});
</script>
```

4. Uploading other field information

> An example where other field information is also uploaded

```
<div class="row">
    <div class="col-sm-6">
        <div class="input-group">
            <input type="text" class="form-control" id="EX_EXT_UPLOAD" readonly/>
            <span class="input-group-btn">
                <button class="btn btn-primary" id="singleFileUploadWithExtend">File uploading</button>
            </span>
        </div>
    </div>
</div>

<script type="text/javascript">
$('#singleFileUploadWithExtend').on('click', function () {
    var jexFileUploader = jexjs.plugin('upload', 'upload_service');
    jexFileUploader.setData('FLD_1', 'input value1');
    jexFileUploader.setData({
        'FLD_2': 'input value2',
        'FLD_3': 'input value3'
    });

    jexFileUploader.add(function (file, addFile, obj) {
        $("#EX_EXT_UPLOAD").val(file.name);

        // Files are uploaded right after being added.
        jexFileUploader.upload({
            success: function (data, jqXHR) {
                alert('Upload Success! ' + JSON.stringify(data));
            },
            error: function (data, textStatus, jqXHR) {
                alert('Upload Error! ' + JSON.stringify(data));
            }
        });
    });
});
</script>
```

5. How to upload data with no need for the ‘Select Files’ window.

> File data or Blob data may be added and uploaded with no need for the ‘Select Files’ window. This can be used even when there is no screen in such cases as C# and phantomjs.

```
<button class="btn btn-primary" id="uploadWithoutSelection">File uploading</button>
<script type="text/javascript">
$('#uploadWithoutSelection').on('click', function () {
    var jexFileUploader = jexjs.plugin('upload', 'upload_service');

    // Random blob data generation성
    var blobData = new Blob(['hello world!'], { type: 'text/plain' });
    blobData.name = 'hello.txt';

    // Add data
    jexFileUploader.add(blobData);

    jexFileUploader.upload({
        success: function (data, jqXHR) {
            alert('Upload Success! ' + JSON.stringify(data));
        },
        error: function (data, textStatus, jqXHR) {
            alert('Upload Error! ' + JSON.stringify(data));
        }
    });
});
```

## Reference

[Upload Plugin](https://studio30.jexframe.com/markdown/JEX_SCRIPT_FILE_UPLOAD/index.html)