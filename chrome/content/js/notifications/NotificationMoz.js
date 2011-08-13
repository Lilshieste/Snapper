/////////////////////////////////////////////////////////////////////////////
// FILENAME:    NotificationMoz.js
// DATE:        7/03/2009
// AUTHOR:      Joe Miller
//
// DESCRIPTION: Defines an class that displays notification messages for Mozilla.
//
// REFERENCES:  NotificationBase.js
/////////////////////////////////////////////////////////////////////////////
LSDev.Common.Javascript.Util.NotificationMoz = function() {
    const CLASSNAME_ALERTSSERVICE = "@mozilla.org/alerts-service;1";
    
    var service = Components.classes[ CLASSNAME_ALERTSSERVICE ].getService( Components.interfaces.nsIAlertsService );
    
    this.show = function( title, message, iconURL ) {
        service.showAlertNotification(iconURL, title, message);
    }
}

LSDev.Common.Javascript.Util.NotificationMoz.prototype = LSDev.Common.Javascript.Util.NotificationBase;
LSDev.Common.Javascript.Util.NotificationMoz.prototype.base = LSDev.Common.Javascript.Util.NotificationBase;
