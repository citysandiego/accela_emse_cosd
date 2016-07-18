/*------------------------------------------------------------------------------------------------------/
|
| Notes   : doesASIFieldExistOnRecord(asiFieldName)
|
|         : PLEASE ADD COMMENTS HERE IF YOU UPDATE 
/------------------------------------------------------------------------------------------------------*/
function doesASIFieldExistOnRecord(asiFieldName)
{
	var appSpecInfoResult = aa.appSpecificInfo.getAppSpecificInfos(capId, asiFieldName)

	var appspecObj = appSpecInfoResult.getOutput();

	if(typeof(appspecObj[0]) != 'undefined')
	{
		return true;
	}
	else
	{
		return false;
	}
}
/***************************************************************************/
