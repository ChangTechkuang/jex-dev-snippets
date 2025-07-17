# Ajax

## Overview

The Jex Ajax plugin is to perform tasks asynchronously and receives the results.

## Jex Ajax flow chart

JexCore -       Ajax Call ---------- [In Case of Error (ex. 404 Not Found)] ----------> Ajax Error
                    |                                                                       |
                    |                                                                       |
                    | In Case Of Ajax Success                                               |
                    |                                                                       |
                    v                                                                       v
                Ajax Success                                    ----------------------> Ajax Error
                    |                                           |                           |
                    |                                           |                           |
                    |                                           |                           |
                    v                                           |                           |
Common          Jex Filter--------------------------------------|                           |
                    |                                                                       |
                    | Return True                                                           |
                    |                                                                       |
                    |                                                                       |
                    v                                                                       v
Individual      Success Callback                                                        Error Callback

## Available Ajax options

| Key           | Type              | Default Value | Description                                                                                                                                           |
|---------------|-------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| type          | String            | POST          | This is to designate the ajax communication method such as GET, POST, PUT, etc.                                                                       |
| async         | Boolean           | true          | This is to designate whether it will be an asynchronous communication.                                                                                |
| userData      | Boolean           | false         | This is to designate whether a parameter will be sent in a key=value format. If it is 'false,' the parameter is encoded and sent with the "JSON" key. |
| commonData    | Object            | {}            | Upon an ajax call, the common data to be used are designated.                                                                                         |
| delay         | Number            |               | Upon an ajax call, whether it will be delayed is determined. Unit: ms                                                                                 |
| indicator     | Boolean or Custom | true          | An indicator object to be displayed during an ajax call is designated.                                                                                |
| headers       | Object            | {}            | Values are added to the Request header.                                                                                                               |
| contextPath   | String            |               | The Context Path is set up.                                                                                                                           |
| prefix        | String            |               | The url prefix is designated.                                                                                                                         |
| suffix        | String            | .jct          | The url suffix is designated.                                                                                                                         |

# .setting(key, value): void
# .setting(obj): void
## Example 1. An example of ajax synchronous/asynchronous communication

```
<button class="btn btn-primary" id="sampleSyncAjax">Sync Ajax</button>
<button class="btn btn-primary" id="sampleAsyncAjax">Async Ajax</button>

<script type="text/javascript">
// Step 3: Synchronous Ajax Example
// This demonstrates blocking behavior where code executes sequentially
$('#sampleSyncAjax').on('click', function() {
    console.log("[ before ]");

    var jexAjax = jexjs.createAjaxUtil("basic_service");
    jexAjax.setting("async", false );  // Set to synchronous mode
    jexAjax.execute(function(dat) {
        console.log("[ execute ]");     // This blocks until complete
    });

    console.log("[ after ]");          // Only runs after Ajax completes
});

// Step 4: Asynchronous Ajax Example
// This demonstrates non-blocking behavior where Ajax runs in background
$('#sampleAsyncAjax').on('click', function() {
    console.log("[ before ]");

    var jexAjax = jexjs.createAjaxUtil("basic_service");
    jexAjax.setting("async", true );   // Set to asynchronous mode
    jexAjax.execute(function(dat) {
        console.log("[ execute ]");     // This runs after [ after ]
    });

    console.log("[ after ]");          // Runs immediately, doesn't wait
});
</script>
```

## Reference

[Jex Ajax](https://studio30.jexframe.com/markdown/JEX_SCRIPT_AJAX/index.html)