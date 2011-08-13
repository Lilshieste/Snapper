/////////////////////////////////////////////////////////////////////////////
// FILENAME:    Event.js                                                 
// DATE:        11/24/2008                                                  
// AUTHOR:      Joe Miller                                                 
//                                                                         
// DESCRIPTION: Defines a base class for objects used as arguments for a parameterized event.
//                                                                         
// REFERENCES:  None.
/////////////////////////////////////////////////////////////////////////////
LSDev.Common.Javascript.EventArgs = {
    getSender: function() {
        throw new Error( "EventArgs.getSender is not defined for: " + this );
    }
}