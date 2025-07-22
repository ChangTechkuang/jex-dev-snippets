<%@page contentType="text/html; charset=UTF-8"%>

<%@page import="jex.web.util.WebCommonUtil"%>
<%@page import="jex.data.JexData"%>
<%@page import="jex.data.JexDataList"%>
<%
    // Create an instance of WebCommonUtil to handle web-related utilities for this request and response
    WebCommonUtil util = WebCommonUtil.getInstance(request, response);

    // Retrieve the input domain data (JexData) from the current request
    JexData input = util.getInputDomain();

    // Extract a list of JexData objects associated with the key "B" from the input domain
    JexDataList<JexData> list = input.getList("B");
%>