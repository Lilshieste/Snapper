/////////////////////////////////////////////////////////////////////////////
// FILENAME:    HtmlImageCanvasWidget.js
// DATE:        11/16/2008
// AUTHOR:      Joe Miller
//
// DESCRIPTION: Defines the class HtmlImageCanvasWidget, which represents a
//               image component that can be used as a background to a.
//
// REFERENCES:  HtmlWidget.js
/////////////////////////////////////////////////////////////////////////////
LSDev.Common.Javascript.Widgets.HtmlImageCanvasWidget = function( widgetID, baseDocument, parent ) {
    const NAME = "HtmlImageCanvasWidget";
    
    const OVERLAY_CLASS_VISIBLE = "painter_canvas_with_overlay";
    const OVERLAY_CLASS_HIDDEN = "painter_canvas_without_overlay";
    
    const DEFAULT_VISIBLE = true;
    const DEFAULT_ENABLED = true;
    const DEFAULT_LAYER = 0;
    
    var enabled = DEFAULT_ENABLED;
    
    var self = this;
    var imageDiv = createDiv();
    
    initializeWidget();
    
    if( null == parent ) {
        LSDev.Common.Javascript.Util.HtmlUtilities.GetHtmlNode( baseDocument ).appendChild( imageDiv );
    }
    else {
        parent.getHtmlNode().appendChild(imageDiv);
    }
    
    this.getHtmlNode = function() {
        return imageDiv;
    }
    
    this.release = function() {
        if( null == parent ) {
            LSDev.Common.Javascript.Util.HtmlUtilities.GetHtmlNode( baseDocument ).removeChild( imageDiv );
        }
        else {
            parent.getHtmlNode().removeChild(imageDiv);
        }
    }
    
    function initializeWidget() {
        doSetVisible( DEFAULT_VISIBLE );
        doSetEnabled( DEFAULT_ENABLED );
        doSetLayer( DEFAULT_LAYER );
        
        verifyDocument( baseDocument );
        addPainterStylesheet( baseDocument );
    }
    
    function doGetID() {
        return imageDiv.id;
    }
    
    function doSetID( newID ) {
        imageDiv.id = newID;
    }
    
    function doGetVisible() {
        return ( OVERLAY_CLASS_VISIBLE == imageDiv.getAttribute( "class" ) );
    }
    
    function doSetVisible( isVisible ) {
        if( isVisible ) {
            imageDiv.setAttribute( "class", OVERLAY_CLASS_VISIBLE );
        }
        else {
            imageDiv.setAttribute( "class", OVERLAY_CLASS_HIDDEN );
        }
    }
    
    function doGetEnabled() {
        return enabled;
    }
    
    function doSetEnabled( isEnabled ) {
        enabled = isEnabled;
    }
    
    function doGetLayer() {
        return imageDiv.style.zIndex;
    }
    
    function doSetLayer( layerValue ) {
        imageDiv.style.zIndex = layerValue;
    }
    
    function createDiv() {
        cleanUp();
        
        var div = LSDev.Common.Javascript.Util.HtmlUtilities.CreateDiv( baseDocument );
        div.id = widgetID;
        div.setAttribute( "class", OVERLAY_CLASS_VISIBLE );

        if( baseDocument.width > 0 ) {
            //div.style.width = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( baseDocument.width );
            div.style.width = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( baseDocument.body.clientWidth );
        }
        else {
            // If width could not be determined, try to cover the entire visible area
            div.style.width = LSDev.Common.Javascript.Util.HtmlUtilities.ToPercentageValue( 100 );
        }
        
        if( baseDocument.height > 0 ) {
            //div.style.height = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( baseDocument.height );
            div.style.height = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( baseDocument.body.clientHeight );
        }
        else {
            // If height could not be determined, try to cover the entire visible area
            div.style.height = LSDev.Common.Javascript.Util.HtmlUtilities.ToPercentageValue( 100 );
        }
        
        return div;
    }
    
    function cleanUp() {
        // Clear out anything that is using this ID...
        var existingDiv = baseDocument.getElementById( widgetID );
        if( existingDiv != null ) {
            var html = LSDev.Common.Javascript.Util.HtmlUtilities.GetHtmlNode( baseDocument );
            if( elementContainsChild( html, existingDiv ) ) {
                html.removeChild( existingDiv );
            }
        }
    }
    
    function elementContainsChild( theElement, theChild ) {
        var found = false;
        
        for( var i = 0; i < theElement.childNodes.length; i++ ) {
            if( theElement.childNodes[ i ] == theChild ) {
                found = true;
                break;
            }
        }
        
        return found;
    }
    
    function verifyDocument( baseDocument ) {
        verifyHeadElement( baseDocument );
    }
    
    function verifyHeadElement( baseDocument ) {
        var htmlElm = LSDev.Common.Javascript.Util.HtmlUtilities.GetHtmlNode( baseDocument );
        var headElm = LSDev.Common.Javascript.Util.HtmlUtilities.GetHeadNode( baseDocument );

        if( null == headElm ) {
            headElm = LSDev.Common.Javascript.Util.HtmlUtilities.CreateHead( baseDocument );
            htmlElm.appendChild( headElm );
        }
    }
    
    function addPainterStylesheet( baseDocument ) {
        var html = LSDev.Common.Javascript.Util.HtmlUtilities.GetHtmlNode( baseDocument );
        var existingLink = baseDocument.getElementById( "Painter_Stylesheet" );
        if( existingLink != null ) {
            if( elementContainsChild( html, existingLink ) ) {
                html.removeChild( existingLink );
            }
        }
        
        var styleLink = LSDev.Common.Javascript.Util.HtmlUtilities.CreateLink( baseDocument );
        
        styleLink.setAttribute( "id", "Painter_Stylesheet" );
        styleLink.setAttribute( "type", "text/css" );
        styleLink.setAttribute( "rel", "stylesheet" );
        styleLink.setAttribute( "href", "chrome://snapper/content/css/PainterStyle.css" );
    
        LSDev.Common.Javascript.Util.HtmlUtilities.GetHtmlNode( baseDocument ).appendChild( styleLink );
    }
    
    this.getID = function() {
        return doGetID();
    }
    
    this.setID = function( newID ) {
        doSetID( newID );
    }
    
    this.getName = function() {
        return NAME;
    }
    
    this.getVisible = function() {
        return doGetVisible();
    }
    
    this.setVisible = function( isVisible ) {
        doSetVisible( isVisible );
    }
    
    this.getEnabled = function() {
        return enabled;
    }
    
    this.setEnabled = function( isEnabled ) {
        doSetEnabled( isEnabled );
    }
    
    this.getLayer = function() {
        return doGetLayer();
    }
    
    this.setLayer = function( layerValue ) {
        doSetLayer( layerValue );
    }
}

LSDev.Common.Javascript.Widgets.HtmlImageCanvasWidget.prototype = LSDev.Common.Javascript.Widgets.HtmlWidget;
LSDev.Common.Javascript.Widgets.HtmlImageCanvasWidget.prototype.base = LSDev.Common.Javascript.Widgets.HtmlWidget;