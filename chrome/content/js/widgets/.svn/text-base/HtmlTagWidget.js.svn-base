/////////////////////////////////////////////////////////////////////////////
// FILENAME:    HtmlTagWidget.js
// DATE:        10/7/2009
// AUTHOR:      Joe Miller
//
// DESCRIPTION: Defines the class HtmlTagWidget, which represents a component
//               that serves as a cross between a button and label.
//
// REFERENCES:  HtmlWidget.js
//              HtmlLabelWidget.js
/////////////////////////////////////////////////////////////////////////////
LSDev.Common.Javascript.Widgets.HtmlTagWidget = function( widgetID, baseDocument, parent ) {
    const NAME = "HtmlTagWidget";

    const ID_LABEL = widgetID + "__tag_label__";
    
    const MIN_WIDTH = 1;
    const MIN_HEIGHT = 1;
    const MIN_BORDER_WIDTH = 1;
    
    const DEFAULT_VISIBLE = true;
    const DEFAULT_ENABLED = true;
    const DEFAULT_WIDTH = MIN_WIDTH;
    const DEFAULT_HEIGHT = MIN_HEIGHT;
    const DEFAULT_TEXT_COLOR = "#000000";
    const DEFAULT_BORDER_COLOR = "#000000";
    const DEFAULT_BACKGROUND_COLOR = null;
    const DEFAULT_BORDER_WIDTH = MIN_BORDER_WIDTH;
    const DEFAULT_LAYER = 0;
    const DEFAULT_POSITION = new LSDev.Common.Javascript.Point(0, 0);
    
    var enabled = DEFAULT_ENABLED;
    
    var self = this;
    
    var myDiv;
    var labelWidget;
    
    this.onMouseDown = new LSDev.Common.Javascript.ParamEvent();
    this.onMouseMove = new LSDev.Common.Javascript.ParamEvent();
    this.onMouseUp = new LSDev.Common.Javascript.ParamEvent();
    this.onClick = new LSDev.Common.Javascript.ParamEvent();
    this.onDoubleClick = new LSDev.Common.Javascript.ParamEvent();
    
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
    
    this.getTextColor = function() {
        return doGetTextColor();
    }
    
    this.setTextColor = function( color ) {
        doSetTextColor( color );
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
    
    this.getText = function() {
        return doGetText();
    }
    
    this.setText = function( newText ) {
        doSetText( newText );
    }
    
    this.inheritWidth = function() {
        doInheritWidth();
    }
    
    this.inheritHeight = function() {
        doInheritHeight();
    }
    
    function createLabelWidget() {
        var label = new LSDev.Common.Javascript.Widgets.HtmlLabelWidget( ID_LABEL, baseDocument, self );
        
        return label;
    }
    
    function initializeWidget() {
        doSetID( widgetID );
        doSetVisible( DEFAULT_VISIBLE );
        doSetEnabled( DEFAULT_ENABLED );
        doSetWidth( DEFAULT_WIDTH );
        doSetHeight( DEFAULT_HEIGHT );
        doSetPos( DEFAULT_POSITION );
        doSetTextColor( DEFAULT_TEXT_COLOR );
        doSetBorderColor( DEFAULT_BORDER_COLOR );
        doSetBackgroundColor( DEFAULT_BACKGROUND_COLOR );
        doSetBorderWidth( DEFAULT_BORDER_WIDTH );
        
        self.getHtmlNode().style.zIndex = 200000;
        self.getHtmlNode().style.position = "fixed";
        self.getHtmlNode().style.cursor = "pointer";
        labelWidget.getHtmlNode().style.borderStyle = "solid";
        
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
    
    function doGetWidth() {
        return labelWidget.getWidth();
    }
    
    function doSetWidth( newWidth ) {
        // Let the width be determined by the contents
    }
    
    function doGetHeight() {
        return labelWidget.getHeight();
    }
    
    function doSetHeight( newHeight ) {
        // Let the height be determined by the contents
    }
    
    function doGetPos() {
        var x = LSDev.Common.Javascript.Util.HtmlUtilities.ParsePixelValue( myDiv.style.left );
        var y = LSDev.Common.Javascript.Util.HtmlUtilities.ParsePixelValue( myDiv.style.top );
        
        return new LSDev.Common.Javascript.Point( x, y );
    }
    
    function doSetPos( newPos ) {
        myDiv.style.left = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( newPos.getX() );
        myDiv.style.top = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( newPos.getY() );
    }
    
    function doGetTextColor() {
        return labelWidget.getTextColor();
    }
    
    function doSetTextColor( color ) {
        labelWidget.setTextColor( color );
    }
    
    function doGetBorderColor() {
        return labelWidget.getBorderColor();
    }
    
    function doSetBorderColor( color ) {
        labelWidget.setBorderColor( color );
    }
    
    function doGetBackgroundColor() {
        return labelWidget.getBackgroundColor();
    }
    
    function doSetBackgroundColor( color ) {
        labelWidget.setBackgroundColor( color );
    }
    
    function doGetBorderWidth() {
        return labelWidget.getBorderWidth();
    }
    
    function doSetBorderWidth( newWidth ) {
        labelWidget.setBorderWidth( newWidth );
    }
    
    function doGetLayer() {
        return myDiv.style.zIndex;
    }
    
    function doSetLayer( layerValue ) {
        myDiv.style.zIndex = layerValue;
    }
    
    function doGetText() {
        return labelWidget.getText();
    }
    
    function doSetText( newText ) {
        labelWidget.setText( newText );
    }
    
    function createDiv() {
        var theDiv = LSDev.Common.Javascript.Util.HtmlUtilities.CreateDiv( baseDocument );
        theDiv.style.position = LSDev.Common.Javascript.Util.HtmlUtilities.CssPositionAbsolute;
        theDiv.style.borderStyle = LSDev.Common.Javascript.Util.HtmlUtilities.CssBorderStyleNone;
        theDiv.style.opacity = 0.65;
        
        return theDiv;
    }

    function mouseDownCallback( e ) {
        self.onMouseDown.dispatchEvent( e );
    }
    
    function mouseMoveCallback( e ) {
        self.onMouseMove.dispatchEvent( e );
    }
    
    function mouseUpCallback( e ) {
        self.onMouseUp.dispatchEvent( e );
    }
    
    function clickCallback( e ) {
        self.onClick.dispatchEvent( e );
    }
    
    function doubleClickCallback( e ) {
        self.onDoubleClick.dispatchEvent( e );
    }
    
    function buildMouseEvents() {
        myDiv.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnMouseDown, mouseDownCallback, false );
        myDiv.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnMouseUp, mouseUpCallback, false );
        myDiv.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnMouseMove, mouseMoveCallback, false );
        myDiv.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnClick, clickCallback, false );
        myDiv.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnDoubleClick, doubleClickCallback, false );
        
        myDiv.addEventListener( "mouseover", enterTag, false );
        myDiv.addEventListener( "mouseout", leaveTag, false );
    }
    
    function enterTag( e ) {
        myDiv.style.opacity = 1.0;
        //myDiv.style.fontWeight = "bold";
    }
    
    function leaveTag( e ) {
        myDiv.style.opacity = 0.65;
        //myDiv.style.fontWeight = "normal";
    }

    myDiv = createDiv();
    labelWidget = createLabelWidget();
    
    initializeWidget();
    
    if( null == parent ) {
        LSDev.Common.Javascript.Util.HtmlUtilities.GetHtmlNode( baseDocument ).appendChild( myDiv );
    }
    else {
        parent.getHtmlNode().appendChild( myDiv );
    }
    
    function doInheritWidth() {
        myDiv.style.width = LSDev.Common.Javascript.Util.HtmlUtilities.CssWidthInherit;
        
        labelWidget.inheritWidth();
    }
    
    function doInheritHeight() {
        myDiv.style.height = LSDev.Common.Javascript.Util.HtmlUtilities.CssHeightInherit;
        
        labelWidget.inheritHeight();
    }
}

LSDev.Common.Javascript.Widgets.HtmlTagWidget.prototype = LSDev.Common.Javascript.Widgets.HtmlWidget;
LSDev.Common.Javascript.Widgets.HtmlTagWidget.prototype.base = LSDev.Common.Javascript.Widgets.HtmlWidget;
