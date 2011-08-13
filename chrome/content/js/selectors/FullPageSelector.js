/////////////////////////////////////////////////////////////////////////////
// FILENAME:    FullPageSelector.js
// DATE:        7/05/2009
// AUTHOR:      Joe Miller
//
// DESCRIPTION: Defines the class FullPageSelector, which has the capability
//               of designating an entire page for selection.
//
// REFERENCES:  Selector.js
/////////////////////////////////////////////////////////////////////////////
LSDev.Extensions.SnapperNS.FullPageSelector = function( target ) {
    this.getSelectionCoords = function() {
        var selectionX = 0;
        var selectionY = 0;
        var width = getWidth();
        var height = getHeight();
        
        return new LSDev.Common.Javascript.Rectangle( width, height, selectionX, selectionY );
    }
    
    function getWidth() {
        var width = LSDev.Common.Javascript.Util.HtmlUtilities.GetFullDocumentWidth( target );
        
        return width;
    }
    
    function getHeight() {
        var height = LSDev.Common.Javascript.Util.HtmlUtilities.GetFullDocumentHeight( target );
        
        return height;
    }
    
    this.initialize( target );
}

LSDev.Extensions.SnapperNS.FullPageSelector.prototype = new LSDev.Extensions.SnapperNS.DirectSpecifySelector();
