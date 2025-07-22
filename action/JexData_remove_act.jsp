<%@page contentType="text/html; charset=UTF-8"%>

<%@page import="jex.web.util.WebCommonUtil"%>
<%@page import="jex.data.JexData"%>
<%
    // Obtain an instance of WebCommonUtil for the current request and response.
    WebCommonUtil util = WebCommonUtil.getInstance(request, response);

    // Create a new JexData object for the BCS (Business Component Service) operation "Test_0001_u001".
    JexData idoIn1 = util.createBCSData("Test_0001_u001");

    // Add key-value pairs "A" and "B" to the input data object.
    idoIn1.put("A", "A value");
    idoIn1.put("B", "B value");

    // Execute the BCS operation with the input data and receive the output as a JexData object.
    JexData idoOut1 = util.executeBCS(idoIn1);

    // Remove the key "A" and its associated value from the output data object.
    idoOut1.remove("A");
%>