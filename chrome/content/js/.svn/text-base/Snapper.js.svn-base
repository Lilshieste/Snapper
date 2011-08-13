/***************************************************************************/
/* FILENAME:    Snapper.js                                                 */
/* DATE:        3/25/2006                                                  */
/* AUTHOR:      Joe Miller                                                 */
/*                                                                         */
/* DESCRIPTION: Defines the Snapper class, which is capable of taking a    */
/*               focused snapshot within a document.                       */
/*                                                                         */
/* REFERENCES:  Selector.js                                                */
/*                  - Used in displaying a selection box, representing the */
/*                     area in a document to be captured in a snapshot.    */
/*              java.awt.Rectangle                                         */
/*                  - Used in handling the coordinates of the area         */
/*                     included in the snapshot.                           */
/***************************************************************************/
LSDev.Extensions.SnapperNS.Snapper = function() {
    this.baseDoc = null;
    this.selectionProcessor = new LSDev.Extensions.SnapperNS.SnapperSelectionProcessor();
    this.selector = null;
    this.lineColor = LSDev.Extensions.SnapperNS.Snapper.DEFAULT_SELECTION_LINE_COLOR;
    
    this.mouseDownEventCallback = null;
    this.mouseUpEventCallback = null;
    this.mouseMoveEventCallback = null;
    
    this.activated = false;
    this.isProcessing = false;
    
    this.fireActivatedEvent = function() {
        var activatedEvent = this.getEventTarget().createEvent( "Events" );
        
        activatedEvent.initEvent( LSDev.Extensions.SnapperNS.Snapper.EVENT_NAME_ACTIVATED, true, true );
        this.dispatchEvent( activatedEvent );
    }
    
    this.fireDeactivatedEvent = function() {
        var deactivatedEvent = this.getEventTarget().createEvent( "Events" );
        
        deactivatedEvent.initEvent( LSDev.Extensions.SnapperNS.Snapper.EVENT_NAME_DEACTIVATED, true, true );
        this.dispatchEvent( deactivatedEvent );
    }
    
    this.selectionEndedCallback = function( caller ) {
        function func() {
            caller.processSnapping();
        }
        
        return func;
    }
    
    this.getEventTarget = function() {
        return document;
    }
    
    this.getSelectionLineColor = function() {
        return this.lineColor;
    }
    
    this.setSelectionLineColor = function( lineColor ) {
        this.lineColor = lineColor;
    }
}

// STATIC VARIABLE: EVENT_NAME_ACTIVATED
// DESCRIPTION:     Represents the name of the event fired when the Snapper
//                   object is activated.
LSDev.Extensions.SnapperNS.Snapper.EVENT_NAME_ACTIVATED = "activated";

// STATIC VARIABLE: EVENT_NAME_DEACTIVATED
// DESCRIPTION:     Represents the name of the event fired when the Snapper
//                   object is activated.
LSDev.Extensions.SnapperNS.Snapper.EVENT_NAME_DEACTIVATED = "deactivated";

// STATIC VARIABLE: DEFAULT_SELECTION_LINE_COLOR
// DESCRIPTION:     The default color of the Snapper's snapshot selection box.
LSDev.Extensions.SnapperNS.Snapper.DEFAULT_SELECTION_LINE_COLOR = "#ff0000";

// FUNCTION:    initialize
// PARAMETERS:  baseDocument - A reference to the document that will be
//                              associated with the Snapper.
// DESCRIPTION: Initializes the Snapper object, associating it with the
//               specified document.
LSDev.Extensions.SnapperNS.Snapper.prototype.initialize = function( baseDocument ) {
    // If the Snapper is already initialized for this document,
    //  just use the previous initialization.
    if( this.baseDoc != baseDocument ) {
        this.baseDoc = baseDocument;
    }
}

// FUNCTION:    isActive
// PARAMETERS:  None.
// DESCRIPTION: Returns a value indicating whether or not the Snapper object
//               has been activated.
LSDev.Extensions.SnapperNS.Snapper.prototype.isActive = function() {
    return this.activated;
}

// FUNCTION:    toggle
// PARAMETERS:  None.
// DESCRIPTION: Toggles the activation of the Snapper object.
LSDev.Extensions.SnapperNS.Snapper.prototype.toggle = function( toggleOn ) {
    if( null == toggleOn ) {
        toggleOn = !this.isActive();
    }
    
    if( toggleOn ) {
        this.activate();
    }
    else {
        this.deactivate();
    }
}

// FUNCTION:    activate
// PARAMETERS:  baseDocument - A reference to the document that will be
//                              associated with the Snapper.
//                             If no reference is provided, the document
//                              associated with the current window
//                              is used.
// DESCRIPTION: Activates the Snapper object, preparing it for use.
LSDev.Extensions.SnapperNS.Snapper.prototype.activate = function( baseDocument ) {
    var snappingMode = LSDev.Extensions.SnapperNS.SnapperUtilities.Preferences.getSnappingMode();
    this.doActivate( snappingMode, baseDocument );
}

LSDev.Extensions.SnapperNS.Snapper.prototype.doActivate = function( selectorValue, baseDocument ) {
    // If cancel any current activation, if necessary
    if( this.isActive() ) {
        this.deactivate();
    }
    
    if( null == baseDocument ) {
        baseDocument = window.content.document;
    }

    try {
        this.initialize( baseDocument );
        
        this.selector = this.getSelectorByValue( selectorValue, baseDocument );
        
        this.selector.setLineColor( this.lineColor );
        
        this.registerSelectorEvents();
    }
    catch( err ) {
        var message = document.getElementById( "snapper-strings" ).getString( "FatalError" );
        alert( message + err + "\n\nSTACK TRACE:\n" + err.stack );
        
        return;
    }
    
    this.activated = true;
    this.fireActivatedEvent();
    this.selector.activate();
}

LSDev.Extensions.SnapperNS.Snapper.prototype.registerSelectorEvents = function() {
    this.selector.onSelectionComplete.addEventListener( this.selectionEndedCallback( this ) );
}

LSDev.Extensions.SnapperNS.Snapper.prototype.unregisterSelectorEvents = function() {
    this.selector.onSelectionComplete.clearEventListeners();
}

// FUNCTION:    deactivate
// PARAMETERS:  None.
// DESCRIPTION: Deactivates the Snapper object, disabling it.
LSDev.Extensions.SnapperNS.Snapper.prototype.deactivate = function() {
    this.unregisterSelectorEvents()
    
    this.selector.deactivate();
    this.activated = false;
    this.fireDeactivatedEvent();
}

// FUNCTION:    addEventListener
// PARAMETERS:  eventName - The name of the event to listen for.
//              listsner - A reference to the object that is listening
//                          for the event to be dispatched.
//              capture - A boolean value indicating whether or not
//                         the event should be captured.
// DESCRIPTION: Associates the specified listener with the dispatching
//               of the specified event.
LSDev.Extensions.SnapperNS.Snapper.prototype.addEventListener = function( eventName, listener, capture ) {
    document.addEventListener( eventName, listener, capture );
}

// FUNCTION:    addEventListener
// PARAMETERS:  eventName - The name of the event to listen for.
//              listener - A reference to the object that is listening
//                          for the event to be dispatched.
//              capture - A boolean value indicating whether or not
//                         the event should be captured.
// DESCRIPTION: Removes the association of the specified listener with
//               the dispatching of the specified event.
LSDev.Extensions.SnapperNS.Snapper.prototype.removeEventListener = function( eventName, listener, capture ) {
    document.removeEventListener( eventName, listener, capture );
}

// FUNCTION:    dispatchEvent
// PARAMETERS:  theEvent - A reference to the event being dispatched.
// DESCRIPTION: Dispatches the specified event.
LSDev.Extensions.SnapperNS.Snapper.prototype.dispatchEvent = function( theEvent ) {
    this.getEventTarget().dispatchEvent( theEvent );
}

LSDev.Extensions.SnapperNS.Snapper.prototype.getSelector = function( baseDocument ) {
    var snappingMode = LSDev.Extensions.SnapperNS.SnapperUtilities.Preferences.getSnappingMode();
    
    // TODO: Hold onto a single reference, only creating a new one when Snapping mode has changed
    return LSDev.Extensions.SnapperNS.Snapper.prototype.getSelectorByValue( snappingMode, baseDocument );
}

LSDev.Extensions.SnapperNS.Snapper.prototype.getSelectorByValue = function( selectorValue, baseDocument ) {
    switch( selectorValue ) {
        case 1:
            return new LSDev.Extensions.SnapperNS.SimpleSelector( baseDocument );
            break;
            
        case 2:
            return new LSDev.Extensions.SnapperNS.AnchoredSelector( baseDocument );
            break;
        
        case 3:
            return new LSDev.Extensions.SnapperNS.FullPageSelector( baseDocument );
            break;
        
        case 4:
            return new LSDev.Extensions.SnapperNS.ViewPaneSelector( baseDocument );
            break;
        
        case 5:
            return new LSDev.Extensions.SnapperNS.FrameSelector( baseDocument );
            break;
        
        default:
            return new LSDev.Extensions.SnapperNS.SimpleSelector( baseDocument );
    }
}

LSDev.Extensions.SnapperNS.Snapper.prototype.setSelector = function( newSelector ) {
    this.selector = newSelector;
}

// FUNCTION:    processSnapping
// PARAMETERS:  None.
// DESCRIPTION: Processes the currently selected area
LSDev.Extensions.SnapperNS.Snapper.prototype.processSnapping = function() {
    if( !this.isProcessing ) {
        this.isProcessing = true;
        
        // Hide the selector, so it doesn't get "caught" in processing
        this.selector.hide();
        
        try {
            var result = this.selectionProcessor.processSelection( this.selector );
        
            // If the image was processed, then stop snapping
            if( result.success() ) {
                this.deactivate();
                
                if( this.notificationsEnabled() ) {
                    this.showNotification( result );
                }
            }
            else {
                if( this.selector.isPersistent() ) {
                    // Stop hiding the selector, because the user isn't done with it
                    this.selector.show();
                }
                else {
                    // If selector is not persistent, then it needs to be explicitly re-activated
                    this.deactivate();
                }
            }
        }
        catch(ex) {
            alert("An error occurred while processing the snapped image: " + ex);
            
            // Try to deactivate - hopefully this isn't where the problem occurred...
            this.deactivate();
        }
        
        this.isProcessing = false;
    }
}

LSDev.Extensions.SnapperNS.Snapper.prototype.notificationsEnabled = function() {
    var snappingMode = LSDev.Extensions.SnapperNS.SnapperUtilities.Preferences.getSnappingMode();
    var notificationsDisabled = LSDev.Extensions.SnapperNS.SnapperUtilities.Preferences.getDisableNotifications();
    
    switch( snappingMode ) {
        case 1:
        case 2:
            return !notificationsDisabled;
            break;
            
        case 3:
        case 4:
            return true;  // Always display notifications for Full Page and View Pane
            break;
            
        default:
            return !notificationsDisabled;
    }
}

LSDev.Extensions.SnapperNS.Snapper.prototype.showNotification = function( result ) {
    var notification = new LSDev.Common.Javascript.Util.NotificationMoz();
    var notificationTitle = document.getElementById( "snapper-strings" ).getString( "NotificationTitleSnappingComplete" );
    notification.show( notificationTitle, result.getMessage() );
}
