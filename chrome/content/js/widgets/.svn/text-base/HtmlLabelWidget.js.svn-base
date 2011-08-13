/////////////////////////////////////////////////////////////////////////////
// FILENAME:    HtmlLabelWidget.js
// DATE:        9/22/2008
// AUTHOR:      Joe Miller
//
// DESCRIPTION: Defines the class HtmlLabelWidget, which represents a
//               label component that exists within an HTML document.
//
// REFERENCES:  HtmlWidget.js
/////////////////////////////////////////////////////////////////////////////
LSDev.Common.Javascript.Widgets.HtmlLabelWidget = function( widgetID, baseDocument, parent ) {
    const NAME = "HtmlLabelWidget";

    const MIN_WIDTH = 1;
    const MIN_HEIGHT = 1;
    const MIN_BORDER_WIDTH = 1;
    
    const LABEL_PADDING = 3;
    
    const DEFAULT_VISIBLE = true;
    const DEFAULT_ENABLED = true;
    const DEFAULT_MODIFIABLE = false;
    const DEFAULT_ISMODIFYING = false;
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
    var isModifying = DEFAULT_ISMODIFYING;
    
    this.onMouseDown = new LSDev.Common.Javascript.ParamEvent();
    this.onMouseMove = new LSDev.Common.Javascript.ParamEvent();
    this.onMouseUp = new LSDev.Common.Javascript.ParamEvent();
    this.onClick = new LSDev.Common.Javascript.ParamEvent();
    this.onDoubleClick = new LSDev.Common.Javascript.ParamEvent();
    this.onBeginTextChange = new LSDev.Common.Javascript.ParamEvent();
    this.onBeforeTextChange = new LSDev.Common.Javascript.GenericEvent();
    this.onAfterTextChange = new LSDev.Common.Javascript.GenericEvent();
    
    var self = this;
    var myDiv = createDiv();
    var textSpan = createNewDiv();
    var dynamicTextBox = createTextBox();

    initializeWidget();
    initializeDynamicTextBox();
    
    myDiv.appendChild( textSpan );
    
    if( null == parent ) {
        LSDev.Common.Javascript.Util.HtmlUtilities.GetHtmlNode( baseDocument ).appendChild( myDiv );
    }
    else {
        parent.getHtmlNode().appendChild( myDiv );
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
        doSetLayer( DEFAULT_LAYER );
        
        buildMouseEvents();
    }
    
    function initializeDynamicTextBox() {
        dynamicTextBox.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnBlur, endDynamicTextModify, false );
        dynamicTextBox.style.display = LSDev.Common.Javascript.Util.HtmlUtilities.CssDisplayNone;
        myDiv.appendChild( dynamicTextBox );
    }
    
    function doGetText() {
        if( null == textSpan.style.display || dynamicTextBox.style.display == LSDev.Common.Javascript.Util.HtmlUtilities.CssDisplayNone ) {
            // Label is shown
            return textSpan.innerHTML;
        }
        else {
            // Textbox is shown
            return dynamicTextBox.value;
        }
    }
    
    function doSetText( newText ) {
        textSpan.innerHTML = newText;
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
        return myDiv.clientWidth;
    }
    
    function doSetWidth( newWidth ) {
        // Let the width be determined by the contents
    }
    
    function doGetHeight() {
        return myDiv.clientHeight;
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
    
    function doGetLayer() {
        return myDiv.style.zIndex;
    }
    
    function doSetLayer( layerValue ) {
        myDiv.style.zIndex = layerValue;
    }
    
    function createDiv() {
        var theDiv = LSDev.Common.Javascript.Util.HtmlUtilities.CreateDiv( baseDocument );
        theDiv.style.position = LSDev.Common.Javascript.Util.HtmlUtilities.CssPositionAbsolute;
        theDiv.style.borderStyle = LSDev.Common.Javascript.Util.HtmlUtilities.CssBorderStyleNone;
        theDiv.style.padding = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue( LABEL_PADDING );
        theDiv.style.whiteSpace = LSDev.Common.Javascript.Util.HtmlUtilities.CssWhiteSpaceNoWrap;
        
        return theDiv;
    }
    
    function createNewDiv() {
        var theSpan = LSDev.Common.Javascript.Util.HtmlUtilities.CreateDiv( baseDocument );

        return theSpan;
    }
    
    function createTextBox() {
        var theBox = LSDev.Common.Javascript.Util.HtmlUtilities.CreateInput( baseDocument );
        
        return theBox;
    }
    
    function doInheritWidth() {
        myDiv.style.width = LSDev.Common.Javascript.Util.HtmlUtilities.CssWidthInherit;
        textSpan.style.width = LSDev.Common.Javascript.Util.HtmlUtilities.CssWidthInherit;
    }
    
    function doInheritHeight() {
        myDiv.style.height = LSDev.Common.Javascript.Util.HtmlUtilities.CssHeightInherit;
        textSpan.style.height = LSDev.Common.Javascript.Util.HtmlUtilities.CssHeightInherit;
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
    
    this.getModifiable = function() {
        return modifiable;
    }
    
    this.setModifiable = function( newModifiable ) {
        modifiable = newModifiable;
    }
    
    this.getText = function() {
        return doGetText();
    }
    
    this.setText = function( newText ) {
        doSetText( newText );
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
    
    this.invokeDynamicTextModify = function() {
        beginDynamicTextModify();
    }
    
    this.invokeEndDynamicTextModify = function() {
        endDynamicTextModify();
    }
    
    this.modifyIsActive = function() {
        return getModifyIsActive();
    }
    
    this.getLayer = function() {
        return doGetLayer();
    }
    
    this.setLayer = function( layerValue ) {
        doSetLayer( layerValue );
    }
    
    this.inheritWidth = function() {
        doInheritWidth();
    }
    
    this.inheritHeight = function() {
        doInheritHeight();
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
        beginDynamicTextModify();
    
        self.onDoubleClick.dispatchEvent( e );
    }
    
    function beginDynamicTextModify() {
        if( modifiable ) {
            var e = new LSDev.Common.Javascript.Widgets.TextModifyEventArgs( self, textSpan.innerHTML );
            self.onBeginTextChange.dispatchEvent( e );
            
            dynamicTextBox.style.display = null;
            //dynamicTextBox.size = textSpan.innerHTML.length;
            //dynamicTextBox.value = textSpan.innerHTML;
            dynamicTextBox.size = e.getText().length;
            dynamicTextBox.value = e.getText();
            textSpan.style.display = LSDev.Common.Javascript.Util.HtmlUtilities.CssDisplayNone;
            dynamicTextBox.focus();
            dynamicTextBox.select();
            
            isModifying = true;
        }
    }
    
    function endDynamicTextModify() {
        self.onBeforeTextChange.dispatchEvent();
        
        doSetText(dynamicTextBox.value);
        textSpan.style.display = null;
        dynamicTextBox.style.display = LSDev.Common.Javascript.Util.HtmlUtilities.CssDisplayNone;
        
        isModifying = false;
        
        self.onAfterTextChange.dispatchEvent();
    }
    
    function getModifyIsActive() {
        return isModifying;
    }
    
    function buildMouseEvents() {
        myDiv.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnMouseDown, mouseDownCallback, false );
        myDiv.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnMouseUp, mouseUpCallback, false );
        myDiv.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnMouseMove, mouseMoveCallback, false );
        myDiv.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnClick, clickCallback, false );
        myDiv.addEventListener( LSDev.Common.Javascript.Util.HtmlUtilities.EventOnDoubleClick, doubleClickCallback, false );
    }
}

LSDev.Common.Javascript.Widgets.HtmlLabelWidget.prototype = LSDev.Common.Javascript.Widgets.HtmlWidget;
LSDev.Common.Javascript.Widgets.HtmlLabelWidget.prototype.base = LSDev.Common.Javascript.Widgets.HtmlWidget;
