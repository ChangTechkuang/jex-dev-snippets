// .set( domId, findName, value ) : void

// Among all the elements belonging to the entered 'domId', the [name=findName] tag is set as a value. In the case of checkbox, however, the value should be passed in the form of array.

// When a jexDom object is created, the checkbox value can be set as StringArray if the {"TYPE":"Array"} option is activated.

<html>
    <div id="setWrap">
        <input type="text" name="INPUT_BOX"/>
        <input type="checkbox" name="CHECK_BOX" value="VAL_1"/>
        <input type="checkbox" name="CHECK_BOX" value="VAL_2"/>
        <input type="checkbox" name="CHECK_BOX" value="VAL_3"/>
    </div>
</html>

var jexDom = jexjs.plugin("dom");
jexDom.set("setWrap", "INPUT_BOX", "insert a value into the input box");
jexDom.set("setWrap", "CHECK_BOX", [{"value":"VAL_1"},{"value":"VAL_3"}] );

var jexDomArray = jexjs.plugin("dom", {"TYPE": "Array"});
jexDomArray.set("setWrap", "CHECK_BOX", ["VAL_1","VAL_3"]);