<%@page contentType="text/html; charset=UTF-8"%>

<%@page import="jex.web.util.WebCommonUtil"%>
<%@page import="jex.data.JexData"%>
<%@page import="jex.connection.JexConnection"%>
<%@page import="jex.connection.JexConnectionManager"%>
<%
    // Initialize WebCommonUtil instance to handle web utilities
    WebCommonUtil util = WebCommonUtil.getInstance(request, response);

    // Create IMO (Integration Module Object) input data object with specified ID
    JexData imoIn1 = util.createIMOData("kiomnd2_imo_test");

    // Create IMO connection to execute the integration module
    JexConnection imoCon = JexConnectionManager.createIMOConnection();        

    // Set input parameters for the IMO
    imoIn1.put("A","A value");  // Add parameter A with value "A value"
    imoIn1.put("B","B value");  // Add parameter B with value "B value"

    // Execute the IMO with input parameters
    imoCon.execute(imoIn1);
%>