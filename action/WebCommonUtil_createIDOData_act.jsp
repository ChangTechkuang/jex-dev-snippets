<%@page contentType="text/html; charset=UTF-8"%>

<%@page import="jex.web.util.WebCommonUtil"%>
<%@page import="jex.data.JexData"%>
<%@page import="jex.connection.JexConnection"%>
<%@page import="jex.connection.JexConnectionManager"%>
<%
    // Initialize WebCommonUtil instance to handle web utilities
    WebCommonUtil util = WebCommonUtil.getInstance(request, response);

    // Create IDO (Integration Data Object) input data object with specified ID
    JexData idoIn1 = util.createIDOData("kiomnd2_ido_test");

    // Create IDO connection to execute the integration data object
    JexConnection idoCon = JexConnectionManager.createIDOConnection();        

    // Set input parameters for the IDO
    idoIn1.put("A","A value");  // Add parameter A with value "A value"
    idoIn1.put("B","B value");  // Add parameter B with value "B value"

    // Execute the IDO with input parameters
    idoCon.execute(idoIn1);
%>