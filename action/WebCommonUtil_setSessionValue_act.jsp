<%@page contentType="text/html; charset=UTF-8"%>

<%@page import="jex.web.util.WebCommonUtil"%>
<%@page import="javax.servlet.http.HttpSession"%>
<%
    // Initialize WebCommonUtil instance to handle web utilities
    WebCommonUtil util = WebCommonUtil.getInstance(request, response);

    // Get the current session or create a new one if it doesn't exist
    HttpSession session = request.getSession();

    // Store a value in the session with key "A" and value "B"
    // This allows the value to persist across multiple requests from the same user
    util.setSessionValue(session,"A","B");
%>