/***************************************************************************/
/* FILENAME:    Rectangle.js                                               */
/* DATE:        5/27/2006                                                  */
/* AUTHOR:      Joe Miller                                                 */
/*                                                                         */
/* DESCRIPTION: Defines the class Rectangle, which represents a 4-sided    */
/*               polygon.                                                  */
/*                                                                         */
/* REFERENCES:  Polygon.js                                                 */
/*                  - Defines the base class.                              */
/***************************************************************************/
LSDev.Common.Javascript.Rectangle = function( width, height, positionX, positionY ) {
    const DEFAULT_WIDTH = 1;
    const DEFAULT_HEIGHT = 1;
    const DEFAULT_X = 0;
    const DEFAULT_Y = 0;
    
    this.name = "Rectangle";
    
    this.width = ( width == null ? DEFAULT_WIDTH : width );
    this.height = ( height == null ? DEFAULT_HEIGHT : height );
    this.x = ( positionX == null ? DEFAULT_X : positionX );
    this.y = ( positionY == null ? DEFAULT_Y : positionY );
}

LSDev.Common.Javascript.Rectangle.prototype = new LSDev.Common.Javascript.Polygon( 4 );

LSDev.Common.Javascript.Rectangle.prototype.getArea = function() {
    return ( this.width * this.height );
}

LSDev.Common.Javascript.Rectangle.prototype.getPerimeter = function() {
    return ( 2 * this.width ) + ( 2 * this.height );
}