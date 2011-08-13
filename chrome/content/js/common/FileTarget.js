/////////////////////////////////////////////////////////////////////////////
// FILENAME:    FileTarget.js                                                 
// DATE:        9/13/2008                                                  
// AUTHOR:      Joe Miller                                                 
//                                                                         
// DESCRIPTION: Defines a structure that stores information about a target file.
//                                                                         
// REFERENCES:  None.
/////////////////////////////////////////////////////////////////////////////
LSDev.Common.Javascript.FileTarget = function() {
    // Gets or sets the path to the file.
    //
    // RETURNS String
    this.path = "";
    
    // Gets or sets the name of the file.
    //
    // RETURNS String
    this.filename = "";
    
    // Gets or sets the extension of the file (or an empty string if no extension is defined).
    //
    // RETURNS String
    this.extension = "";
}