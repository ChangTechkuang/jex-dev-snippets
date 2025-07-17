# Dom

## Overview

> The Jex Dom plugin is used to put values in/out of Form elements.

## Dom object creation

An object may be created as below. Functions of the Jex Dom plugin may be used with an jexDom object.

```
var jexDom = jexjs.plugin("dom");
```

## Example

# .get( domId, findName ) Example

> The value of an input tag is loaded.

```
<div id="getWrap">
    <input type="text" name="INPUT_BOX"/>
    <button id="btnGetWrap">Loading values</button>
</div>

<script type="text/javascript">
$(function(){
    $("#btnGetWrap").on("click", function(){
        var jexDom = jexjs.plugin("dom");
        alert( jexDom.get("getWrap", "INPUT_BOX") );
    });
});
</script>
```

> In the case of Checkboxes, the value is returned in the form of array.

```
<div id="getCheckWrap">
    <input type="checkbox" name="GET_CHECKBOX" value="1" checked>No.1
    <input type="checkbox" name="GET_CHECKBOX" value="2" checked>No.2
    <input type="checkbox" name="GET_CHECKBOX" value="3" checked>No.3
    <input type="checkbox" name="GET_CHECKBOX" value="4" checked>No.4
    <input type="checkbox" name="GET_CHECKBOX" value="5" checked>No.5
    <button id="btnGetCheck">Loading values</button>
    <button id="btnGetCheckArray">loading as StringArray</button>
</div>

<script type="text/javascript">
$(function(){
    $("#btnGetCheck").on("click", function(){
        var jexDom = jexjs.plugin("dom");
        alert( JSON.stringify( jexDom.get("getCheckWrap", "GET_CHECKBOX") ) );
    });
    $("#btnGetCheckArray").on("click", function() {
        var jexDomArray = jexjs.plugin("dom", {"TYPE":"Array"});
        alert( JSON.stringify( jexDomArray.get("getCheckWrap", "GET_CHECKBOX") ) );
    });
});
</script>
```

> The value of a Select box is loaded.

```
<select name="GET_SELECT">
    <option value="1">No.1</option>
    <option value="2" selected>No.2</option>
    <option value="3">No.3</option>
    <option value="4">No.4</option>
    <option value="5">No.5</option>
</select>
<button id="btnGetSelect">Loading values</button>

<script type="text/javascript">
$(function(){
    $("#btnGetSelect").on("click", function(){
        var jexDom = jexjs.plugin("dom");
        alert( jexDom.get("getSelectWrap", "GET_SELECT") );
    });
});
</script>
```

> The value of a selected Radio button is loaded.

```
<div id="getRadioWrap">
<input type="radio" name="GET_RADIO" value="1">No.1
<input type="radio" name="GET_RADIO" value="2">No.2
<input type="radio" name="GET_RADIO" value="3" checked>No.3
<input type="radio" name="GET_RADIO" value="4">No.4
<input type="radio" name="GET_RADIO" value="5">No.5
<button class="btn btn-primary" id="btnGetRadio">Loading values</button>
</div>

<script type="text/javascript">
$(function(){
    $("#btnGetRadio").on("click", function(){
        var jexDom = jexjs.plugin("dom");
        alert( jexDom.get("getRadioWrap", "GET_RADIO") );
    });
});
</script>
```

# .getAll( domId ) Example

```
<div id="getAllWrap">
    <input type="text" name="GETALL_INPUT" value="TEST" placeholder="input value to get" />
    <input type="checkbox" name="GETALL_CHECKBOX" value="1" checked>No.1
    <input type="checkbox" name="GETALL_CHECKBOX" value="2" checked>No.2
    <input type="checkbox" name="GETALL_CHECKBOX" value="3" checked>No.3
    <input type="checkbox" name="GETALL_CHECKBOX" value="4" checked>No.4
    <input type="checkbox" name="GETALL_CHECKBOX" value="5" checked >No.5
    <select name="GETALL_SELECT">
        <option value="1" selected>No.1</option>
        <option value="2">No.2</option>
        <option value="3">No.3</option>
        <option value="4">No.4</option>
        <option value="5">No.5</option>
    </select>
    <input type="radio" name="GETALL_RADIO" value="1" checked>No.1
    <input type="radio" name="GETALL_RADIO" value="2">No.2
    <input type="radio" name="GETALL_RADIO" value="3">No.3
    <input type="radio" name="GETALL_RADIO" value="4">No.4
    <input type="radio" name="GETALL_RADIO" value="5">No.5
    <textarea name="GETALL_TEXTAREA" rows="2" placeholder="input value to get">TEST</textarea>
    <button id="btnGetAll">get all values</button>
</div>

<script type="text/javascript">
$(function(){
    $("#btnGetAll").on("click", function(){
        var jexDom = jexjs.plugin("dom");
        alert( JSON.stringify( jexDom.getAll("getAllWrap"), null, "    " ) );
    });
});
</script>
```

# .set( domId, findName, value ) Example

> In the case of Checkboxs, the value should be passed in the form of Array or StringArray.

```
<div id="setInputWrap">
    setting value:
    <input type="text" id="INPUT_SET" value="TEST"/>
    <button id="btnSetInput">Value setting</button>
    Set input:
    <input type="text" name="SET_RSLT_INPUT" readonly/>
</div>

<script type="text/javascript">
$(function(){
    $("#btnSetInput").on("click", function() {
        var jexDom = jexjs.plugin("dom");
        jexDom.set("setInputWrap", "SET_RSLT_INPUT", $("#INPUT_SET").val() );
    });
});
</script>
```

> The value of a radio button to be checked is passed.
> Array setting value: [{"value":"1"},{"value":"2"}]
> StringArray setting value: ["2", "3", "4"]
> Set input :No.1 No.2 No.3 No.4 No.5

```
<div id="setCheckWrap">
    Array setting value:
    <input type="text" id="INPUT_CHK_SET" value='[{"value":"1"},{"value":"2"}]'/>
    <button id="btnSetCheck">Value setting</button>
    StringArray setting value:
    <input type="text" id="INPUT_CHK_SET_ARRAY" value='["2", "3", "4"]'/>
    <button id="btnSetCheckArray">Value setting</button>
    Set input:
    <input type="checkbox" name="SET_RSLT_CHECKBOX" value="1" disabled>No.1
    <input type="checkbox" name="SET_RSLT_CHECKBOX" value="2" disabled>No.2
    <input type="checkbox" name="SET_RSLT_CHECKBOX" value="3" disabled>No.3
    <input type="checkbox" name="SET_RSLT_CHECKBOX" value="4" disabled>No.4
    <input type="checkbox" name="SET_RSLT_CHECKBOX" value="5" disabled>No.5
</div>

<script type="text/javascript">
$(function(){
    $("#btnSetCheck").on("click", function() {
        var jexDom = jexjs.plugin("dom");
        var input = JSON.parse( $("#INPUT_CHK_SET").val() );
        jexDom.clear("setCheckWrap","SET_RSLT_CHECKBOX");
        jexDom.set("setCheckWrap", "SET_RSLT_CHECKBOX", input);
    });
    $("#btnSetCheckArray").on("click", function() {
        var jexDomArray = jexjs.plugin("dom", {"TYPE":"Array"});
        var input = JSON.parse( $("#INPUT_CHK_SET_ARRAY").val() );
        jexDomArray.clear("setCheckWrap","SET_RSLT_CHECKBOX");
        jexDomArray.set("setCheckWrap", "SET_RSLT_CHECKBOX", input );
    });
});
</script>
```

> Passes the value of the Radio button to be checked.
> Value to be set: 5
> Set value: No.1 No.2 No.3 No.4 No.5

```
<div id="setRadioWrap">
    Value to be set:
    <input class="form-control" id="INPUT_RAD_SET" value="2"/>
    <button class="btn btn-primary" id="btnSetRadio">Value setting</button>
    Set value:
    <input type="radio" name="SET_RSLT_RADIO" value="1" disabled>No.1
    <input type="radio" name="SET_RSLT_RADIO" value="2" disabled>No.2
    <input type="radio" name="SET_RSLT_RADIO" value="3" disabled>No.3
    <input type="radio" name="SET_RSLT_RADIO" value="4" disabled>No.4
    <input type="radio" name="SET_RSLT_RADIO" value="5" disabled>No.5
</div>

<script type="text/javascript">
$(function(){
    $("#btnSetRadio").on("click", function(){
        var jexDom = jexjs.plugin("dom");
        jexDom.set("setRadioWrap", "SET_RSLT_RADIO", $("#INPUT_RAD_SET").val() );
    });
});
</script>
```

# .setAll( domId, params ) Example

The value to be set is passed in the form of JSON Object.

> Value to be set: {"SETALL_RSLT_INPUT":"TEST","SETALL_RSLT_CHECKBOX":[{"value":"1"},{"value":"4"}],"SETALL_RSLT_SELECT":"5","SETALL_RSLT_RADIO":"3","SETALL_RSLT_TEXTAREA":"TEXTAREA TEST"}
> Set value input box: TEST
> Set value check box1:  No.1 No.2 No.3 No.4 No.5
> Set value check box2:  No.1 No.2 No.3 No.4 No.5
> AREA TEXT: TEXTAREA TEST

```
<div id="setAllWrap">
    Value to be set:
    <textarea rows="4" id="INPUT_SETAll">{"SETALL_RSLT_INPUT":"TEST","SETALL_RSLT_CHECKBOX":[{"value":"1"},{"value":"4"}],"SETALL_RSLT_SELECT":"5","SETALL_RSLT_RADIO":"3","SETALL_RSLT_TEXTAREA":"TEXTAREA TEST"}</textarea>
    <button id="btnSetAll">Value setting</button>    
    Set value:
    <input type="text" name="SETALL_RSLT_INPUT" readonly>
    <input type="checkbox" name="SETALL_RSLT_CHECKBOX" value="1" disabled >No.1
    <input type="checkbox" name="SETALL_RSLT_CHECKBOX" value="2" disabled>No.2
    <input type="checkbox" name="SETALL_RSLT_CHECKBOX" value="3" disabled>No.3
    <input type="checkbox" name="SETALL_RSLT_CHECKBOX" value="4" disabled>No.4
    <input type="checkbox" name="SETALL_RSLT_CHECKBOX" value="5" disabled>No.5
    <select name="SETALL_RSLT_SELECT" disabled>
        <option value="1">No.1</option>
        <option value="2">No.2</option>
        <option value="3">No.3</option>
        <option value="4">No.4</option>
        <option value="5">No.5</option>
    </select>
    <input type="radio" name="SETALL_RSLT_RADIO" value="1" disabled>No.1
    <input type="radio" name="SETALL_RSLT_RADIO" value="2" disabled>No.2
    <input type="radio" name="SETALL_RSLT_RADIO" value="3" disabled>No.3
    <input type="radio" name="SETALL_RSLT_RADIO" value="4" disabled>No.4
    <input type="radio" name="SETALL_RSLT_RADIO" value="5" disabled>No.5
    <textarea rows="4" name="SETALL_RSLT_TEXTAREA" readonly></textarea>
</div>

<script type="text/javascript">
$(function(){
    $("#btnSetAll").on("click", function(){
        var jexDom = jexjs.plugin("dom");
        var input = JSON.parse( $("#INPUT_SETAll").val() );
        jexDom.setAll("setAllWrap", input );
    });
});
</script>
```

# .clear( domId, findName ) Example

> The value of an inputbox is initialized.

```
<div id="clearWrap">
    <input type="text" name="CLEAR_INPUT" value="TEST" />
    <button id="btnClear">Clear</button>
</div>

<script type="text/javascript">
$(function(){
    $("#btnClear").on("click", function(){
        var jexDom = jexjs.plugin("dom");
        jexDom.clear("clearWrap", "CLEAR_INPUT");
    });
});
</script>
```

All the values selected with a CheckBox are initialized.

> No.1 No.2 No.3 No.4 No.5  [Clear]

```
    <div id="clearCheckWrap">
        <input type="checkbox" name="CLEAR_CHECKBOX" value="1" checked>No.1
        <input type="checkbox" name="CLEAR_CHECKBOX" value="2" checked>No.2
        <input type="checkbox" name="CLEAR_CHECKBOX" value="3" checked>No.3
        <input type="checkbox" name="CLEAR_CHECKBOX" value="4" checked>No.4
        <input type="checkbox" name="CLEAR_CHECKBOX" value="5" checked>No.5
        <button id="btnClearCheck">Clear</button>
    </div>

    <script type="text/javascript">
    $(function(){
        $("#btnClearCheck").on("click", function(){
            var jexDom = jexjs.plugin("dom");
            jexDom.clear("clearCheckWrap", "CLEAR_CHECKBOX");
        });
    });
    </script>
```

In the cases of SelectBox and Radio buttons, the values are not initialized but the first value is selected.

> No.1 No.2 No.3 No.4 No.5  [Clear]
```
<div id="clearRadioWrap">
    <input type="radio" name="CLEAR_RADIO" value="1">No.1
    <input type="radio" name="CLEAR_RADIO" value="2">No.2
    <input type="radio" name="CLEAR_RADIO" value="3" checked>No.3
    <input type="radio" name="CLEAR_RADIO" value="4">No.4
    <input type="radio" name="CLEAR_RADIO" value="5">No.5
    <button id="btnClearRadio">Clear</button>
</div>

<script type="text/javascript">
$(function(){
    $("#btnClearRadio").on("click", function(){
        var jexDom = jexjs.plugin("dom");
        jexDom.clear("clearRadioWrap", "CLEAR_RADIO");
    });
});
</script>
```

# .clearAll( domId ) Example
```
<div id="clearAllWrap">
    <input type="text" name="CLEARALL_INPUT" value="TEST" placeholder="Input value to clear" />
    <input type="checkbox" name="CLEARALL_CHECKBOX" value="1번" checked>No.1
    <input type="checkbox" name="CLEARALL_CHECKBOX" value="2번" checked>No.2
    <input type="checkbox" name="CLEARALL_CHECKBOX" value="3번" checked>No.3
    <input type="checkbox" name="CLEARALL_CHECKBOX" value="4번" checked>No.4
    <input type="checkbox" name="CLEARALL_CHECKBOX" value="5번" checked>No.5
    <select name="CLEARALL_SELECT">
        <option value="1번">No.1</option>
        <option value="2번">No.2</option>
        <option value="3번" selected>No.3</option>
        <option value="4번">No.4</option>
        <option value="5번">No.5</option>
    </select>
    <input type="radio" name="CLEARALL_RADIO" value="1번">No.1
    <input type="radio" name="CLEARALL_RADIO" value="2번">No.2
    <input type="radio" name="CLEARALL_RADIO" value="3번" checked>No.3
    <input type="radio" name="CLEARALL_RADIO" value="4번">No.4
    <input type="radio" name="CLEARALL_RADIO" value="5번">No.5
    <textarea name="CLEARALL_TEXTAREA" rows="2" placeholder="Input value to clear">TEST</textarea>
    <button id="btnClearAll">Clear</button>    
</div>

<script type="text/javascript">
$(function(){
    $("#btnClearAll").on("click", function() {
        var jexDom = jexjs.plugin("dom");
        jexDom.clearAll("clearAllWrap");
    });
});
</script>
```

[Jex Dom](https://studio30.jexframe.com/markdown/JEX_SCRIPT_DOM/index.html)

Every value is initialized.