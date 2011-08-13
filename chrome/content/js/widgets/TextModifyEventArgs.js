/////////////////////////////////////////////////////////////////////////////
// FILENAME:    TextModifyEventArgs.js
// DATE:        5/16/2009
// AUTHOR:      Joe Miller
//
// DESCRIPTION: Defines an event args class used to store information about
//               the modification of a text entry.
//
// REFERENCES:  EventArgs.js
/////////////////////////////////////////////////////////////////////////////
LSDev.Common.Javascript.Widgets.TextModifyEventArgs = function( theSender, theText ) {
    var text;
    
    this.getSender = function() {
        return theSender;
    }
    
    this.getText = function() {
        return text;
    }
    
    this.setText = function( newText ) {
        text = newText;
    }
    
    this.setText( theText );
}

LSDev.Common.Javascript.Widgets.TextModifyEventArgs.prototype = LSDev.Common.Javascript.EventArgs;
LSDev.Common.Javascript.Widgets.TextModifyEventArgs.prototype.base = LSDev.Common.Javascript.EventArgs;
