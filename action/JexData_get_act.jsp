<%@page contentType="text/html; charset=UTF-8"%>

<%@page import="jex.web.util.WebCommonUtil"%>
<%@page import="jex.data.JexData"%>
<%@page import="jex.data.impl.JexDataRecordList"%>
<%@page import="jex.resource.cci.JexConnection"%>
<%@page import="jex.web.exception.JexWebBIZException"%>
<%@page import="jex.resource.cci.JexConnectionManager"%>
<%@page import="jex.data.impl.ido.JexDataInIDO"%>
<%
    // Initialize the web utility instance using the current request and response.
    WebComonUtil util = WebCommonUtil.getInstance(request, response);

    // Retrieve the input domain (input data) from the request.
    JexData in = util.getInputDomain();

    // Create a new IDO (Integrated Data Object) connection for database or service operations.
    JexConnection jexCon = JexConnectionManager.createIDOConnection();

    // Create an input data object for the IDO call, specifying the component ID "TEST_0001".
    JexDataInIdo idoIn1 = util.createIdoData("TEST_0001");

    // Execute the IDO call with the input data, and get the result as a JexData object.
    JexData jexData = jexCon.execute(idoIn1);

    // Retrieve the value associated with the key "a" from the result data.
    Object a = jexData.get("a"); 

    // If the value is a String, print it to the server console.
    if(a instanceof String)
    {
        System.out.println((String)a);
    }
%>