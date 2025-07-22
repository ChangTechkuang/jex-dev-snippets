## WebCommonUtil

# Overview

> WebCommonUtil supports various web utilities.

# getInstance

```
WebCommonUtil getInstance(HttpServletRequest request, HttpServletResponse response)
```

> This is to create WebCommonUtil instances upon receiving servlet requests.

* Parameters

| Required  | ID        | TYPE                  | Explanation                       |
|-----------|-----------|-----------------------|-----------------------------------|
| Y         | request   | HttpServletRequest    | Receiving requests from clients   |
| Y         | response  | HttpServletResponse   | Responding to clients             |

* return : WebCommonUtile

```
WebCommonUtil util = WebCommonUtil.getInstance(request, response);
```

# createBCSData

```
JexData createBCSData(String id) throws JexException, JexBIZException
```

> Loading information on entered bcs components.

* Parameters

| Required  | ID        | TYPE      | Explanation                   |
|-----------|-----------|-----------|-------------------------------|
| Y         | id        | String    | Entering the bcs component ID |

* return

* throws : JexException, JexBIZException

# createIMOData

```
JexData createIMOData(String id) throws JexException, JexBIZException
```

> Loading information on entered imo components

* Pamareters

| Required  | ID        | TYPE      | Explanation                   |
|-----------|-----------|-----------|-------------------------------|
| Y         | id        | String    | Entering the imo component ID |

* return : JexData

* throws : JexException, JexBIZException

# createIDOData

```
JexData createIDOData(String id) throws JexException, JexBIZException
```

> Loading information on entered ido components.

* Pamareters

| Required  | ID        | TYPE      | Explanation                   |
|-----------|-----------|-----------|-------------------------------|
| Y         | id        | String    | Entering the ido component ID |

* return : JexData

* throws : JexException, JexBIZException

# executeBCS

```
JexData executeBCS(JexData data) throws JexException, JexBIZException
```

> Executing JexData including bcs information

* Pamareters

| Required  | ID        | TYPE      | Explanation                                     |
|-----------|-----------|-----------|-------------------------------------------------|
| Y         | data      | JexData   | Data including information on the created BCS   |

* return : JexData

* throws : JexException, JexBIZException

# getRootFile

```
File getRootFile(File file)
```

> If there is a parent file of an input file, the parent file is loaded.

* Pamareters

| Required  | ID        | TYPE      | Explanation    |
|-----------|-----------|-----------|----------------|
| Y         | file      | File      | Input file     |

* return : File

# getNextFile

```
File getNextFile(File file)
```

> If an input file has a subordinate child file, the child file is loaded.

| Required  | ID        | TYPE      | Explanation    |
|-----------|-----------|-----------|----------------|
| Y         | file      | File      | Input file     |

* return : File

# getFileName

```
String getFileName(File file)
```

> The name of the input file is returned.

* Parameters

| Required  | ID        | TYPE      | Explanation    |
|-----------|-----------|-----------|----------------|
| Y         | file      | File      | Input file     |

* return : String

# setSessionValue

```
void setSessionValue(HttpSession session, String key, Object obj)
```

> The value information of a key is saved in the session.

* Parameters

| Required  | ID        | TYPE         | Explanation                          |
|-----------|-----------|--------------|--------------------------------------|
| Y         | session   | HttpSession  | Session object                       |
| Y         | key       | String       | Session Key where the value is saved |
| Y         | obj       | Object       | The value to a key                   |

* return : void

# getSessionValue

```
Object getSessionValue(HttpSession session, String Key)
```

> The value to a key is loaded from the session.

* Parameters

| Required  | ID        | TYPE         | Explanation                   |
|-----------|-----------|--------------|-------------------------------|
| Y         | session   | HttpSession  | Session object                |
| Y         | key       | String       | Key to the value to be loaded |

* return : Object

# getPathURL

```
String getPathURL()
```

> The called Action or View URL is returned.

* return : String

# _getDataItem

```
DataItem _getDataItem(String id)
DataItem _getDataItem(int num)
```

> DataItem _getDataItem(String id)
DataItem _getDataItem(int num)

* Parameters


| Required | ID  | TYPE   | Explanation                                                     |
|----------|-----|--------|-----------------------------------------------------------------|
| Y        | id  | String | ID of the field from which information is loaded                |
| Y        | num | int    | The index value of the field from which information is loaded   |