/***************************************************************************/
/* FILENAME:    CallbackObject.js                                          */
/* DATE:        3/25/2006                                                  */
/* AUTHOR:      Joe Miller                                                 */
/*                                                                         */
/* DESCRIPTION: Defines the abstract class CallbackObject, which serves as */
/*               the base class for an object used for callback functions. */
/*                                                                         */
/* REFERENCES:  None.                                                      */
/***************************************************************************/

LSDev.Common.Javascript.CallbackObject = {
    // Stores a back reference to itself.
    self: null,
    
    // Stores a reference to the calling object.
    caller: null,
    
    // FUNCTION:    initialize
    // PARAMETERS:  callingObject - A reference to the calling object.
    // DESCRIPTION: Initializes the CallbackObject, with the specified
    //               calling object.
    initialize: function( callingObject ) {
        self = this;
        caller = callingObject;
    },
    
    // FUNCTION:    callbackFunction
    // PARAMETERS:  e - An object containing event data.
    // DESCRIPTION: Defines the callback function of the object.
    callbackFunction: function( e ) {
        throw new Error( "The method \"callbackFunction\" is not defined for: " + this );
    }
}