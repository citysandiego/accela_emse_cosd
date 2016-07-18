/*------------------------------------------------------------------------------------------------------/
|
| Notes   : getObjectIdValue(svc,layer)
|         
|         : PLEASE ADD COMMENTS HERE IF YOU UPDATE 
/------------------------------------------------------------------------------------------------------*/
function getObjectIdValue(svc,layer) 
	{
	// 02/10/2016 - Paul H. Rose get specific GIS object based on 	
	// usage: 
	//
	// x = getObjectIdValue("KGIS","Intersections");

	
	var retString;
   	// aa.gis.getCapGISObjects(capId).getOutput()[0].getGISObjects()[0].getGisObjectModel().getGISLayerId();
	var gisObjResult = aa.gis.getCapGISObjects(capId); // get GIS objects on the cap
	if (gisObjResult.getSuccess()) 	
		var fGisObj = gisObjResult.getOutput();
	else
		{ logDebug("**WARNING: Getting GIS objects for Cap.  Reason is: " + gisObjResult.getErrorType() + ":" + gisObjResult.getErrorMessage()) ; return false }

	for (a1 in fGisObj) // for each GIS object on the Cap, look for specific layer name to get ID field
		{
		var bufchk = aa.gis.getBufferByRadius(fGisObj[a1], numDistance, distanceType, buf);

		if (bufchk.getSuccess())
			var proxArr = bufchk.getOutput();
		else
			{ logDebug("**WARNING: Retrieving Buffer Check Results.  Reason is: " + bufchk.getErrorType() + ":" + bufchk.getErrorMessage()) ; return false }	
		
		for (a2 in proxArr)
			{
			var proxObj = proxArr[a2].getGISObjects();  // if there are GIS Objects here, we're done
			for (z1 in proxObj)
				{
				var v = proxObj[z1].getAttributeValues()
				retString = v[0];
				}
			
			}
		}
	return retString
	}
/***************************************************************************/