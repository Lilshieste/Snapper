/////////////////////////////////////////////////////////////////////////////
// FILENAME:    SnappedImageType.js                                                 
// DATE:        9/13/2008                                                  
// AUTHOR:      Joe Miller                                                 
//                                                                         
// DESCRIPTION: Represents the format of a snapped image.
//                                                                         
// REFERENCES:  None.
/////////////////////////////////////////////////////////////////////////////

LSDev.Extensions.SnapperNS.SnappedImageType = {

    // Gets a value representing the file extension associated with the image type format.
    //  Returned value is not prefixed with a period.
    //
    // RETURNS String
    toFileExtension: function() {
        throw new Error( "SnappedImageType.toFileExtension is not defined for: " + this );
    },
    
    // Gets a value representing the MIME type associated with the image type format.
    //
    // RETURNS String
    toMIMEType: function() {
        throw new Error( "SnappedImageType.toMIMEType is not defined for: " + this );
    }
}

// Represents a container for all available static image types.
//var SnappedImageTypes = (function() {
LSDev.Extensions.SnapperNS.SnappedImageTypes = (function() {
    const EXTENSION_PNG = "png";
    const EXTENSION_JPG = "jpg";
    
    const MIME_PNG = "image/png";
    const MIME_JPG = "image/jpeg";
    
    var png;
    var jpg;
  
    function SnappedImageTypePNG() {
        this.toFileExtension = function() {
            return EXTENSION_PNG;
        }
        
        this.toMIMEType = function() {
            return MIME_PNG;
        }
    } 
    SnappedImageTypePNG.prototype = LSDev.Extensions.SnapperNS.SnappedImageType;
    SnappedImageTypePNG.prototype.base = LSDev.Extensions.SnapperNS.SnappedImageType;
    
    function SnappedImageTypeJPG() {
        this.toFileExtension = function() {
            return EXTENSION_JPG;
        }
        
        this.toMIMEType = function() {
            return MIME_JPG;
        }
    }
    SnappedImageTypeJPG.prototype = LSDev.Extensions.SnapperNS.SnappedImageType;
    SnappedImageTypeJPG.prototype.base = LSDev.Extensions.SnapperNS.SnappedImageType;
  
    function getPNG() {
        if( null == png ) {
            png = new SnappedImageTypePNG();
        }
        
        return png;
    }
      
    function getJPG() {
        if( null == jpg ) {
            jpg = new SnappedImageTypeJPG();
        }
        
        return jpg;
    }
  
    return {
        // Gets the image type associated with the PNG image format.
        //
        // RETURNS SnappedImageType
        PNG: getPNG(),
        
        // Gets the image type associated with the JPG image format.
        //
        // RETURNS SnappedImageType
        JPG: getJPG(),
        
        // Gets an array containing all available image types.
        //
        // RETURN Array of SnappedImageType
        toArray: function() {
            return [ this.JPG, this.PNG ];
        },
        
        // Finds the image type associated with the specified file extension,
        //  or NULL if one does not exist.
        //
        // RETURNS SnappedImageType
        findByFileExtension: function( extension ) {
            var allTypes = this.toArray();
            var type = null;
            
            for( var i = 0; i < allTypes.length; i++ ) {
                if( allTypes[ i ].toFileExtension().toLowerCase() == extension.toLowerCase() ) {
                    type = allTypes[ i ];
                    break;
                }
            }
            
            return type;
        },
        
        // Finds the image type associated with the specified MIME type,
        //  or NULL if one does not exist.
        //
        // RETURNS SnappedImageType
        findByMIMEType: function( MIME ) {
            var allTypes = this.toArray();
            var type = null;
            
            for( var i = 0; i < allTypes.length; i++ ) {
                if( allTypes[ i ].toMIMEType().toLowerCase() == MIME.toLowerCase() ) {
                    type = allTypes[ i ];
                    break;
                }
            }
            
            return type;
        }
    }   
})();
