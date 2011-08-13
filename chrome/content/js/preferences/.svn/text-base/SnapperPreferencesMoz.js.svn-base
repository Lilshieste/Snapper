/////////////////////////////////////////////////////////////////////////////
// FILENAME:    SnapperPreferencesMoz.js
// DATE:        7/02/2009
// AUTHOR:      Joe Miller
//
// DESCRIPTION: Defines a class for that manipulate Snapper's preferences for Mozilla.
//
// REFERENCES:  SnapperPreferencesBase.js
/////////////////////////////////////////////////////////////////////////////
LSDev.Extensions.SnapperNS.PreferencesMoz = function() {
    const PREF_DISPLAY_ICON = "displayIcon";
    const PREF_AUTO_SAVE = "autoSave";
    const PREF_AUTO_SAVE_LOCATION = "saveLocation";
    const PREF_AUTO_SAVE_IMAGE_TYPE = "saveType";
    const PREF_PROCESSING_MODE = "mode";
    const PREF_SNAPPING_MODE = "snappingMode";
    const PREF_DISABLE_NOTIFICATIONS = "disableNotifications";
    const PREF_EDIT_SNAPPED_IMAGE = "editSnappedImage";
    
    var prefService = Components.classes[ "@mozilla.org/preferences-service;1" ].getService( Components.interfaces.nsIPrefService );
    var prefBranch = prefService.getBranch("extensions.snapper.");
   
    this.getDisplayIcon = function() {
        return prefBranch.getBoolPref( PREF_DISPLAY_ICON );
    }
    
    this.setDisplayIcon = function( newDisplayIcon ) {
        prefBranch.setBoolPref( PREF_DISPLAY_ICON, newDisplayIcon );
    }
   
    this.getAutoSave = function() {
        return prefBranch.getBoolPref( PREF_AUTO_SAVE );
    }
    
    this.setAutoSave = function( newAutoSave ) {
        prefBranch.setBoolPref( PREF_AUTO_SAVE, newAutoSave );
    }
    
    // TODO: return actual image type, rather than INT value
    this.getAutoSaveImageType = function() {
        return prefBranch.getIntPref( PREF_AUTO_SAVE_IMAGE_TYPE );
    }
    
    // TODO: use image type, rather than INT value
    this.setAutoSaveImageType = function( newImageType ) {
        prefBranch.setIntPref( PREF_AUTO_SAVE_IMAGE_TYPE, newImageType );
    }
    
    this.getAutoSaveLocation = function() {
        return prefBranch.getCharPref( PREF_AUTO_SAVE_LOCATION );
    }
    
    this.setAutoSaveLocation = function( newLocation ) {
        prefBranch.setCharPref( PREF_AUTO_SAVE_LOCATION, newLocation );
    }
    
    // TODO: use snapping mode, rather than INT value
    this.getSnappingMode = function() {
        return prefBranch.getIntPref( PREF_SNAPPING_MODE );
    }
    
    // TODO: use snapping mode, rather than INT value
    this.setSnappingMode = function( newSnappingMode ) {
        prefBranch.setIntPref( PREF_SNAPPING_MODE, newSnappingMode );
    }
    
    // TODO: use processing mode, rather than INT value
    this.getProcessingMode = function() {
        return prefBranch.getIntPref( PREF_PROCESSING_MODE );
    }
    
    // TODO: use processing mode, rather than INT value
    this.setProcessingMode = function( newProcessingMode ) {
        return prefBranch.setIntPref( PREF_PROCESSING_MODE, newProcessingMode );
    }
    
    this.getDisableNotifications = function() {
        return prefBranch.getBoolPref( PREF_DISABLE_NOTIFICATIONS );
    }
    
    this.setDisableNotifications = function( doDisable ) {
        prefBranch.getBoolPref( PREF_DISABLE_NOTIFICATIONS, doDisable );
    }
    
    this.getEditSnappedImage = function() {
        return prefBranch.getBoolPref( PREF_EDIT_SNAPPED_IMAGE );
    }
    
    this.setEditSnappedImage = function( doEdit ) {
        prefBranch.getBoolPref( PREF_EDIT_SNAPPED_IMAGE, doEdit );
    }
};

LSDev.Extensions.SnapperNS.PreferencesMoz.prototype = LSDev.Extensions.SnapperNS.PreferencesBase;
LSDev.Extensions.SnapperNS.PreferencesMoz.prototype.base = LSDev.Extensions.SnapperNS.PreferencesBase;
