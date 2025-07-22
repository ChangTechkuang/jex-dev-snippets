<%@page contentType="text/html; charset=UTF-8"%>

<%@page import="jex.web.util.WebCommonUtil"%>
<%
    // Initialize WebCommonUtil instance to handle web utilities
    WebCommonUtil util = WebCommonUtil.getInstance(request, response);

    // Get the current URL path from the request
    // This returns the portion of the URL after the domain name (e.g., /app/path)
    String path = util.getPathURL();
%>