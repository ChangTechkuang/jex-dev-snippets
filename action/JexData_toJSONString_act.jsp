<%@page contentType="text/html; charset=UTF-8"%>

<%@page import="jex.web.util.WebCommonUtil"%>
<%@page import="jex.data.JexData"%>
<%@page import="jex.data.JexDataList"%>
<%@page import="jex.resource.cci.JexConnection"%>
<%@page import="jex.web.exception.JexWebBIZException"%>
<%@page import="jex.resource.cci.JexConnectionManager"%>
<%@page import="jex.data.impl.ido.JexDataInIDO"%>
<%@page import="jex.data.impl.JexDataRecordList"%>
<%@page import="jex.json.JSONObject"%>
<%
    // Retrieve the input domain data (JexData) from the current request
    JexData input = util.getInputDomain();

    // Create a result domain object to store the output
    JexData result = util.createResultDomain();

    // Create an input data object for the IDO operation, specifying the operation ID "TEST_IDO"
    JexDataInIDO idoIn1 = util.createIDOData("TEST_IDO");

    // Copy all input parameters from the input domain to the IDO input object
    idoIn1.putAll(in);

    // Create a new IDO (Integrated Data Object) connection for database operations
    JexConnection idoCon = JexConnectionManager.createIDOConnection();

    // Execute the IDO operation using the connection and input data, and get the output as a record list
    JexDataRecordList<JexData> ex = idoCon.executeList(idoIn1);

    // Convert the record list to a JSON object
    JSONObject jsonObject = ex.toJSON();

    // Store the JSON string representation of the result in the result domain object
    result.put("result", jsonObject.toJSONString());
%>