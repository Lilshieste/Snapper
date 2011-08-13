/////////////////////////////////////////////////////////////////////////////
// FILENAME:    GenericEvent.js                                                 
// DATE:        9/14/2008                                                  
// AUTHOR:      Joe Miller                                                 
//                                                                         
// DESCRIPTION: Defines a object that can be used for basic event handling.
//                                                                         
// REFERENCES:  Event.js
/////////////////////////////////////////////////////////////////////////////
LSDev.Common.Javascript.GenericEvent = function() {
    var listeners = new Array();
    
    this.addEventListener = function( listener ) {
        listeners.push( listener );
    }
    
    this.removeEventListener = function( listener ) {
        for( var i = 0; i < listeners.length; i++ ) {
            if( listeners[ i ] == listener ) {
                listeners.splice( i, 1 );
                break;
            }
        }
    }
    
    this.clearEventListeners = function() {
        while( listeners.length > 0 ) {
            listeners.pop();
        }
    }
    
    this.dispatchEvent = function() {
        for( var i = 0; i < listeners.length; i++ ) {
            listeners[ i ]();
        }
    }
}

LSDev.Common.Javascript.GenericEvent.prototype = LSDev.Common.Javascript.Event;
LSDev.Common.Javascript.GenericEvent.prototype.base = LSDev.Common.Javascript.Event;
