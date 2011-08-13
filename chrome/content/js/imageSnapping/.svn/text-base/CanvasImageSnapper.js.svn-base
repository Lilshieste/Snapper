//
// FILENAME:    CanvasImageSnapper.js                                                 
// DATE:        9/13/2008                                                  
// AUTHOR:      Joe Miller                                                 
//                                                                         
// DESCRIPTION: Defines an ImageSnapper that uses the HTML canvas element to snap an image.
//                                                                         
// REFERENCES:  ImageSnapper.js
//              CanvasSnappedImage.js
//
LSDev.Extensions.SnapperNS.CanvasImageSnapper = function() {
    this.createSnappedImage = function( selector, origin ) {
        return new LSDev.Extensions.SnapperNS.CanvasSnappedImage( selector, origin, this.getSnapperName() );
    }

    this.getSnapperName = function() {
        return "CanvasImageSnapper";
    }
}

LSDev.Extensions.SnapperNS.CanvasImageSnapper.prototype = LSDev.Extensions.SnapperNS.ImageSnapper;
LSDev.Extensions.SnapperNS.CanvasImageSnapper.prototype.base = LSDev.Extensions.SnapperNS.ImageSnapper;
