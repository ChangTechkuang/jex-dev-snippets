/**
 * 1. To upload a single file 
 * 
 * This action processes a single uploaded file To upload a single file, the file may be simply loaded as below: To get the file name, use the util.getFileName method.
 */

// Initialize web utilities
WebCommonUtil util = WebCommonUtil.getInstace(request, response);

// Set up input/output domains
@JexDataInfo(id="utest_upload_0001_01_p001", type=JexDataType.WSVC)
JexData input = util.getInputDomain();
JexData result = util.createResultDomain();

// Load information on the uploaded file(s).
File uploadedFile = (File) input.get("FILE_NM");

// Load the original file name.
String fileName = util.getFileName(uploadedFile);

util.setResult(result, "default");