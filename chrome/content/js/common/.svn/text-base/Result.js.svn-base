/////////////////////////////////////////////////////////////////////////////
// FILENAME:    Result.js
// DATE:        7/03/2009
// AUTHOR:      Joe Miller
//
// DESCRIPTION: Defines a class that contains result information from some action.
//
// REFERENCES:  None
/////////////////////////////////////////////////////////////////////////////
LSDev.Common.Javascript.Util.IResult = {
    // Gets a value indicating whether or not the result represents a successful action.
    //
    // RETURNS void
    success: function() {
        throw new Error( "IResult.success() is not defined for: " + this );
    },
    
    // Gets a message that provides details about the result.
    //
    // RETURNS String
    getMessage: function() {
        throw new Error( "IResult.getMessage() is not defined for: " + this );
    }
}

LSDev.Common.Javascript.Util.Result = function( successful, message ) {
    this.success = function() {
        return successful;
    }
    
    this.getMessage = function() {
        return ( null == message ? "" : message );
    }
}

LSDev.Common.Javascript.Util.Result.prototype = LSDev.Common.Javascript.Util.IResult;
LSDev.Common.Javascript.Util.Result.prototype.base = LSDev.Common.Javascript.Util.IResult;