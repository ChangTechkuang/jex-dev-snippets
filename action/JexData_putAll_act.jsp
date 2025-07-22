<%@page contentType="text/html; charset=UTF-8"%>

<%@page import="jex.web.util.WebCommonUtil"%>
<%@page import="jex.data.JexData"%>
<%
    // Create an instance of WebCommonUtil to handle web-related utilities for this request and response
    WebCommonUtil util = WebCommonUtil.getInstance(request, response);

    // Retrieve the input domain data (JexData) from the current request
    JexData input = util.getInputDomain();

    // Create a new input data object for the IDO (Integrated Data Object) operation, specifying the operation ID "Test_0001_u001"
    JexData idoIn1 = util.createIDOData("Test_0001_u001");

    // Copy all key-value pairs from the input domain to the IDO input object
    idoIn1.putAll(input);
%>