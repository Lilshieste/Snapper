/***************************************************************************/
/* FILENAME:    Polygon.js                                                 */
/* DATE:        5/27/2006                                                  */
/* AUTHOR:      Joe Miller                                                 */
/*                                                                         */
/* DESCRIPTION: Defines the abstract class Polygon, which serves as the    */
/*               base class for an n-sided polygon.                        */
/*                                                                         */
/* REFERENCES:  Shape.js                                                   */
/*                  - Defines the base class.                              */
/***************************************************************************/
LSDev.Common.Javascript.Polygon = function( numSides ){
    this.name = "polygon";
    this.numberOfSides = numSides;
}

LSDev.Common.Javascript.Polygon.prototype = LSDev.Common.Javascript.Shape;
LSDev.Common.Javascript.Polygon.prototype.base = LSDev.Common.Javascript.Shape;

LSDev.Common.Javascript.Polygon.prototype.getPerimeter = function() {
    throw new Error( this.name + ":Polygon.getPerimeter was not defined" );
}