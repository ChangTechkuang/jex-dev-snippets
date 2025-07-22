## JexData

# Overview

> JexData is the basic data format of Jex.

# getList

```
JexDataList<JexData> getList(String paramString)
```

> The list of values to the input key is loaded. (JsonObject value)

* Parameters

| Required | ID          | TYPE   | Explanation           |
|----------|-------------|--------|-----------------------|
| Y        | paramString | String | Key value to a list   |

* return : JexDataList

# getRecord

```
JexDataRecordList<JexData> getRecord(String paramString)
```

> The record list of values to the input key is loaded. (JSONArray value)

* Parameters

| Required | ID          | TYPE   | Explanation           |
|----------|-------------|--------|-----------------------|
| Y        | paramString | String | Key value to a record |

* return : JexDataRecordList

# get

```
Object get(String paramString)
```

> The values to the input key are loaded.

* Parameters

| Required | ID          | TYPE   | Explanation                             |
|----------|-------------|--------|-----------------------------------------|
| Y        | paramString | String | The values to the input key are loaded. |

* return : Object

# getString

```
String getString(String paramString)
```

> Values to the input key are loaded in the string form.

* Parameters

| Required | ID          | TYPE   | Explanation |
|----------|-------------|--------|-------------|
| Y        | paramString | String | Key value   |

* return : String

# toJSON

```
JSONObject toJSON()
```

> Data are converted into the data type of JSONObject.

* return : JSONObject

# toJSONString

```
String toJSONString()
```

> Data are converted into the string type of JSONObject.

* return : String

# putAll

```
void putAll(JexData paramJexData)
```

> All the values to a parameter are added to an object.

* Parameters

| Required | ID           | TYPE    | Explanation           |
|----------|--------------|---------|-----------------------|
| Y        | paramJexData | JexData | JexData to be entered |

* return : void

# put

```
void put(JexData paramJexData, String[] paramArrayOfString)
```

> All the values to a key are added to an object.

* Parameters

| Required | ID                | TYPE      | Explanation         |
|----------|-------------------|-----------|---------------------|
| Y        | paramJexData      | JexData   | JexData key         |
| Y        | paramArrayOfString| String[]  | The value to a key  |

* return : void

# remove

```
void remove(String paramString)
```

> The value to a key is removed.

* Parameters

| Required | ID          | TYPE   | Explanation                    |
|----------|-------------|--------|--------------------------------|
| Y        | paramString | String | Key to a value to be removed   |

* return : void

# createSubData

```
void createSubData(String id)
```

> Returns the sub-Data of the rule.

* Parameters

| Required | ID  | TYPE   | Explanation                        |
|----------|-----|--------|------------------------------------|
| Y        | id  | String | Service ID that includes sub data  |

* return void

# _getDataItem

```
DataItem _getDataItem(String id)
DataItem _getDataItem(int num)
```

> Information on the field is loaded from JexData.

* Parameters

| Required | ID  | TYPE   | Explanation                                                     |
|----------|-----|--------|-----------------------------------------------------------------|
| Y        | id  | String | ID of the field from which information is loaded                |
| Y        | num | int    | The index value of the field from which information is loaded   |

* return DataItem

# _getItemSize

> int _getItemSize()

The number of htis loaded from JexData

* Parameters

* return int
