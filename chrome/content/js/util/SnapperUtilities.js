/////////////////////////////////////////////////////////////////////////////
// FILENAME:    SnapperUtilities.js                                                 
// DATE:        9/14/2008                                                  
// AUTHOR:      Joe Miller                                                 
//                                                                         
// DESCRIPTION: Static container for specific Snapper information.
//                                                                         
// REFERENCES:  SnapperPreferencesMoz.js
/////////////////////////////////////////////////////////////////////////////
LSDev.Extensions.SnapperNS.SnapperUtilities = function(){
    const EXTENSION_ID = "{fab752b0-f83e-11da-974d-0800200c9a66}";
    const EXTENSION_TEMP_PATH = "chrome/content/_temp";
    const CURRENT_VERSION = "2.1";
    const OPTIONAL_JRE_VERSION = "1.4";
    
    var preferencesObject = new LSDev.Extensions.SnapperNS.PreferencesMoz();
    
    var prefService = Components.classes[ "@mozilla.org/preferences-service;1" ].getService( Components.interfaces.nsIPrefService );
    var prefBranchSnapper = prefService.getBranch("extensions.snapper.");

    function getExtensionTempPath() {
        var manager = Components.classes[ "@mozilla.org/extensions/manager;1" ].getService( Components.interfaces.nsIExtensionManager );

        return manager.getInstallLocation( EXTENSION_ID ).getItemFile( EXTENSION_ID, EXTENSION_TEMP_PATH ).path;
    }
 
    return {
        
        // Gets the unique ID of the Snapper extension.
        //
        // RETURNS String
        ExtensionID: EXTENSION_ID,
        
        // Gets the preferences branch for the Snapper extension.
        //
        // RETURNS nsIPrefBranch 
        Preferences_OLD: prefBranchSnapper,
        
        // TODO: Use this instead of the above Preferences object
        Preferences: preferencesObject, 
        
        // Gets the path of the temp directory used by the Snapper extension.
        //
        // RETURNS String
        TempDirectoryPath: getExtensionTempPath(),
        
        // Creates the directory specified by TempDirectoryPath, unless it already exists
        //
        // RETURNS void
        EnsureTempDirectoryExists: function() {
            var path = LSDev.Extensions.SnapperNS.SnapperUtilities.TempDirectoryPath;
    		var dir = Components.classes[ "@mozilla.org/file/local;1" ].createInstance( Components.interfaces.nsILocalFile );

    		dir.initWithPath( path );
            
    		// If the directory doesn't exist (or a file is using the name), create it
    		if( !dir.exists() || !dir.isDirectory() ) {
    			dir.create( Components.interfaces.nsIFile.DIRECTORY_TYPE, 0777);
    		}
        },
        
        ReconcileRectangleWithBoundingRectangle: function( rect, boundingRect, reconcileSize, reconcilePosition ) {
            // Width
            if( rect.width > boundingRect.width ) {
                rect.width = boundingRect.width;
            }
            
            // Height
            if( rect.height > boundingRect.height ) {
                rect.height = boundingRect.height;
            }
            
            // Left boundary
            if( rect.x < boundingRect.x ) {
                if( reconcilePosition ) {
                    rect.x = boundingRect.x;
                }
                else if( reconcileSize ) {
                    rect.width = rect.width - (boundingRect.x - rect.x);
                    rect.x = boundingRect.x;
                }
            }
            
            // Top boundary
            if( rect.y < boundingRect.y ) {
                if( reconcilePosition ) {
                    rect.y = boundingRect.y;
                }
                else if( reconcileSize ) {
                    rect.height = rect.height - (boundingRect.y - rect.y);
                    rect.y = boundingRect.y;
                }
            }
            
            // Right boundary
            var rightBoundary = boundingRect.x + boundingRect.width;
            var rectRightSide = rect.x + rect.width;
            if( rectRightSide > rightBoundary ) {
                if( reconcileSize ) {
                    rect.width = rect.width - (rectRightSide - rightBoundary);
                }
                else if( reconcilePosition ) {
                    rect.x = rect.x - (rectRightSide - rightBoundary);
                }
            }
            
            // Bottom boundary
            var bottomBoundary = boundingRect.y + boundingRect.height;
            var rectBottomSide = rect.y + rect.height;
            if( rectBottomSide > bottomBoundary ) {
                if( reconcileSize ) {
                    rect.height = rect.height - (rectBottomSide - bottomBoundary);
                }
                else if( reconcilePosition ) {
                    rect.y = rect.y - (rectBottomSide - bottomBoundary);
                }
            }
        },
        
        // Gets the current version of the Snapper extension.
        //
        // RETURNS String
        Version: CURRENT_VERSION
    }
}();
