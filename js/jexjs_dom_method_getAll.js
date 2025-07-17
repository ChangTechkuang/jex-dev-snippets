// .getAll( domId ) : Object
// Among all the elements belonging to the entered 'domId', any element value or text with the [name] attribute is returned in the form of object.

<html>
    <div id="getWrap">
        <input type="text" name="INPUT_BOX" value="inputText" />
        <textarea name="AREA_BOX">Long Text</textarea>
        <select name="SELECT_BOX">
            <option value="첫번째 값">1</option>
            <option value="두번째 값" selected>2</option>
        </select>
        <span name="SPAN_TEXT">Generic tags are also available</span>
    </div>
</html>

var jexDom = jexjs.plugin("dom");
var result = jexDom.getAll("getWrap");
// return
// {
//    "INPUT_BOX": "inputText",
//    "AREA_BOX": "Long Text",
//    "SELECT_BOX": "Second Value",
//    "SPAN_TEXT": "Generic tags are also available"
// }
