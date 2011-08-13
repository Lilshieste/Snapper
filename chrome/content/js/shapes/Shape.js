/***************************************************************************/
/* FILENAME:    Shape.js                                                   */
/* DATE:        5/27/2006                                                  */
/* AUTHOR:      Joe Miller                                                 */
/*                                                                         */
/* DESCRIPTION: Defines the abstract class Shape, which serves as the base */
/*               class for an object representing a geometric shape.       */
/*                                                                         */
/* REFERENCES:  None.                                                      */
/***************************************************************************/
LSDev.Common.Javascript.Shape = {
    name: "shape",
    
    getArea: function() {
        throw new Error( this.name + ":Shape.getArea was not defined" );
    }
}