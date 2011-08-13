/////////////////////////////////////////////////////////////////////////////
// FILENAME:    HtmlRectangleWidget.js
// DATE:        9/22/2008
// AUTHOR:      Joe Miller
//
// DESCRIPTION: Defines the class HtmlRectangleWidget, which represents a
//               rectangle component that exists within an HTML document.
//
// REFERENCES:  HtmlWidget.js
/////////////////////////////////////////////////////////////////////////////
// CONSTRUCTOR
//
// PARAMS
// widgetID (String): unique ID of the widget instance
// baseDocument (HTML document): HTML document to which the widget will belong
// [optional] parent (HtmlWidget): The HtmlWidget in which the widget is contained.
//  If no parent widget is defined, the widget will be added directly to the HTML document.
//
LSDev.Common.Javascript.Widgets.HtmlRectangleWidget = function( widgetID, baseDocument, parent ) {
    const NAME = "HtmlRectangleWidget";

    const ANCHOR_BACKGROUND_COLOR = "#ffffff";
    const ANCHOR_BORDER_COLOR = "#000000";
    const ANCHOR_BORDER_STYLE = LSDev.Common.Javascript.Util.HtmlUtilities.CssBorderStyleSolid;
    const ANCHOR_BORDER_WIDTH = 1;
    const ANCHOR_POSITION = LSDev.Common.Javascript.Util.HtmlUtilities.CssPositionAbsolute;
    const ANCHOR_WIDTH = 5;
    const ANCHOR_HEIGHT = 5;
    const ANCHOR_OFFSET = 3;
    
    const MIN_WIDTH = 1;
    const MIN_HEIGHT = 1;
    const MIN_BORDER_WIDTH = 1;
    
    const DEFAULT_VISIBLE = true;
    const DEFAULT_ENABLED = true;
    const DEFAULT_MOVABLE = false;
    const DEFAULT_RESIZABLE = false;
    const DEFAULT_ISMOVING = false;
    const DEFAULT_ISRESIZING = false;
    const DEFAULT_WIDTH = MIN_WIDTH;
    const DEFAULT_HEIGHT = MIN_HEIGHT;
    const DEFAULT_POSX = 0;
    const DEFAULT_POSY = 0;
    const DEFAULT_BORDER_COLOR = "#000000";
    const DEFAULT_BACKGROUND_COLOR = null;
    const DEFAULT_BORDER_WIDTH = MIN_BORDER_WIDTH;
    const DEFAULT_LAYER = 0;
    const DEFAULT_POSITION = new LSDev.Common.Javascript.Point(0, 0);
    
    var anchor_nw = null;
    var anchor_w = null;
    var anchor_sw = null;
    var anchor_n = null;
    var anchor_s = null;
    var anchor_ne = null;
    var anchor_e = null;
    var anchor_se = null;
    
    var enabled = DEFAULT_ENABLED;
    var movable = DEFAULT_MOVABLE;
    var resizable = DEFAULT_RESIZABLE;
    var isMoving = DEFAULT_ISMOVING;
    var isResizing = DEFAULT_ISRESIZING;
    
    var adjStartX = 0;
    var adjStartY = 0;
    var adjEndX = 0;
    var adjEndY = 0;
    
    var adjOffsetX = 0;
    var adjOffsetY = 0;
    
    this.onMouseDown = new LSDev.Common.Javascript.ParamEvent();
    this.onMouseMove = new LSDev.Common.Javascript.ParamEvent();
    this.onMouseUp = new LSDev.Common.Javascript.ParamEvent();
    this.onClick = new LSDev.Common.Javascript.ParamEvent();
    this.onDoubleClick = new LSDev.Common.Javascript.ParamEvent();
    this.onResize = new LSDev.Common.Javascript.GenericEvent();
    this.onMove = new LSDev.Common.Javascript.GenericEvent();
    
    var self = this;
    var myDiv = createDiv();
    
    // TODO: Consider resurrecting this at some point...
    //var boundingArea;
    
    createAnchors();
    
    initializeWidget();
    
    if( null == parent ) {
        // Just add the div to the page
        LSDev.Common.Javascript.Util.HtmlUtilities.GetHtmlNode( baseDocument ).appendChild( myDiv );
    }
    else {
        // Add the div to its parent's node
        parent.getHtmlNode().appendChild( myDiv );
    }
    
    
    function initializeWidget() {
        doSetID( widgetID );
        doSetVisible( DEFAULT_VISIBLE );
        doSetEnabled( DEFAULT_ENABLED );
        doSetWidth( DEFAULT_WIDTH );
        doSetHeight( DEFAULT_HEIGHT );
        doSetPos( DEFAULT_POSITION );
        doSetBorderColor( DEFAULT_BORDER_COLOR );
        doSetBackgroundColor( DEFAULT_BACKGROUND_COLOR );
        doSetBorderWidth( DEFAULT_BORDER_WIDTH );
        doSetLayer( DEFAULT_LAYER );
        
        buildMouseEvents();
    }
    
    function doGetID() {
        return myDiv.id;
    }
    
    function doSetID( newID ) {
        myDiv.id = newID;
    }
    
    function doGetVisible() {
        return ( null == myDiv.style.display );
    }
    
    function doSetVisible( isVisible ) {
        if( isVisible ) {
            myDiv.style.display = null;
        }
        else {
            myDiv.style.display = LSDev.Common.Javascript.Util.HtmlUtilities.CssDisplayNone;
        }
    }
    
    function doGetEnabled() {
        return enabled;
    }
    
    function doSetEnabled( isEnabled ) {
        enabled = isEnabled;
    }
    
    function doGetMovable() {
        return movable;
    }
    
    function doSetMovable( isMovable ) {
        movable = isMovable;
    }
    
    function doGetResizable() {
        return movable;
    }
    
    function doSetResizable( isResizable ) {
        resizable = isResizable;
        
        if( resizable ) {
            showAnchors();
        }
        else {
            hideAnchors();
        }
    }
    
    function doGetLayer() {
        return myDiv.style.zIndex;
    }
    
    function doSetLayer( layerValue ) {
        myDiv.style.zIndex = layerValue;
    }
    
    //////////
    function createAnchors() {
        anchor_nw = createAnchor( LSDev.Common.Javascript.Util.HtmlUtilities.CssCursorResizeNorthWest );
        anchor_w = createAnchor( LSDev.Common.Javascript.Util.HtmlUtilities.CssCursorResizeWest );
        anchor_sw = createAnchor( LSDev.Common.Javascript.Util.HtmlUtilities.CssCursorResizeSouthWest );
        anchor_n = createAnchor( LSDev.Common.Javascript.Util.HtmlUtilities.CssCursorResizeNorth );
        anchor_s = createAnchor( LSDev.Common.Javascript.Util.HtmlUtilities.CssCursorResizeSouth );
        anchor_ne = createAnchor( LSDev.Common.Javascript.Util.HtmlUtilities.CssCursorResizeNorthEast );
        anchor_e = createAnchor( LSDev.Common.Javascript.Util.HtmlUtilities.CssCursorResizeEast );
        anchor_se = createAnchor( LSDev.Common.Javascript.Util.HtmlUtilities.CssCursorResizeSouthEast );
        
        myDiv.appendChild( anchor_nw );
        myDiv.appendChild( anchor_w );
        myDiv.appendChild( anchor_sw );
        myDiv.appendChild( anchor_n );
        myDiv.appendChild( anchor_s );
        myDiv.appendChild( anchor_ne );
        myDiv.appendChild( anchor_e );
        myDiv.appendChild( anchor_se );
    }
    
    function createAnchor( cursorStyle ) {
        var theAnchor = LSDev.Common.Javascript.Util.HtmlUtilities.CreateDiv( baseDocument );
        prepareAnchor( theAnchor, cursorStyle );
        
        return theAnchor;
    }
    
    function prepareAnchor( theAnchor, cursorStyle ) {
        theAnchor.id = "___" + cursorStyle;
        theAnchor.style.position = ANCHOR_POSITION;
        theAnchor.style.backgroundColor = ANCHOR_BACKGROUND_COLOR;
        theAnchor.style.borderStyle = ANCHOR_BORDER_STYLE;
        theAnchor.style.borderWidth = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( ANCHOR_BORDER_WIDTH );
        theAnchor.style.height = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( ANCHOR_HEIGHT );
        theAnchor.style.width = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( ANCHOR_WIDTH );
        theAnchor.style.display = LSDev.Common.Javascript.Util.HtmlUtilities.CssDisplayNone;
        theAnchor.style.cursor = cursorStyle;
    }
    
    function showAnchors() {
        anchor_nw.style.display = null;
        anchor_w.style.display = null;
        anchor_sw.style.display = null;
        anchor_n.style.display = null;
        anchor_s.style.display = null;
        anchor_ne.style.display = null;
        anchor_e.style.display = null;
        anchor_se.style.display = null;
    }
    
    function hideAnchors() {
        anchor_nw.style.display = LSDev.Common.Javascript.Util.HtmlUtilities.CssDisplayNone;
        anchor_w.style.display = LSDev.Common.Javascript.Util.HtmlUtilities.CssDisplayNone;
        anchor_sw.style.display = LSDev.Common.Javascript.Util.HtmlUtilities.CssDisplayNone;
        anchor_n.style.display = LSDev.Common.Javascript.Util.HtmlUtilities.CssDisplayNone;
        anchor_s.style.display = LSDev.Common.Javascript.Util.HtmlUtilities.CssDisplayNone;
        anchor_ne.style.display = LSDev.Common.Javascript.Util.HtmlUtilities.CssDisplayNone;
        anchor_e.style.display = LSDev.Common.Javascript.Util.HtmlUtilities.CssDisplayNone;
        anchor_se.style.display = LSDev.Common.Javascript.Util.HtmlUtilities.CssDisplayNone;
    }
    
    function positionAnchors() {
        var left = -ANCHOR_OFFSET;
        var center = ( doGetWidth() / 2 )- ANCHOR_OFFSET;
        var right = doGetWidth() - ANCHOR_OFFSET;
        
        var top = -ANCHOR_OFFSET;
        var middle = ( doGetHeight() / 2 )- ANCHOR_OFFSET;
        var bottom = doGetHeight() - ANCHOR_OFFSET;
        
        anchor_nw.style.left = anchor_w.style.left = anchor_sw.style.left = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( left );
        anchor_n.style.left = anchor_s.style.left = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( center );
        anchor_ne.style.left = anchor_e.style.left = anchor_se.style.left = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( right );
        
        anchor_nw.style.top = anchor_n.style.top = anchor_ne.style.top = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( top );
        anchor_w.style.top = anchor_e.style.top = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( middle );
        anchor_sw.style.top = anchor_s.style.top = anchor_se.style.top = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( bottom );
    }
    
    //////////
    
    function doGetWidth() {
        return LSDev.Common.Javascript.Util.HtmlUtilities.ParsePixelValue( myDiv.style.width );
    }
    
    function doSetWidth( newWidth ) {
        if( newWidth < MIN_WIDTH ) {
            newWidth = MIN_WIDTH;
        }
        
        myDiv.style.width = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( newWidth );
        
        positionAnchors();
    }
    
    function doGetHeight() {
        return LSDev.Common.Javascript.Util.HtmlUtilities.ParsePixelValue( myDiv.style.height );
    }
    
    function doSetHeight( newHeight ) {
        if( newHeight < MIN_HEIGHT ) {
            newHeight = MIN_HEIGHT;
        }
    
        myDiv.style.height = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( newHeight );
        
        // Do I want to use this approach?
        positionAnchors();
    }
    
    function doGetPos() {
        var x = LSDev.Common.Javascript.Util.HtmlUtilities.ParsePixelValue( myDiv.style.left );
        var y = LSDev.Common.Javascript.Util.HtmlUtilities.ParsePixelValue( myDiv.style.top );
        
        return new LSDev.Common.Javascript.Point( x, y );
    }
    
    function doSetPos( newPos ) {
        myDiv.style.left = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( newPos.getX() );
        myDiv.style.top = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( newPos.getY() );
        
        // Do I want to use this approach?
        positionAnchors();
    }
    
    function doGetBorderColor() {
        return myDiv.style.borderColor;
    }
    
    function doSetBorderColor( color ) {
        myDiv.style.borderColor = color;
    }
    
    function doGetBackgroundColor() {
        return myDiv.style.backgroundColor;
    }
    
    function doSetBackgroundColor( color ) {
        myDiv.style.backgroundColor = color;
    }
    
    function doGetBorderWidth() {
        return myDiv.style.borderWidth;
    }
    
    function doSetBorderWidth( newWidth ) {
        myDiv.style.borderWidth = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( newWidth );
    }
    
    function createDiv() {
        cleanUp();
    
        var theDiv = LSDev.Common.Javascript.Util.HtmlUtilities.CreateDiv( baseDocument );
        theDiv.style.position = LSDev.Common.Javascript.Util.HtmlUtilities.CssPositionAbsolute;
        theDiv.style.borderStyle = LSDev.Common.Javascript.Util.HtmlUtilities.CssBorderStyleSolid;
        
        // TESTING
        theDiv.style.zIndex = 50000000;
        
        return theDiv;
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
    
    this.getName = function() {
        return NAME;
    }
    
    this.getID = function() {
        return doGetID();
    }
    
    this.setID = function( newID ) {
        doSetID( newID );
    }
    
    this.getVisible = function() {
        return doGetVisible();
    }
    
    this.setVisible = function( isVisible ) {
        doSetVisible( isVisible );
    }
    
    this.getEnabled = function() {
        return doGetEnabled();
    }
    
    this.setEnabled = function( isEnabled ) {
        doSetEnabled( isEnabled );
    }
    
    this.getMovable = function() {
        return doGetMovable();
    }
    
    this.setMovable = function( isMovable ) {
        doSetMovable( isMovable );
    }
    
    this.getResizable = function() {
        return doGetResizable();
    }
    
    this.setResizable = function( isResizable ) {
        doSetResizable( isResizable );
    }
    
    this.getWidth = function() {
        return doGetWidth();
    }
    
    this.setWidth = function( newWidth ) {
        doSetWidth( newWidth );
    }
    
    this.getHeight = function() {
        return doGetHeight();
    }
    
    this.setHeight = function( newHeight ) {
        doSetHeight( newHeight );
    }

    this.getPos = function() {
        return doGetPos();
    }
    
    this.setPos = function( newPos ) {
        doSetPos( newPos );
    }
    
    this.getHtmlNode = function() {
        return myDiv;
    }
    
    this.release = function() {
        if( null == parent ) {
            LSDev.Common.Javascript.Util.HtmlUtilities.GetHtmlNode( baseDocument ).removeChild( myDiv );
        }
        else {
            parent.getHtmlNode().removeChild( myDiv );
        }
    }
    
    this.getBorderColor = function() {
        return doGetBorderColor();
    }
    
    this.setBorderColor = function( color ) {
        doSetBorderColor( color );
    }
    
    this.getBackgroundColor = function() {
        return doGetBackgroundColor();
    }
    
    this.setBackgroundColor = function( color ) {
        doSetBackgroundColor( color );
    }
    
    this.getBorderWidth = function() {
        return doGetBorderWidth();
    }
    
    this.setBorderWidth = function( newWidth ) {
        doSetBorderWidth( newWidth );
    }
    
    this.getLayer = function() {
        return doGetLayer();
    }
    
    this.setLayer = function( layerValue ) {
        doSetLayer( layerValue );
    }
    
    function mouseDownCallback( e ) {
        // Call focus to us, otherwise FF might try to drag our element somewhere...
        myDiv.focus();
    
        var hitAnchor = tryResize( e );
        if( hitAnchor != null ) {
            beginResize( e, hitAnchor );
        }
        else if( tryMove( e ) ) {
            // If mousedown, and not resizing, then assume moving
            beginMove( e );
        }
    
        self.onMouseDown.dispatchEvent( e );
    }
    
    function tryResize( e ) {
        if( anchorWasHit( e ) ) {
            return e.target;
        }
        else {
            return null;
        }
    }
    
    function anchorWasHit( e ) {
        return ( e.target == anchor_nw ||
                    e.target == anchor_w ||
                    e.target == anchor_sw ||
                    e.target == anchor_n ||
                    e.target == anchor_s ||
                    e.target == anchor_ne ||
                    e.target == anchor_e ||
                    e.target == anchor_se );
    }
    
    // TODO: Consider resurrecting this at some point...
    //function validateAgainstBoundingArea( rect ) {
    //    //LSDev.Extensions.SnapperNS.SnapperUtilities.ReconcileRectangleWithBoundingRectangle( rect, boundingArea );
    //}
    
    function tryMove( e ) {
        return true;
    }
    
    function beginMove( e ) {
        isMoving = true;
        
        adjStartX = e.pageX;
        adjStartY = e.pageY;
        
        adjOffsetX = e.pageX - doGetPos().getX();
        adjOffsetY = e.pageY - doGetPos().getY();
    }
    
    var movePoint = new LSDev.Common.Javascript.Point(0, 0);
    function updateMove( e ) {
        movePoint.setX( e.pageX - adjOffsetX );
        movePoint.setY( e.pageY - adjOffsetY );
        
        // TODO: Consider resurrecting this at some point...
        //var currentWidth = doGetWidth();
        //var currentHeight = doGetHeight();
        //var rect = new LSDev.Common.Javascript.Rectangle( currentWidth, currentHeight, movePoint.getX(), movePoint.getY() );
        //validateAgainstBoundingArea( rect, boundingArea );
        //movePoint.setX( rect.x );
        //movePoint.setY( rect.y );
        
        doSetPos( movePoint );
        
        self.onMove.dispatchEvent();
    }
    
    function endMove( e ) {
        isMoving = false;
    }
    
    // Move these to a better place...
    var resizingTop = false;
    var resizingBottom = false;
    var resizingLeft = false;
    var resizingRight = false;
    
    function beginResize( e, hitAnchor ) {
        isResizing = true;
        
        if( hitAnchor == anchor_nw ||
                hitAnchor == anchor_n ||
                hitAnchor == anchor_ne ) {
            beginResizeTop( e, hitAnchor );
        }
        else if( hitAnchor == anchor_sw ||
                    hitAnchor == anchor_s ||
                    hitAnchor == anchor_se ) {
            beginResizeBottom( e, hitAnchor );
        }
        
        if( hitAnchor == anchor_nw ||
                hitAnchor == anchor_w ||
                hitAnchor == anchor_sw ) {
            beginResizeLeft( e, hitAnchor );
        }
        else if( hitAnchor == anchor_ne ||
                    hitAnchor == anchor_e ||
                    hitAnchor == anchor_se ) {
            beginResizeRight( e, hitAnchor );
        }
    }
    
    function beginResizeTop( e, hitAnchor ) {
        resizingTop = true;
        
        doBeginResize( e );
    }
    
    function beginResizeBottom( e, hitAnchor ) {
        resizingBottom = true;
        
        doBeginResize( e );
    }
    
    function beginResizeLeft( e, hitAnchor ) {
        resizingLeft = true;
        
        doBeginResize( e );
    }
    
    function beginResizeRight( e, hitAnchor ) {
        resizingRight = true;
        
        doBeginResize( e );
    }
    
    var grabPos;
    var currentPos;
    var currentWidth;
    var currentHeight;
    
    function doBeginResize( e ) {
        grabPos = new LSDev.Common.Javascript.Point( e.pageX, e.pageY );
        
        currentPos = doGetPos();
        currentWidth = doGetWidth();
        currentHeight = doGetHeight();
    }
    
    function updateResize( e ) {
        var pos = doGetPos();
        var newX = pos.getX();
        var newY = pos.getY();
        
        if( resizingLeft ) {
            var dx = grabPos.getX() - e.pageX;
            
            newX = Math.min( currentPos.getX() - dx, currentPos.getX() + currentWidth );
            doSetWidth( currentWidth + dx );
        }
        else if( resizingRight ) {
            var dx = grabPos.getX() - e.pageX;
            
            doSetWidth( currentWidth - dx);
        }
        
        if( resizingTop ) {
            var dy = grabPos.getY() - e.pageY;
            
            newY = Math.min( currentPos.getY() - dy, currentPos.getY() + currentHeight );
            doSetHeight( currentHeight - (-dy) );
        }
        else if( resizingBottom ) {
            var dy = grabPos.getY() - e.pageY;
            
            doSetHeight( currentHeight - dy );
        }
        
        doSetPos( new LSDev.Common.Javascript.Point( newX, newY ) );
        
        self.onResize.dispatchEvent();
    }
    
    function endResize( e ) {
        isResizing = false;
        
        resizingLeft = false;
        resizingRight = false;
        resizingTop = false;
        resizingBottom = false;
        
        self.onResize.dispatchEvent();
    }
    
    function mouseMoveCallback( e ) {
        if( isResizing ) {
            updateResize( e );
        }
        else if( isMoving ) {
            updateMove( e );
        }
    
        self.onMouseMove.dispatchEvent( e );
    }
    
    function mouseUpCallback( e ) {
        if( isResizing ) {
            endResize( e );
        }
        else if( isMoving ) {
            endMove( e );
        }
    
        self.onMouseUp.dispatchEvent( e );
    }
    
    function clickCallback( e ) {
        self.onClick.dispatchEvent( e );
    }
    
    function doubleClickCallback( e ) {
        self.onDoubleClick.dispatchEvent( e );
    }
    
    function buildMouseEvents() {
    
        baseDocument.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnMouseUp, mouseUpCallback, true);
        baseDocument.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnMouseMove, mouseMoveCallback, true);  // Handle mouse movement at document level, to make sure cursor doesn't leave the div behind...
        //baseDocument.addEventListener("dblclick", function(e){myDiv.focus();}, false);  // Force focus back to div, otherwise FF will try to drag the element
        
        myDiv.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnMouseDown, mouseDownCallback, false);
        //myDiv.addEventListener("mouseup", mouseUpCallback, false);  // Let document handle this; it sometimes loses track of the mouseUp otherwise
        //myDiv.addEventListener("mousemove", mouseMoveCallback, false);  // Let document handle this; it sometimes loses track of the mouseMove otherwise
        myDiv.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnMouseMove, function(e){if(doGetMovable())this.style.cursor = "move";}, false);
        myDiv.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnClick, clickCallback, false);
        myDiv.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnDoubleClick, doubleClickCallback, false);
    }
}

LSDev.Common.Javascript.Widgets.HtmlRectangleWidget.prototype = LSDev.Common.Javascript.Widgets.HtmlWidget;
LSDev.Common.Javascript.Widgets.HtmlRectangleWidget.prototype.base = LSDev.Common.Javascript.Widgets.HtmlWidget;
