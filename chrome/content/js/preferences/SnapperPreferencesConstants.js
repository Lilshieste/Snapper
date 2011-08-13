/////////////////////////////////////////////////////////////////////////////
// FILENAME:    SnapperPreferencesConstants.js
// DATE:        7/02/2009
// AUTHOR:      Joe Miller
//
// DESCRIPTION: A static collection of constants used for Snapper's preferences.
//
// REFERENCES:  None
/////////////////////////////////////////////////////////////////////////////
LSDev.Extensions.SnapperNS.PreferencesConstants = function() {
    const PREF_TAG_SAVE_LOCATION = "txtSaveLocation";
    const PREF_TAG_SAVE_LOCATION_BROWSE = "btnSaveLocationBrowse";
    const PREF_TAG_SAVE_AUTO = "chkAutoSave";
    const PREF_TAG_SAVE_TYPE = "mnulstSaveType";
    const PREF_TAG_IMG_MODE = "radgrpMode";
    const PREF_TAG_SNAPPING_MODE = "radgrpSnappingMode";
    const PREF_TAG_DISABLE_NOTIFICATIONS = "chkDisableNotifications";
    const PREF_TAG_EDIT_SNAPPED_IMAGE = "chkEditSnappedImage";

    const PREF_NAME_SAVE_LOCATION = "saveLocation";
    const PREF_NAME_SAVE_AUTO = "autoSave";
    const PREF_NAME_SAVE_TYPE = "saveType";
    const PREF_NAME_IMG_MODE = "mode";
    const PREF_NAME_SNAPPING_MODE = "snappingMode";
    const PREF_NAME_DISABLE_NOTIFICATIONS = "disableNotifications";
    const PREF_NAME_EDIT_SNAPPED_IMAGE = "editSnappedImage";
    
    return {
        TagSaveLocation: PREF_TAG_SAVE_LOCATION,
        TagSaveLocationBrowse: PREF_TAG_SAVE_LOCATION_BROWSE,
        TagSaveAuto: PREF_TAG_SAVE_AUTO,
        TagSaveType: PREF_TAG_SAVE_TYPE,
        TagImageMode: PREF_TAG_IMG_MODE,
        TagSnappingMode: PREF_TAG_SNAPPING_MODE,
        TagDisableNotifications: PREF_TAG_DISABLE_NOTIFICATIONS,
        TagEditSnappedImage: PREF_TAG_EDIT_SNAPPED_IMAGE,
        NameSaveLocation: PREF_NAME_SAVE_LOCATION,
        NameSaveAuto: PREF_NAME_SAVE_AUTO,
        NameSaveType: PREF_NAME_SAVE_TYPE,
        NameImageMode: PREF_NAME_IMG_MODE,
        NameSnappingMode: PREF_NAME_SNAPPING_MODE,
        NameDisableNotifications: PREF_NAME_DISABLE_NOTIFICATIONS,
        NameEditSnappedImage: PREF_NAME_EDIT_SNAPPED_IMAGE
    }
}();
