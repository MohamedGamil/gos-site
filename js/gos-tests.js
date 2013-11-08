/*!
 * Modernizr Tests Goes Here
 */


// Mac Test
Modernizr.addTest("macosx", function ()
{
	var strIndex = navigator.userAgent.toLowerCase().indexOf("mac");
	return (strIndex > -1);
});


// Windows Test
Modernizr.addTest("windows", function ()
{
	var strIndex = navigator.userAgent.toLowerCase().indexOf("windows");
	return (strIndex > -1);
});


// Linux Test
Modernizr.addTest("linux", function ()
{
	var strIndex = navigator.userAgent.toLowerCase().indexOf("linux");
	return (strIndex > -1);
});