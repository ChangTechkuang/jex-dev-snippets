<%@page contentType="text/html; charset=UTF-8"%>

<%@page import="jex.web.util.WebCommonUtil"%>
<%@page import="jex.data.JexData"%>
<%
    // Initialize WebCommonUtil instance to handle web utilities
    WebCommonUtil util = WebCommonUtil.getInstance(request, response);

    // Create BCS (Business Component Service) input data object with specified ID
    JexData bcsIn1 = util.createBCSData("kiomnd2_bcs_test");

    // Set input parameters for the BCS
    bcsIn1.put("A","A value");  // Add parameter A with value "A value"
    bcsIn1.put("B","B value");  // Add parameter B with value "B value"

    // Execute the BCS with input parameters and get output result
    JexData bcsOut1 = util.executeBCS(bcsIn1);
%>