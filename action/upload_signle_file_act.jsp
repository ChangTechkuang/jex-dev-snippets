<%@page contentType="text/html; charset=UTF-8"%>

<%@page import="jex.data.annotation.JexDataInfo"%>
<%@page import="jex.data.JexData"%>
<%@page import="jex.data.JexDataType"%>
<%@page import="jex.web.util.WebCommonUtil"%>
<%@page import="java.io.File"%>
<%
    /**
     * 1. To upload a single file 
     * 
     * This action processes a single uploaded file To upload a single file, the file may be simply loaded as below: To get the file name, use the util.getFileName method.
     */

    // Initialize web utilities
    WebCommonUtil util = WebCommonUtil.getInstace(request, response);

    // Set up input/output domains
    @JexDataInfo(id="upload_signle_file", type=JexDataType.WSVC)
    JexData input = util.getInputDomain();
    JexData result = util.createResultDomain();

    // Load information on the uploaded file(s).
    File uploadedFile = (File) input.get("FILE_NM");

    // Load the original file name.
    String fileName = util.getFileName(uploadedFile);

    util.setResult(result, "default");
%>