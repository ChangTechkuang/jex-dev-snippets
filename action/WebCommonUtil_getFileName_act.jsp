<%@page contentType="text/html; charset=UTF-8"%>

<%@page import="jex.web.util.WebCommonUtil"%>
<%@page import="java.io.File"%>
<%
    // Initialize WebCommonUtil instance to handle web utilities
    WebCommonUtil util = WebCommonUtil.getInstance(request, response);  

    // Create a new File object pointing to index.html in current directory
    File file = new File("./index.html");

    // Get the filename from the File object using WebCommonUtil's getFileName method
    // This extracts just the name portion, without the full path
    String fileName = util.getfileName(file);
%>