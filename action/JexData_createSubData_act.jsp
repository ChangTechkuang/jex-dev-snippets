<%@page contentType="text/html; charset=UTF-8"%>

<%@page import="jex.web.util.WebCommonUtil"%>
<%@page import="jex.data.JexData"%>
<%@page import="jex.data.impl.JexDataRecordList"%>
<%@page import="jex.resource.cci.JexConnection"%>
<%@page import="jex.web.exception.JexWebBIZException"%>
<%@page import="jex.resource.cci.JexConnectionManager"%>
<%@page import="jex.data.impl.ido.JexDataInIDO"%>
<%
    JexSimpleBatch batch = JexSimpleBatchManager.getInstance().getSimpleBatch(prjId);

    // Get an iterator over all batch IDs in this batch
    Iterator<String> ite = batch.getIds();

    // Create a record list to hold the batch data
    JexDataRecordList<JexData> batchList = new JexDataRecordList<JexData>();
    JexData bat = null;

    // Iterate over each batch ID
    while(ite != null && ite.hasNext()) {
        // Get the next batch ID
        strId = ite.next();

        // Retrieve batch information for the current batch ID
        info = batch.getJexBatchInfo(strId);

        // Create a sub-data object for the batch and add batch details
        bat = result.createSubData("BATCH_LIST");
        bat.put("BAT_ID", info.getId());           // Batch ID
        bat.put("BAT_NM", info.getName());         // Batch Name
        bat.put("BAT_STATE", info.getState());     // Batch State
        bat.put("BAT_MSG", info.getCheckMsg());    // Batch Message

        // If the batch has a last start time, format it; otherwise, set as empty string
        if (info.getLastStartTime() > 0) {
            bat.put("BAT_EXEC", DateTime.getInstance().getDate(info.getLastStartTime(),  "yyyy-mm-dd hh24:mi:ss"));
        } else {
            bat.put("BAT_EXEC", "");
        }

        // Add the batch sub-data to the batch list
        batchList.add(bat);
    }
%>