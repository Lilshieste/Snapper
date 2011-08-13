/////////////////////////////////////////////////////////////////////////////
// FILENAME:    SnapperPreferencesBase.js
// DATE:        7/02/2009
// AUTHOR:      Joe Miller
//
// DESCRIPTION: Defines a base class for objects that manipulate Snapper's preferences.
//
// REFERENCES:  None
/////////////////////////////////////////////////////////////////////////////
LSDev.Extensions.SnapperNS.PreferencesBase = {
    getDisplayIcon: function() {
        throw new Error( "Preferences.getDisplayIcon() is not defined for: " + this );
    },
    
    setDisplayIcon: function() {
        throw new Error( "Preferences.setDisplayIcon() is not defined for: " + this );
    },

    getAutoSave: function() {
        throw new Error( "Preferences.getAutoSave() is not defined for: " + this );
    },
    
    setAutoSave: function( newAutoSave ) {
        throw new Error( "Preferences.setAutoSave() is not defined for: " + this );
    },
    
    getAutoSaveImageType: function() {
        throw new Error( "Preferences.getAutoSaveImageType() is not defined for: " + this );
    },
    
    setAutoSaveImageType: function( newImageType ) {
        throw new Error( "Preferences.setAutoSaveImageType() is not defined for: " + this );
    },
    
    getAutoSaveLocation: function() {
        throw new Error( "Preferences.getAutoSaveLocation() is not defined for: " + this );
    },
    
    setAutoSaveLocation: function( newLocation ) {
        throw new Error( "Preferences.setAutoSaveLocation() is not defined for: " + this );
    },
    
    getSnappingMode: function() {
        throw new Error( "Preferences.setAutoSave() is not defined for: " + this );
    },
    
    setSnappingMode: function( newSnappingMode ) {
        throw new Error( "Preferences.setAutoSave() is not defined for: " + this );
    },
    
    getProcessingMode: function() {
        throw new Error( "Preferences.getProcessingMode() is not defined for: " + this );
    },
    
    setProcessingMode: function( newProcessingMode ) {
        throw new Error( "Preferences.setProcessingMode() is not defined for: " + this );
    },
    
    getDisableNotifications: function() {
        throw new Error( "Preferences.getDisableNotifications() is not defined for: " + this );
    },
    
    setDisableNotifications: function( doDisable ) {
        throw new Error( "Preferences.setDisableNotifications() is not defined for: " + this );
    },
    
    getEditSnappedImage: function() {
        throw new Error( "Preferences.getEditSnappedImage() is not defined for: " + this );
    },
    
    setEditSnappedImage: function( doEdit ) {
        throw new Error( "Preferences.setEditSnappedImage() is not defined for: " + this );
    }
}
