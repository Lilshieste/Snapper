/////////////////////////////////////////////////////////////////////////////
// FILENAME:    DirectSpecifySelector.js
// DATE:        7/07/2009
// AUTHOR:      Joe Miller
//
// DESCRIPTION: Defines the class DirectSpecifySelector, which has the capability
//               of designating a specific area of a page for selection.
//
// REFERENCES:  Selector.js
/////////////////////////////////////////////////////////////////////////////
LSDev.Extensions.SnapperNS.DirectSpecifySelector = function( target ) {
    const IS_PERSISTENT = false;
    
    var self = this;
    
    var selectionTarget = null;
    var isSelecting = false;
    var isActivated = false;
    
    function initializeSelector( target ) {
        selectionTarget = target;
        
        isSelecting = false;
        isActivated = false;
    }
    
    this.initialize = function( target ) {
        initializeSelector( target );
    }
    
    this.activate = function() {
        if( !isActivated ) {
            isActivated = true;
            
            this.onSelectionComplete.dispatchEvent();
        }
    }
    
    this.deactivate = function() {
        if( isActivated ) {
            isActivated = false;
        }
    }
    
    this.isPersistent = function() {
        return IS_PERSISTENT;
    }
    
    this.show = function() {
        // Nothing to show
    }
    
    this.hide = function() {
        // Nothing to hide
    }
    
    this.getSelectionTarget = function() {
        return selectionTarget;
    }
    
    this.setSelectionTarget = function( newTarget ) {
        initializeSelector( newTarget );
    }
    
    // Child classes need to implement this
    this.getSelectionCoords = function() {
        throw new Error( "Selector.getSelectionCoords() is not defined for: " + this );
    }
    
    this.getLineColor = function() {
        return "#000000";
    }
    
    this.setLineColor = function( lineColor ) {
        // Nothing to set
    }
    
    this.onSelectionComplete = new LSDev.Common.Javascript.GenericEvent();
    
    this.initialize( target );
}

LSDev.Extensions.SnapperNS.DirectSpecifySelector.prototype = LSDev.Extensions.SnapperNS.Selector;
LSDev.Extensions.SnapperNS.DirectSpecifySelector.prototype.base = LSDev.Extensions.SnapperNS.Selector;
