<%@page contentType="text/html; charset=UTF-8"%>

<%@page import="jex.web.util.WebCommonUtil"%>
<%@page import="java.io.File"%>
<%
    // Initialize WebCommonUtil instance to handle web utilities
    // This provides access to common web operation methods
    WebCommonUtil util = WebCommonUtil.getInstance(request, response);

    // Get the root file from a test file
    // getRootFile() returns the parent/root file when dealing with 
    // multiple related files (e.g. in multi-file uploads)
    File file = util.getRootFile(testFile);
%>