/////////////////////////////////////////////////////////////////////////////
// FILENAME:    ParamEvent.js                                                 
// DATE:        11/22/2008                                                  
// AUTHOR:      Joe Miller                                                 
//                                                                         
// DESCRIPTION: Defines a object that can be used for event handling that
//               involves the use of event arguments.
//                                                                         
// REFERENCES:  Event.js
/////////////////////////////////////////////////////////////////////////////
LSDev.Common.Javascript.ParamEvent = function() {
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
    
    this.dispatchEvent = function( e ) {
        for( var i = 0; i < listeners.length; i++ ) {
            listeners[ i ]( e );
        }
    }
    
    this.count = function() { return listeners.length; }
}

LSDev.Common.Javascript.ParamEvent.prototype = LSDev.Common.Javascript.Event;
LSDev.Common.Javascript.ParamEvent.prototype.base = LSDev.Common.Javascript.Event;
