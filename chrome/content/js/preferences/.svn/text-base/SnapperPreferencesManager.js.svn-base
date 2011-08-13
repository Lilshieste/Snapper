/////////////////////////////////////////////////////////////////////////////
// FILENAME:    SnapperPreferencesManager.js
// DATE:        7/02/2009
// AUTHOR:      Joe Miller
//
// DESCRIPTION: Script responsible for managing Snapper's preferences.
//
// REFERENCES:  SnapperUtilities.js
//              SnapperPreferencesConstants.js
/////////////////////////////////////////////////////////////////////////////
LSDev.Extensions.SnapperNS.PreferencesManager = function() {
    function doInitializeControls() {
        document.getElementById( LSDev.Extensions.SnapperNS.PreferencesConstants.TagImageMode ).addEventListener( "RadioStateChange", function( e ) { doToggleModeControls( e.target ) }, false );
        document.getElementById( LSDev.Extensions.SnapperNS.PreferencesConstants.TagSaveAuto ).addEventListener( "CheckboxStateChange", function( e ) { doToggleSaveLocationControls( e.target ) }, false );

        doInitializeSaveLocation();
        
        doToggleSaveLocationControlsBool( !LSDev.Extensions.SnapperNS.SnapperUtilities.Preferences.getAutoSave() );
        doToggleModeControlsValue( LSDev.Extensions.SnapperNS.SnapperUtilities.Preferences.getProcessingMode() );
    }

    function doInitializeSaveLocation() {
        saveLocation = document.getElementById( LSDev.Extensions.SnapperNS.PreferencesConstants.TagSaveLocation );
        if( saveLocation.value == "" ) {
            saveLocation.value = LSDev.Extensions.SnapperNS.SnapperUtilities.TempDirectoryPath;
        }
    }
    
    function doSavePreferences() {
        var wasSuccessful = true;
        
        if( doValidatePreferences() ) {
            // Have to explicitly set this preference for now, because
            //  modifications are not getting picked up when they are
            //  made with the "Browse..." button.
            LSDev.Extensions.SnapperNS.SnapperUtilities.Preferences.setAutoSaveLocation( document.getElementById( LSDev.Extensions.SnapperNS.PreferencesConstants.TagSaveLocation ).value );
        }
        else {
            wasSuccessful = false;
        }
        
        return wasSuccessful;
    }

    function doValidatePreferences() {
        var isValid = true;
        
        if( document.getElementById( LSDev.Extensions.SnapperNS.PreferencesConstants.TagSaveAuto ).checked ) {
            // Verify the filename here...
            if( document.getElementById( LSDev.Extensions.SnapperNS.PreferencesConstants.TagSaveLocation ).value == "" ) {
                alert("Invalid directory location.  Please enter a different value.");
                isValid = false;
            }
        }
        
        return isValid;
    }

    function doToggleModeControls( mode ) {
        doToggleModeControlsValue( mode.value );
    }

    function doToggleModeControlsValue( modeValue ) {
        var group = document.getElementById( LSDev.Extensions.SnapperNS.PreferencesConstants.TagImageMode );
        if(group.selectedItem.value == modeValue) {
            var chkAutosave = document.getElementById( LSDev.Extensions.SnapperNS.PreferencesConstants.TagSaveAuto );
            if( (modeValue & 2) != 0 ) {
                chkAutosave.disabled = false;
                doToggleSaveLocationControls( chkAutosave );
                
            }
            else {
                chkAutosave.disabled = true;
                doToggleSaveLocationControlsBool( true );
            }
        }
    }

    function doToggleSaveLocationControls( saveLocCheckbox ) {
        var disableControls = !saveLocCheckbox.checked;
        doToggleSaveLocationControlsBool( disableControls );
    }

    function doToggleSaveLocationControlsBool( disable ) {
        document.getElementById( LSDev.Extensions.SnapperNS.PreferencesConstants.TagSaveLocation ).disabled = disable;
        document.getElementById( LSDev.Extensions.SnapperNS.PreferencesConstants.TagSaveLocationBrowse ).disabled = disable;
    }

    function doGetSaveLocationDirectory() {
        var location = doGetDirectory();
        
        if( location != "" ) {
            document.getElementById( LSDev.Extensions.SnapperNS.PreferencesConstants.TagSaveLocation ).value = location;
        }
    }

    function doGetDirectory() {
        var location = "";
        var filePicker = Components.interfaces.nsIFilePicker;
        var dialogDir = Components.classes[ "@mozilla.org/filepicker;1" ].createInstance( filePicker );
        var dialogTitle = "Browse for directory...";
        
        dialogDir.init( window, dialogTitle, filePicker.modeGetFolder );
        
        result = dialogDir.show();
        
        if( filePicker.returnOK == result ) {
            location = dialogDir.file.path + "\\";
        }
        
        return location;
    }
    
    
    return {
        initializeControls: function() {
        	doInitializeControls();
        },

        initializeSaveLocation: function() {
        	doInitializeSaveLocation();
        },
        
        savePreferences: function() {
            return doSavePreferences();
        },

        validatePreferences: function() {
            return doValidatePreferences();
        },

        toggleModeControls: function( mode ) {
        	doToggleModeControls( mode );
        },

        toggleModeControlsValue: function( modeValue ) {
            doToggleModeControlsValue( modeValue );
        },

        toggleSaveLocationControls: function( saveLocCheckbox ) {
        	doToggleSaveLocationControls( saveLocCheckbox );
        },

        toggleSaveLocationControlsBool: function( disable ) {
        	doToggleSaveLocationControlsBool( disable );
        },

        getSaveLocationDirectory: function() {
            doGetSaveLocationDirectory();
        },

        getDirectory: function() {
            return doGetDirectory();
        }
    }
}();
