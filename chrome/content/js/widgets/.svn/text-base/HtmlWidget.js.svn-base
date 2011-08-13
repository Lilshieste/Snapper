/////////////////////////////////////////////////////////////////////////////
// FILENAME:    HtmlWidget.js
// DATE:        5/12/2008
// AUTHOR:      Joe Miller
//
// DESCRIPTION: Defines the base class HtmlWidget, which represents an
//               interactive HTML control.
//
// REFERENCES:  Widget.js
/////////////////////////////////////////////////////////////////////////////
LSDev.Common.Javascript.Widgets.HtmlWidget = {
    // Gets the node of the HTML DOM that represents the HTML widget.
    //
    // Returns HTML DOM node (e.g., Element)
    getHtmlNode: function() {
        throw new Error( "HtmlWidget.getHtmlNode() is not defined for: " + this );
    },
    
    // Removes the widget from its parent, in preparation for disposal.
    //
    // RETURNS void
    release: function() {
        throw new Error( "HtmlWidget.release() is not defined for: " + this );
    }
}

LSDev.Common.Javascript.Widgets.HtmlWidget.prototype = LSDev.Common.Javascript.Widgets.Widget;
LSDev.Common.Javascript.Widgets.HtmlWidget.prototype.base = LSDev.Common.Javascript.Widgets.Widget;