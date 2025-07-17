// .get( domId, findName ) : String, Array
// Among all the elements belonging to the entered 'domId', the value of the [name=findName] tag is returned in the form of string. In the case of checkbox, however, the selected value is returned in the form of array.

// When a jexDom object is created, the checkbox value can be loaded with as StringArray if the {"TYPE":"Array"} option is activated.

<html>
    <div id="inputWrap">
        <input type="text" name="INPUT_BOX" value="inputValue" />
    </div>
    <div id="checkWrap">
        <input type="checkbox" name="CHECK_BOX" value="VAL_1" checked/>
        <input type="checkbox" name="CHECK_BOX" value="VAL_2"/>
        <input type="checkbox" name="CHECK_BOX" value="VAL_3" checked/>
    </div>
</html>

var jexDom = jexjs.plugin("dom");
var inputboxResult = jexDom.get("inputWrap", "INPUT_BOX");  // return inputValue
var checkboxResult = jexDom.get("checkWrap", "CHECK_BOX");  // return [{"value":"VAL_1"},{"value":"VAL_3"}]

var jexDomArray = jexjs.plugin("dom", { "TYPE": "Array" });
var arrResult = jexDomArray.get("checkWrap", "CHECK_BOX");  // return ["VAL_1","VAL_3"]