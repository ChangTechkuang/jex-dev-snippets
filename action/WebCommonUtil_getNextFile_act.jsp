<%@page contentType="text/html; charset=UTF-8"%>

<%@page import="jex.web.util.WebCommonUtil"%>
<%@page import="java.io.File"%>
    <%
    // Step 1: Initialize WebCommonUtil instance
    WebCommonUtil util = WebCommonUtil.getInstance(request, response);

    // Step 2: Get initial file from input
    File file = (File) input.get("FILE_DATA");

    // Step 3: Process files in a loop until no more files
    while(file != null) {
        // Step 4: Move current file to destination path
        FileUtil.move(file, new File("movePath"));

        // Step 5: Get next file in sequence
        file = util.getNextFile(file);
    }
    %>
%>