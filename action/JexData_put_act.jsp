<%@page contentType="text/html; charset=UTF-8"%>

<%@page import="jex.web.util.WebCommonUtil"%>
<%@page import="jex.data.JexData"%>
<%
    // Create an instance of WebCommonUtil to handle web-related utilities for this request and response
    WebCommonUtil util = WebCommonUtil.getInstance(request, response);

    // Create a new input data object for the IDO (Integrated Data Object) operation, specifying the operation ID "TEST_0001"
    JexData idoIn1 = util.createIDOData("TEST_0001");

    // Add a key-value pair to the input data object, setting "A" to "B"
    idoIn1.put("A", "B");

    // Execute the IDO operation using the connection and input data, and get the output result
    JexData idoOut1 = idoCon.execute(idoIn1);
%>