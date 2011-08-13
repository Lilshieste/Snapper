/////////////////////////////////////////////////////////////////////////////
// FILENAME:    SnapperExtension.js
// DATE:        3/25/2006
// AUTHOR:      Joe Miller
//
// DESCRIPTION: Script responsible for managing the Snapper extension.
//
// REFERENCES:  Snapper.js
//              SnapperUtilities.js
//
/////////////////////////////////////////////////////////////////////////////
LSDev.Extensions.SnapperNS.SnapperInstance = new LSDev.Extensions.SnapperNS.Snapper();

LSDev.Extensions.SnapperNS.SnapperHelper = function() {
    function doDisplayStatusBarIcon() {
        if( !LSDev.Extensions.SnapperNS.SnapperUtilities.Preferences.getDisplayIcon() ) {
            doHideIcon();
        }
    }

    function doHideIcon() {
        document.getElementById( "snapperPanel" ).setAttribute("hidden", "true");
    }

    function doToggleSnapper() {
        LSDev.Extensions.SnapperNS.SnapperInstance.toggle();
    }

    function doSnapperActivated( e ) {
        doUpdateStatusBarIcon( true );
        doUpdateToolBarIcon( true );
        doUpdateContextMenu( true );
    }

    function doSnapperDeactivated( e ) {
        doUpdateStatusBarIcon( false );
        doUpdateToolBarIcon( false );
        doUpdateContextMenu( false );
    }

    function doUpdateStatusBarIcon( isActivating ) {
        if( isActivating ) {
            doDisplayIconActive();
        }
        else {
            doDisplayIconInactive();
        }
    }
    
    function doUpdateToolBarIcon( isActivating ) {
        if( isActivating ) {
            doDisplayToolbarActive();
        }
        else {
            doDisplayToolbarInactive();
        }
    }

    function doUpdateContextMenu( isActivating ) {
        if( isActivating ) {
            doDisplayContextOptionsActive();
        }
        else {
            doDisplayContextOptionsInactive();
        }
    }

    function doDisplayIconActive() {
        var snapperStatusBar = document.getElementById( "snapperStatusIcon" );
        var messageActive = document.getElementById( "snapper-strings" ).getString( "SnapperIsActive" );
        snapperStatusBar.style.backgroundPosition = "-25px 0";
        snapperStatusBar.setAttribute( "tooltiptext", messageActive );
    }

    function doDisplayIconInactive() {
        var snapperStatusBar = document.getElementById( "snapperStatusIcon" );
        var messageInactive = document.getElementById( "snapper-strings" ).getString( "SnapperIsInactive" );
        snapperStatusBar.style.backgroundPosition = "0px 0";
        snapperStatusBar.setAttribute( "tooltiptext", messageInactive );
    }
    
    function doDisplayToolbarActive() {
        var snapperToolbarButton = document.getElementById( "snapperToolbarButton" );
        var messageActive = document.getElementById( "snapper-strings" ).getString( "SnapperIsActive" );
        snapperToolbarButton.style.backgroundPosition = "-25px 0";
        snapperToolbarButton.setAttribute( "class", snapperToolbarButton.getAttribute( "class" ).replace( "snapperToolbarButtonDeactivated", "snapperToolbarButtonActivated" ) );
        snapperToolbarButton.setAttribute( "tooltiptext", messageActive );
        snapperToolbarButton.setAttribute( "checked", true );
    }

    function doDisplayToolbarInactive() {
        var snapperToolbarButton = document.getElementById( "snapperToolbarButton" );
        var messageInactive = document.getElementById( "snapper-strings" ).getString( "SnapperIsInactive" );
        snapperToolbarButton.style.backgroundPosition = "0px 0";
        snapperToolbarButton.setAttribute( "class", snapperToolbarButton.getAttribute( "class" ).replace( "snapperToolbarButtonActivated", "snapperToolbarButtonDeactivated" ) );
        snapperToolbarButton.setAttribute( "tooltiptext", messageInactive );
        snapperToolbarButton.setAttribute( "checked", false );
    }

    function doDisplayContextOptionsActive() {
        var label = document.getElementById( "snapper-strings" ).getString( "CancelSnapping" );
        var snapperContextMenuItem = document.getElementById( "snapperContextMenuItem" );
        var snapperContextMenuItemIcon = document.getElementById( "snapperStatusIconPopupToggle" );
        snapperContextMenuItem.label = label;
        snapperContextMenuItemIcon.label = label;
    }

    function doDisplayContextOptionsInactive() {
        var label = document.getElementById( "snapper-strings" ).getString( "StartSnapping" );
        var snapperContextMenuItem = document.getElementById( "snapperContextMenuItem" );
        var snapperContextMenuItemIcon = document.getElementById( "snapperStatusIconPopupToggle" );
        snapperContextMenuItem.label = label;
        snapperContextMenuItemIcon.label = label;
    }

    return {
        displayStatusBarIcon: function() {
            doDisplayStatusBarIcon();
        },

        hideIcon: function() {
            doHideIcon();
        },

        toggleSnapper: function() {
            doToggleSnapper();
        },

        snapperActivated: function( e ) {
            doSnapperActivated( e );
        },

        snapperDeactivated: function( e ) {
            doSnapperDeactivated( e );
        },

        updateStatusBarIcon: function( isActivating ) {
            doUpdateStatusBarIcon( isActivating );
        },

        updateContextMenu: function( isActivating ) {
            doUpdateContextMenu( isActivating );
        },

        displayIconActive: function() {
            doDisplayIconActive();
        },

        displayIconInactive: function() {
            doDisplayIconInactive();
        },

        displayContextOptionsActive: function() {
            doDisplayContextOptionsActive();
        },

        displayContextOptionsInactive: function() {
            doDisplayContextOptionsInactive();
        }
    }
}();

window.addEventListener("load", function( e ) { LSDev.Extensions.SnapperNS.SnapperHelper.displayStatusBarIcon(); }, false);

LSDev.Extensions.SnapperNS.SnapperInstance.addEventListener( LSDev.Extensions.SnapperNS.Snapper.EVENT_NAME_ACTIVATED, LSDev.Extensions.SnapperNS.SnapperHelper.snapperActivated, true );
LSDev.Extensions.SnapperNS.SnapperInstance.addEventListener( LSDev.Extensions.SnapperNS.Snapper.EVENT_NAME_DEACTIVATED, LSDev.Extensions.SnapperNS.SnapperHelper.snapperDeactivated, true );
