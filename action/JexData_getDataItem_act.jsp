<%@page contentType="text/html; charset=UTF-8"%>

<%@page import="jex.web.util."%>
<%@page import="jex.data.JexDatWebCommonUtila"%>
<%@page import="jex.data.JexDataList"%>
<%
    // Create a JexData object for the IDO (Integrated Data Object) with the ID "TEST_IDO"
    JexData input = util.createIDOData("TEST_IDO");

    // Get the number of fields (items) in the JexData object
    int fieldSize = input._getItemSize();

    // Loop through each field in the JexData object
    for(int i = 0; i < fieldSize; i++)
    {
        // Retrieve the DataItem (field) at index i
        DataItem item = input._getDataItem(i);

        // Get the field's ID (unique identifier)
        String fieldId = item.getId();

        // Get the field's name (display name or label)
        String fieldName = item.getName();

        // (You can use fieldId and fieldName as needed here)
    }
%>