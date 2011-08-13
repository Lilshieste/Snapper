/////////////////////////////////////////////////////////////////////////////
// FILENAME:    CanvasSnappedImage.js                                                 
// DATE:        9/13/2008                                                  
// AUTHOR:      Joe Miller                                                 
//                                                                         
// DESCRIPTION: Defines a set of methods used to access an image snapped
//               from a HTML canvas element.
//                                                                         
// REFERENCES:  SnappedImage.js
/////////////////////////////////////////////////////////////////////////////
LSDev.Extensions.SnapperNS.CanvasSnappedImage = function( selector, origin, snapperName ) {
    this.selector = selector;
    this.origin = origin;
    this.snapperName = snapperName;
    this.timestamp = new Date();
    
    this.canvas;
    
    function snapCanvas( selector ) {
        var area = selector.getSelectionCoords();
        var canvas = createCanvas( area );
        var context = canvas.getContext( "2d" );
        
        initializeContext( context, area );
        
        var currentWindow = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator).getMostRecentWindow("navigator:browser");
        //var theWindow = currentWindow.getBrowser().contentWindow;
        var theWindow = selector.getSelectionTarget().defaultView;
        
        context.drawWindow(theWindow, area.x, area.y, area.width, area.height, "rgb(0,0,0)");
        context.restore();
        
        return canvas;
    }
    
    function persistImageToFile( dataUrl, file ) {
        var io = Components.classes[ "@mozilla.org/network/io-service;1" ].getService( Components.interfaces.nsIIOService );
        var uri = io.newURI( dataUrl, "UTF8", null );

        var persister = Components.classes[ "@mozilla.org/embedding/browser/nsWebBrowserPersist;1" ].createInstance( Components.interfaces.nsIWebBrowserPersist );
        persister.persistFlags = Components.interfaces.nsIWebBrowserPersist.PERSIST_FLAGS_REPLACE_EXISTING_FILES |
                                Components.interfaces.nsIWebBrowserPersist.PERSIST_FLAGS_AUTODETECT_APPLY_CONVERSION;

        // Persist image to the file
        persister.saveURI( uri, null, null, null, null, file );
    }
    
    function createCanvas( area ) {
        const ID_CANVAS = "snapper__image_snapping_canvas";
        const MAX_HEIGHT = 16384;  // TODO: Find out if Mozilla tracks these limits
        const MAX_WIDTH = 16384;  // TODO: Find out if Mozilla tracks these limits
    
        if( area.width > MAX_WIDTH || area.height > MAX_HEIGHT ) {
            throw new Error("Invalid image size (" + area.width + " x " + area.height + "); maximum is " + MAX_WIDTH + " x " + MAX_HEIGHT);
        }
    
        var doc = window._content.document;
        
        // If canvas already exists, just get it; otherwise create it
        var snapCanvas = doc.getElementById( ID_CANVAS );
        if( null == snapCanvas ) {
            snapCanvas = LSDev.Common.Javascript.Util.HtmlUtilities.CreateCanvas( doc );
            snapCanvas.setAttribute( "id", ID_CANVAS );
            snapCanvas.setAttribute( "style", "display:none" );
            
            snapCanvas.style.zIndex = 2000000;
            LSDev.Common.Javascript.Util.HtmlUtilities.GetHtmlNode( doc ).appendChild( snapCanvas );
        }
        
        snapCanvas.style.width = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue(area.width);
        snapCanvas.style.height = LSDev.Common.Javascript.Util.HtmlUtilities.ToPixelValue(area.height);
        snapCanvas.width = area.width;
        snapCanvas.height = area.height;
    
        return snapCanvas;
    }
    
    function initializeContext( context, area ) {
        context.clearRect( area.x, area.y, area.width, area.height );
        context.save();
    }
    
    this.canvas = snapCanvas( this.selector );
    
    this.getTimestamp = function() {
        return this.timestamp;
    }

    this.getSelectorInfo = function() {
        // TODO: Get SelectorInfo from this.selector
        return null;
    }

    this.getOrigin = function() {
        return this.origin;
    }

    this.toImageFile = function( path, filename, imageType ) {
        var file = Components.classes[ "@mozilla.org/file/local;1" ].createInstance( Components.interfaces.nsILocalFile );
        file.initWithPath( path );
        file.append( filename + "." + imageType.toFileExtension() );
        
        persistImageToFile( this.canvas.toDataURL( imageType.toMIMEType() ), file );
        
        return file.path;
    }
    
    this.toDataUrl = function( imageType ) {
        return this.canvas.toDataURL( imageType.toMIMEType() );
    }
}

LSDev.Extensions.SnapperNS.CanvasSnappedImage.prototype = LSDev.Extensions.SnapperNS.SnappedImage;
LSDev.Extensions.SnapperNS.CanvasSnappedImage.prototype.base = LSDev.Extensions.SnapperNS.SnappedImage;
