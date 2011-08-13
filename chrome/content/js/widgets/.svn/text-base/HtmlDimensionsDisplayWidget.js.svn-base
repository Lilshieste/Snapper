/////////////////////////////////////////////////////////////////////////////
// FILENAME:    HtmlLabelWidget.js
// DATE:        9/22/2008
// AUTHOR:      Joe Miller
//
// DESCRIPTION: Defines the class HtmlDimensionsDisplayWidget, which represents a
//               component that displays a set of "Width x Height" dimensions.
//
// REFERENCES:  HtmlWidget.js
//              HtmlLabelWidget.js
/////////////////////////////////////////////////////////////////////////////
LSDev.Common.Javascript.Widgets.HtmlDimensionsDisplayWidget = function( widgetID, baseDocument, parent ) {
    const NAME = "HtmlDimensionsDisplayWidget";

    const ID_LABEL_WIDTH = widgetID + "__dimensions__width__";
    const ID_LABEL_BY = widgetID + "__dimensions__by__";
    const ID_LABEL_HEIGHT = widgetID + "__dimensions_height__";
    
    const KEY_CODE_TAB = 9;
    
    const MIN_WIDTH = 1;
    const MIN_HEIGHT = 1;
    const MIN_BORDER_WIDTH = 1;
    
    const DEFAULT_VISIBLE = true;
    const DEFAULT_ENABLED = true;
    const DEFAULT_MODIFIABLE = false;
    const DEFAULT_WIDTH = MIN_WIDTH;
    const DEFAULT_HEIGHT = MIN_HEIGHT;
    const DEFAULT_TEXT_COLOR = "#000000";
    const DEFAULT_BORDER_COLOR = "#000000";
    const DEFAULT_BACKGROUND_COLOR = null;
    const DEFAULT_BORDER_WIDTH = MIN_BORDER_WIDTH;
    const DEFAULT_LAYER = 0;
    const DEFAULT_POSITION = new LSDev.Common.Javascript.Point(0, 0);
    
    var enabled = DEFAULT_ENABLED;
    var modifiable = DEFAULT_MODIFIABLE;
    
    var self = this;
    
    var myDiv;
    var labelWidth;
    var labelBy;
    var labelHeight;
    
    this.onMouseDown = new LSDev.Common.Javascript.ParamEvent();
    this.onMouseMove = new LSDev.Common.Javascript.ParamEvent();
    this.onMouseUp = new LSDev.Common.Javascript.ParamEvent();
    this.onClick = new LSDev.Common.Javascript.ParamEvent();
    this.onDoubleClick = new LSDev.Common.Javascript.ParamEvent();
    this.onBeforeDimensionsChange = new LSDev.Common.Javascript.GenericEvent();
    this.onAfterDimensionsChange = new LSDev.Common.Javascript.GenericEvent();
    
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
    
    this.getDimensionWidth = function() {
        return LSDev.Common.Javascript.Util.HtmlUtilities.ParsePixelValue( labelWidth.getText() );
    }
    
    this.setDimensionWidth = function( newDimensionWidth ) {
        labelWidth.setText( LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( newDimensionWidth ) );
        
        setLabelPositions();
    }
    
    this.getDimensionHeight = function() {
        return LSDev.Common.Javascript.Util.HtmlUtilities.ParsePixelValue( labelHeight.getText() );
    }
    
    this.setDimensionHeight = function( newDimensionHeight ) {
        labelHeight.setText( LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( newDimensionHeight ) );
        
        setLabelPositions();
    }
    
    this.getModifiable = function() {
        return doGetModifiable();
    }
    
    this.setModifiable = function( isModifiable ) {
        doSetModifiable( isModifiable );
    }
    
    this.getLayer = function() {
        return doGetLayer();
    }
    
    this.setLayer = function( layerValue ) {
        doSetLayer( layerValue );
    }
    
    function createWidthLabel() {
        var label = new LSDev.Common.Javascript.Widgets.HtmlLabelWidget( ID_LABEL_WIDTH, baseDocument, self );
        label.onBeginTextChange.addEventListener( beginTextChangeWidth );
        label.onBeforeTextChange.addEventListener( beforeTextChangeWidth );
        label.onAfterTextChange.addEventListener( afterTextChangeWidth );
        
        return label;
    }
    
    function createByLabel() {
        var label = new LSDev.Common.Javascript.Widgets.HtmlLabelWidget( ID_LABEL_BY, baseDocument, self );
        label.setText( "x" );
        
        return label;
    }
    
    function createHeightLabel() {
        var label = new LSDev.Common.Javascript.Widgets.HtmlLabelWidget( ID_LABEL_HEIGHT, baseDocument, self );
        label.onBeginTextChange.addEventListener( beginTextChangeHeight );
        label.onBeforeTextChange.addEventListener( beforeTextChangeHeight );
        label.onAfterTextChange.addEventListener( afterTextChangeHeight );
        
        return label;
    }
    
    var oldValue;
    var newValue;
    function beginTextChangeWidth( e ) {
        labelWidth.getHtmlNode().style.zIndex = 100;
        labelHeight.getHtmlNode().style.zIndex = 0;
        labelBy.getHtmlNode().style.zIndex = 0;
        
        oldValue = labelWidth.getText();
        
        // Just display the value, without the pixel units
        e.setText( LSDev.Common.Javascript.Util.HtmlUtilities.ParsePixelValue( labelWidth.getText() ) + "" );
    }
    
    function beginTextChangeHeight( e ) {
        labelWidth.getHtmlNode().style.zIndex = 0;
        labelHeight.getHtmlNode().style.zIndex = 100;
        labelBy.getHtmlNode().style.zIndex = 0;
        
        oldValue = labelHeight.getText();
        
        // Just display the value, without the pixel units
        e.setText( LSDev.Common.Javascript.Util.HtmlUtilities.ParsePixelValue( labelHeight.getText() ) + "" );
    }
    
    function beforeTextChangeWidth() {
        newValue = labelWidth.getText();
        
        self.onBeforeDimensionsChange.dispatchEvent();
    }
    
    function beforeTextChangeHeight() {
        newValue = labelHeight.getText();
    
        self.onBeforeDimensionsChange.dispatchEvent();
    }
    
    function afterTextChangeWidth() {
        var newWidth = parseInt( newValue );
        
        if( null == newWidth ) {
            newWidth = LSDev.Common.Javascript.Util.HtmlUtilities.ParsePixelValue( newValue );
        }
        
        if( null == newWidth ) {
            // Not a valid value
            labelWidth.setText( oldValue );
        }
        else {
            var t = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( newWidth );
            labelWidth.setText( t );
        }
        
        setLabelPositions();
        
        self.onAfterDimensionsChange.dispatchEvent();
    }
    
    function afterTextChangeHeight() {
        var newHeight = parseInt( newValue );
        
        if( null == newHeight ) {
            newHeight = LSDev.Common.Javascript.Util.HtmlUtilities.ParsePixelValue( newValue );
        }
        
        if( null == newHeight ) {
            // Not a valid value
            labelHeight.setText( oldValue );
        }
        else {
            labelHeight.setText( LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( newHeight ) );
        }
        
        setLabelPositions();
        
        self.onAfterDimensionsChange.dispatchEvent();
    }
    
    function initializeWidget() {
        doSetID( widgetID );
        doSetVisible( DEFAULT_VISIBLE );
        doSetEnabled( DEFAULT_ENABLED );
        doSetModifiable( DEFAULT_MODIFIABLE );
        doSetWidth( DEFAULT_WIDTH );
        doSetHeight( DEFAULT_HEIGHT );
        doSetPos( DEFAULT_POSITION );
        doSetTextColor( DEFAULT_TEXT_COLOR );
        doSetBorderColor( DEFAULT_BORDER_COLOR );
        doSetBackgroundColor( DEFAULT_BACKGROUND_COLOR );
        doSetBorderWidth( DEFAULT_BORDER_WIDTH );
        
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
    
    function doGetModifiable() {
        return modifiable;
    }
    
    function doSetModifiable( isModifiable ) {
        modifiable = isModifiable;
        
        labelWidth.setModifiable( modifiable );
        labelHeight.setModifiable( modifiable );
    }
    
    function doGetWidth() {
        return LSDev.Common.Javascript.Util.HtmlUtilities.ParsePixelValue( myDiv.style.width );
    }
    
    function doSetWidth( newWidth ) {
        // Let the width be determined by the contents
    }
    
    function doGetHeight() {
        return LSDev.Common.Javascript.Util.HtmlUtilities.ParsePixelValue( myDiv.style.height );
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
        return myDiv.style.color;
    }
    
    function doSetTextColor( color ) {
        myDiv.style.color = color;
        
        labelWidth.setTextColor( color );
        labelBy.setTextColor( color );
        labelHeight.setTextColor( color );
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
        
        labelWidth.setBackgroundColor( color );
        labelBy.setBackgroundColor( color );
        labelHeight.setBackgroundColor( color );
    }
    
    function doGetBorderWidth() {
        return myDiv.style.borderWidth;
    }
    
    function doSetBorderWidth( newWidth ) {
        myDiv.style.borderWidth = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( newWidth );
    }
    
    function doGetLayer() {
        return myDiv.style.zIndex;
    }
    
    function doSetLayer( layerValue ) {
        myDiv.style.zIndex = layerValue;
    }
    
    function createDiv() {
        var theDiv = LSDev.Common.Javascript.Util.HtmlUtilities.CreateDiv( baseDocument );
        theDiv.style.position = LSDev.Common.Javascript.Util.HtmlUtilities.CssPositionAbsolute;
        theDiv.style.borderStyle = LSDev.Common.Javascript.Util.HtmlUtilities.CssBorderStyleSolid;
        
        return theDiv;
    }
    
    function setLabelPositions() {
        var heightOffset = labelWidth.getHtmlNode().clientHeight;
        
        labelWidth.setPos( new LSDev.Common.Javascript.Point( 0, 0 ) );
        labelBy.setPos( new LSDev.Common.Javascript.Point( labelWidth.getPos().getX() + labelWidth.getHtmlNode().clientWidth, labelWidth.getPos().getY() ) );
        labelHeight.setPos( new LSDev.Common.Javascript.Point( labelBy.getPos().getX() + labelBy.getHtmlNode().clientWidth, labelBy.getPos().getY() ) );
        
        var width = labelWidth.getHtmlNode().clientWidth + labelBy.getHtmlNode().clientWidth + labelHeight.getHtmlNode().clientWidth;
        var height = labelWidth.getHtmlNode().clientHeight;
        
        myDiv.style.width = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( width );
        myDiv.style.height = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( height );
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
    
    function keyPressCallback( e ) {
        if( KEY_CODE_TAB == e.keyCode ) {
            iterateDynamicTextModify();
            
            e.preventDefault();
        }
    }
    
    function iterateDynamicTextModify() {
        if( labelWidth.modifyIsActive() ) {
            labelHeight.invokeDynamicTextModify();
        }
        else if( labelHeight.modifyIsActive() ) {
            labelHeight.invokeEndDynamicTextModify();
        }
        else {
            labelWidth.invokeDynamicTextModify();
        }
    }
    
    function beginDynamicModify( theLabel ) {
        theLabel.invokeDynamicTextModify();
    }
    
    function buildMouseEvents() {
        myDiv.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnMouseDown, mouseDownCallback, false );
        myDiv.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnMouseUp, mouseUpCallback, false );
        myDiv.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnMouseMove, mouseMoveCallback, false );
        myDiv.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnClick, clickCallback, false );
        myDiv.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnDoubleClick, doubleClickCallback, false );
        
        baseDocument.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnKeyPress, keyPressCallback, false );
    }

    myDiv = createDiv();
    labelWidth = createWidthLabel();
    labelBy = createByLabel();
    labelHeight = createHeightLabel();
    
    initializeWidget();
    
    if( null == parent ) {
        LSDev.Common.Javascript.Util.HtmlUtilities.GetHtmlNode( baseDocument ).appendChild( myDiv );
    }
    else {
        parent.getHtmlNode().appendChild( myDiv );
    }
}

LSDev.Common.Javascript.Widgets.HtmlDimensionsDisplayWidget.prototype = LSDev.Common.Javascript.Widgets.HtmlWidget;
LSDev.Common.Javascript.Widgets.HtmlDimensionsDisplayWidget.prototype.base = LSDev.Common.Javascript.Widgets.HtmlWidget;
