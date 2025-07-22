/**
 * 2. To upload multiple files
 * 
 * To upload multiple files, information on all files can be loaded by using the util.getNextFile method as below:
 */

// Initialize web utilities
WebCommonUtil util = WebCommonUtil.getInstace(request, response);

// Set up input/output domains
@JexDataInfo(id="utest_upload_0001_01_p001", type=JexDataType.WSVC)
<%@page contentType="text/html; charset=UTF-8"%>

<%@page import="jex.data.annotation.JexDataInfo"%>
<%@page import="jex.data.JexData"%>
<%@page import="jex.data.JexDataType"%>
<%@page import="jex.web.util.WebCommonUtil"%>
<%@page import="java.io.File"%>

<%
    // Initialize web utilities
    WebCommonUtil util = WebCommonUtil.getInstace(request, response);

    // Set up input/output domains
    @JexDataInfo(id="upload_multiple_file", type=JexDataType.WSVC)
    JexData input = util.getInputDomain();
    JexData result = util.createResultDomain();

    File uploadedFile = (File) input.get("FILE_NM");
    String fileName = null;

    while (uploadedFile != null)
    {
        // Loading the name of a file to be uploaded
        fileName = util.getFileName(uploadedFile);

        // TODO processing of uploaded files

        // Information on the following file(s) is loaded.
        uploadedFile = util.getNextFile(uploadedFile);
    }

    util.setResult(result, "default");
%>