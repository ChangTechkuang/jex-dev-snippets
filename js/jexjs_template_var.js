// 1. Variable designation
// In a string template, a variable is put between #{ and }.

var helloTemplate = "#{ title } may be put between strings," +
                    "#{ myArr[0] } may be put between them, " +
                    "#{ user.id } ( #{ user.age } years old ) may be displayed as well.";

// The variable map is prepared in an object form as below:
var params = {
    title : 'hello world',
    myArr : [ 'first_index' ],
    user  : {
        id: 'template',
        age: 29
    }
}

// The following shows a string that includes the Jex Template plugin.

var result = jexTemplate.render( helloTemplate, params );
// Return: "Between strings, the text ‘Hello world’ or first_index may be inserted. Such expressions as in the template ( 29 years old ) may be used."