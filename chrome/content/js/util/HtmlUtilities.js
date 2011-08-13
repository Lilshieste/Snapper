/////////////////////////////////////////////////////////////////////////////
// FILENAME:    HtmlUtilities.js                                                 
// DATE:        5/16/2009                                                  
// AUTHOR:      Joe Miller                                                 
//                                                                         
// DESCRIPTION: Static container for miscellaneous HTML functions.
//                                                                         
// REFERENCES:  None.
/////////////////////////////////////////////////////////////////////////////
LSDev.Common.Javascript.Util.HtmlUtilities = (function(){
    
    // Elements
    const HTML_TAG_CANVAS = "canvas";
    const HTML_TAG_DIV = "div";
    const HTML_TAG_SPAN = "span";
    const HTML_TAG_INPUT = "input";
    const HTML_TAG_HTML = "html";
    const HTML_TAG_HEAD = "head";
    const HTML_TAG_IMG = "img";
    const HTML_TAG_LINK = "link";
    
    // Events
    const EVENT_MOUSEDOWN = "mousedown";
    const EVENT_MOUSEUP = "mouseup";
    const EVENT_MOUSEMOVE = "mousemove";
    const EVENT_CLICK = "click";
    const EVENT_DOUBLECLICK = "dblclick";
    const EVENT_KEYPRESS = "keypress";
    const EVENT_BLUR = "blur";
    
    // CSS
    const CSS_DISPLAY_NONE = "none";
    const CSS_POSITION_ABSOLUTE = "absolute";
    const CSS_CURSOR_MOVE = "move";
    const CSS_CURSOR_RESIZE_NW = "nw-resize";
    const CSS_CURSOR_RESIZE_W = "w-resize";
    const CSS_CURSOR_RESIZE_SW = "sw-resize";
    const CSS_CURSOR_RESIZE_N = "n-resize";
    const CSS_CURSOR_RESIZE_S = "s-resize";
    const CSS_CURSOR_RESIZE_NE = "ne-resize";
    const CSS_CURSOR_RESIZE_E = "e-resize";
    const CSS_CURSOR_RESIZE_SE = "se-resize";
    const CSS_HEIGHT_INHERIT = "inherit";
    const CSS_WIDTH_INHERIT = "inherit";
    const CSS_WHITESPACE_NOWRAP = "nowrap";
    const STYLE_PIXELS = "px";
    const STYLE_PERCENTAGE = "%";
    const STYLE_BORDER_NONE = "none";
    const STYLE_BORDER_SOLID = "solid";
    
    return {
    //
    // NODE CREATION
    //
        CreateCanvas: function( baseDocument ) {
            return baseDocument.createElement( HTML_TAG_CANVAS );
        },
    
        CreateDiv: function( baseDocument ) {
            return baseDocument.createElement( HTML_TAG_DIV );
        },
        
        CreateInput: function( baseDocument ) {
            return baseDocument.createElement( HTML_TAG_INPUT );
        },
        
        CreateHead: function( baseDocument ) {
            return baseDocument.createElement( HTML_TAG_HEAD );
        },
        
        CreateImage: function( baseDocument ) {
            return baseDocument.createElement( HTML_TAG_IMG );
        },
        
        CreateLink: function( baseDocument ) {
            return baseDocument.createElement( HTML_TAG_LINK );
        },
    
    //
    // NODE RETRIEVAL
    //    
        GetHtmlNode: function( baseDocument ) {
            return baseDocument.getElementsByTagName( HTML_TAG_HTML )[ 0 ]
        },
        
        GetHeadNode: function( baseDocument ) {
            return baseDocument.getElementsByTagName( HTML_TAG_HEAD )[ 0 ]
        },

    //
    // PARSING
    //
        ParsePixelValue: function( stringValue ) {
            var endIndex = stringValue.indexOf( STYLE_PIXELS );
            return parseInt( stringValue.substring( 0, endIndex ) );
        },
        
        ToPixelValue: function( numericValue ) {
            return numericValue + STYLE_PIXELS;
        },
        
        ParsePercentageValue: function( stringValue ) {
            var endIndex = stringValue.indexOf( STYLE_PERCENTAGE );
            return parseInt( stringValue.substring( 0, endIndex ) );
        },
        
        ToPercentageValue: function( numericValue ) {
            return numericValue + STYLE_PERCENTAGE;
        },
        
    //
    // HTML utility methods
    //
        GetVisibleDocumentWidth: function( theDocument ) {
            // TODO: Not sure why, but some pages register larger dimensions for
            //  their BODY tags than for their HTML tags.  Need to figure out why.
            var htmlWidth =  LSDev.Common.Javascript.Util.HtmlUtilities.GetHtmlNode( theDocument ).clientWidth;
            var bodyWidth =  theDocument.body.clientWidth;
            
            return Math.min( htmlWidth, bodyWidth );
        },
        
        GetVisibleDocumentHeight: function( theDocument ) {
            // TODO: Not sure why, but some pages register larger dimensions for
            //  their BODY tags than for their HTML tags.  Need to figure out why.
            var htmlHeight =  LSDev.Common.Javascript.Util.HtmlUtilities.GetHtmlNode( theDocument ).clientHeight;
            var bodyHeight =  theDocument.body.clientHeight;
            
            return Math.min( htmlHeight, bodyHeight );
        },
        
        GetFullDocumentWidth: function( theDocument ) {
            var html = LSDev.Common.Javascript.Util.HtmlUtilities.GetHtmlNode( theDocument );
            return html.scrollWidth;
        },
        
        GetFullDocumentHeight: function( theDocument ) {
            var html = LSDev.Common.Javascript.Util.HtmlUtilities.GetHtmlNode( theDocument );
            return html.scrollHeight;
        },
        
        GetBoundingRectangleForWindow: function( window ) {
            var x = 0;
            var y = 0;
            var width = window.innerWidth;
            var height = window.innerHeight;
            
            return new LSDev.Common.Javascript.Rectangle( width, height, x, y );
        },
        
        GetBoundingRectangleForDocument: function( document ) {
            var x = 0;
            var y = 0;
            var width = document.body.clientWidth;
            var height = document.body.clientHeight;
            
            return new LSDev.Common.Javascript.Rectangle( width, height, x, y );
        },
        
    //
    // CSS
    //
        CssDisplayNone: CSS_DISPLAY_NONE,
        
        CssBorderStyleNone: STYLE_BORDER_NONE,
        
        CssBorderStyleSolid: STYLE_BORDER_SOLID,
        
        CssPositionAbsolute: CSS_POSITION_ABSOLUTE,
        
        CssCursorMove: CSS_CURSOR_MOVE,
        
        CssCursorResizeNorthWest: CSS_CURSOR_RESIZE_NW,
        
        CssCursorResizeNorth: CSS_CURSOR_RESIZE_N,
        
        CssCursorResizeNorthEast: CSS_CURSOR_RESIZE_NE,
        
        CssCursorResizeWest: CSS_CURSOR_RESIZE_W,
        
        CssCursorResizeEast: CSS_CURSOR_RESIZE_E,
        
        CssCursorResizeSouthWest: CSS_CURSOR_RESIZE_SW,
        
        CssCursorResizeSouth: CSS_CURSOR_RESIZE_S,
        
        CssCursorResizeSouthEast: CSS_CURSOR_RESIZE_SE,
        
        CssWidthInherit: CSS_WIDTH_INHERIT,
        
        CssHeightInherit: CSS_HEIGHT_INHERIT,
        
        CssWhiteSpaceNoWrap: CSS_WHITESPACE_NOWRAP,
        
    //
    // EVENTS
    //
        EventOnMouseDown: EVENT_MOUSEDOWN,
        
        EventOnMouseUp: EVENT_MOUSEUP,
        
        EventOnMouseMove: EVENT_MOUSEMOVE,
        
        EventOnClick: EVENT_CLICK,
        
        EventOnDoubleClick: EVENT_DOUBLECLICK,
        
        EventOnKeyPress: EVENT_KEYPRESS,
        
        EventOnBlur: EVENT_BLUR
    }
})();
