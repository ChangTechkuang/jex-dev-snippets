// 2. Method

// .render( template, params ) : String
// The whole string is completed in use of template strings and the variable map. If the template string includes a variable with no variable map, it is displayed as undefined.

// To avoid the undefined indication, use the renderSpace function. Then a space is displayed instead.

var jexTemplate = jexjs.plugin("template");
var templateString = "Welcome to #{ id } - #{ name }";
var params = { "id" : "JexScript" };

var result = jexTemplate.render( templateString, params );
// return "Welcome to JexScript - undefined"

// .renderSpace( template, params ) : String
// The renderSpace function is to display a part that does not exist in params as a blank space instead of undefined.

var jexTemplate = jexjs.plugin("template");
var templateString = "Welcome to #{ id } - #{ name }";
var params = { "id": "JexScript" };

var result = jexTemplate.renderSpace( templateString, params );
// return "Welcome to JexScript - "