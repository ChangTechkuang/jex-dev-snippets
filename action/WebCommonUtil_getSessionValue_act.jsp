<%@page contentType="text/html; charset=UTF-8"%>

<%@page import="jex.web.util.WebCommonUtil"%>
<%@page import="javax.servlet.http.HttpSession"%>
<%
    // Initialize WebCommonUtil instance to handle web utilities
    WebCommonUtil util = WebCommonUtil.getInstance(request, response);

    // Get the current session or create a new one if it doesn't exist
    HttpSession session = request.getSession();

    // Retrieve a value from the session with key "A"
    // This loads a previously stored value that persists across requests
    Object val = util.getSessionValue(session, "A");
%>