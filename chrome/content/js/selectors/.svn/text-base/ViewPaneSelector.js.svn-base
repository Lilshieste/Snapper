/////////////////////////////////////////////////////////////////////////////
// FILENAME:    ViewPaneSelector.js
// DATE:        7/11/2009
// AUTHOR:      Joe Miller
//
// DESCRIPTION: Defines the class ViewPaneSelector, which has the capability
//               of designating the visible area of the window for selection.
//
// REFERENCES:  Selector.js
//              HtmlUtilities.js
/////////////////////////////////////////////////////////////////////////////
LSDev.Extensions.SnapperNS.ViewPaneSelector = function( target ) {
    this.getSelectionCoords = function() {
        var selectionX = content.scrollX;
        var selectionY = content.scrollY;
        var width = LSDev.Common.Javascript.Util.HtmlUtilities.GetVisibleDocumentWidth( target );
        var height = LSDev.Common.Javascript.Util.HtmlUtilities.GetVisibleDocumentHeight( target );
        
        return new LSDev.Common.Javascript.Rectangle( width, height, selectionX, selectionY );
    }
    
    this.initialize( target );
}

LSDev.Extensions.SnapperNS.ViewPaneSelector.prototype = new LSDev.Extensions.SnapperNS.DirectSpecifySelector();
