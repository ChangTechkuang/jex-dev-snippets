// .setAll( domId, params ) : void

// Among all the elements belonging to the entered 'domId', the values of tags that meet the criterion [name=findName] are set up. ‘params’ is passed in the form of object that includes setting information.

<html>
    <div id="setAllWrap">
        <input type="text" name="INPUT_BOX"/>
        <textarea name="AREA_BOX"></textarea>
        <select name="SELECT_BOX">
            <option value="First Value">1</option>
            <option value="Second Value">2</option>
        </select>
        <span name="SPAN_TEXT"></span>
    </div>
</html>

var jexDom = jexjs.plugin("dom");
jexDom.setAll("setAllWrap", {
    "INPUT_BOX": "insert a value into the input box",
    "AREA_BOX": "with Text Area",
    "SELECT_BOX": "Second Value",
    "SPAN_TEXT": "Generic tags are also possible"
});