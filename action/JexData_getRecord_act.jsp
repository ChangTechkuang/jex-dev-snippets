<%@page contentType="text/html; charset=UTF-8"%>

<%@page import="jex.web.util.WebCommonUtil"%>
<%@page import="jex.data.JexData"%>
<%@page import="jex.data.impl.JexDataRecordList"%>
<%@page import="jex.resource.cci.JexConnection"%>
<%@page import="jex.web.exception.JexWebBIZException"%>
<%@page import="jex.resource.cci.JexConnectionManager"%>
<%@page import="jex.data.impl.ido.JexDataInIDO"%>
<%
    // Create an instance of WebCommonUtil to handle web-related utilities for this request and response
    WebCommonUtil util = WebCommonUtil.getInstance(request, response);

    // Retrieve the input domain data (JexData) from the current request
    JexData in = util.getInputDomain();

    // Create a new IDO (Integrated Data Object) connection for database operations
    JexConnection idoCon = JexConnectionManager.createIDOConnection();

    // Create an input data object for the IDO operation, specifying the operation ID "TEST_0001"
    JexDataInIDO idoIn1 = util.createIDOData("TEST_0001");

    // Copy all input parameters from the input domain to the IDO input object
    idoIn1.putAll(in);

    // Execute the IDO operation using the connection and input data, and get the output result
    JexData out = idoCon.execute(idoIn1);

    // Extract a record list of JexData objects associated with the key "B" from the output
    JexDataRecordList<JexData> list = out.getRecord("B");
%>