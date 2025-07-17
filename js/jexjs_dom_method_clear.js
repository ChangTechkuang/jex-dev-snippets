// .clear( domId, findName ) : void

// Among all the elements belonging to the entered 'domId', the value or text of tags that meet the criterion [name=findName] is initialized. In the case of radiobuttons or Select boxes, however, the value is not removed but the first value is selected.

<html>
    <div id="clearWrap">
        <input type="text" name="INPUT_BOX" value="인풋박스"/>
        <textarea name="AREA_BOX">text area</textarea>
        <select name="SELECT_BOX">
            <option value="첫번째 값">1</option>
            <option value="두번째 값" selected>2</option>
        </select>
        <span name="SPAN_TEXT">text.</span>
    </div>
</html>

var jexDom = jexjs.plugin("dom");
jexDom.clear("clearWrap", "INPUT_BOX");
jexDom.clear("clearWrap", "AREA_BOX");
jexDom.clear("clearWrap", "SELECT_BOX");
jexDom.clear("clearWrap", "SPAN_TEXT");