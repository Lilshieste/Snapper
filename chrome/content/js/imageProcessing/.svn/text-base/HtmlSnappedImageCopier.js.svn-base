/////////////////////////////////////////////////////////////////////////////
// FILENAME:    HtmlSnappedImageCopier.js                                                 
// DATE:        9/14/2008                                                  
// AUTHOR:      Joe Miller                                                 
//                                                                         
// DESCRIPTION: Represents an object capable of copying a SnappedImage to
//               the system clipboard, using an HTML document.
//                                                                         
// REFERENCES:  SnappedImageCopier.js
//              SnappedImage.js
/////////////////////////////////////////////////////////////////////////////
LSDev.Extensions.SnapperNS.HtmlSnappedImageCopier = function( htmlDocument ) {
    const COMMAND_COPY_IMAGE = "cmd_copyImageContents";
    
    this.htmlDoc = htmlDocument;

    this.copy = function( snappedImage ) {
        try {
            copySnappedImageFromDataUrl( this.htmlDoc, snappedImage.toDataUrl( LSDev.Extensions.SnapperNS.SnappedImageTypes.PNG ) );
            return true;
        }
        catch( ex ) {
            alert(ex);
            return false;
        }
    }
    
    function copySnappedImageFromDataUrl( htmlDocument, dataUrl ) {
        var body = LSDev.Common.Javascript.Util.HtmlUtilities.GetHtmlNode( htmlDocument );
    	var img = LSDev.Common.Javascript.Util.HtmlUtilities.CreateImage( htmlDocument );
    	
        img.setAttribute( "id", "snapped_image" );
        img.setAttribute( "src", dataUrl );
    	
        body.appendChild( img );
    	
    	// Wait for the element to be added, before attempting to copy
    	setTimeout( doCopyImageToClipboard( img, document ), 200 );
    	
    	body.removeChild( img );
    }

    function createTempImageFile( image ) {
    	var path = LSDev.Extensions.SnapperNS.SnapperUtilities.TempDirectoryPath;
    	var filename = new Date().getTime();
        var imageType = LSDev.Extensions.SnapperNS.SnappedImageTypes.PNG;
        
        LSDev.Extensions.SnapperNS.SnapperUtilities.EnsureTempDirectoryExists();
        
        return image.toImageFile( path, filename, imageType );
    }

    function doCopyImageToClipboard( img, xulDocument ) {
    	return function() {
                xulDocument.popupNode = img; 
                goDoCommand( COMMAND_COPY_IMAGE );
    		}
    }
}

LSDev.Extensions.SnapperNS.HtmlSnappedImageCopier.prototype = LSDev.Extensions.SnapperNS.SnappedImageCopier;
LSDev.Extensions.SnapperNS.HtmlSnappedImageCopier.prototype.base = LSDev.Extensions.SnapperNS.SnappedImageCopier;
