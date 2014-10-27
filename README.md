underscore-matrix
=================

Module which contains the standard operation of the square matrices.

Version
------

0.0.4

Installation
------------

```sh
$ npm install underscore-matrix
```

Initialization
----------------

```
var _matrix = require("underscore-matrix");
```

Functions
--------------

 - Determinant
 - Multiply
 - Minor
 - Identity matrix
 - Check is array square matrix
 - ~~Summary~~ *(Not implemented yet)*
 - ~~Scalar summary~~ *(Not implemented yet)*
 - ~~Inverse~~ *(Not implemented yet)*
 - ~~Scalar multiply~~ *(Not implemented yet)*

    ###Determinant
    
    ```javscript
    _matrix.determinant(matrix);
    ```
    It will return object:
    
    ```javascript
    {
        error:"Some error message",  //or false if no errors
        value:1.23                   //Float number - determinant of matrix (can be undefinde if error)
    }
    ```
    ###Multiply
    ```javascript
    _matrix.multiply(matrixA,matrixB);
    //or
    _matrix.mult(matrixA,matrixB);
    ```
    It will return object:
    
    ```javascript
    {
        error:"Some error message",       //or false if no errors
        
        value:[[1,1,1],[2,2,2],[3,3,3]]   //Result matrix with float numbers - multiply of matrixA*matrixB 
                                          //(can be undefinde if error)
    }
    ```
    **IMPORTANT!**  *'matrixA' and 'matrixB' must be square with the same size* 
    ###Minor
    Return minor of matrix
    ```javascript
    _matrix.minor(di,dj,matrix);
    ```
    It will return object:
    
    ```javascript
    {
        error:"Some error message",       //or false if no errors
        value:[[1,1,1],[2,2,2],[3,3,3]]   //Minor matrix or undefinde if error
    }
    ```
    Sample:
    ```javascript
    var minor = _matrix.minor(0,1,[
                                    [1,2,3],
                                    [11,12,13],
                                    [21,22,23]
                                ]).value;
    
    // minor = [ 
    //          [ 11, 13 ], 
    //          [ 21, 23 ] 
    //        ]
    ```
    ###Identity matrix
    ```javascript
    _matrix.I(n);
    ```
    It will return object:
    
    ```javascript
    {
        error:"Some error message",       //or false if no errors
        value:[[1,0,0],[0,1,0],[0,0,1]]   //n-size identity matrix (can be undefinde if error)
    }
    ```
    ###Check is array square matrix
    ```javascript
    _matrix.isSquareMatrix(matrix);
    ```
      It will return object:
    
    ```javascript
    {
        error:"Some error message",       //or false if matrix is square
        value:[[1,1,1],[2,2,2],[3,3,3]]   //matrix 
    }
    ```  
   If some of matrix elements is numeric string, this function will convert them to float numbers and return matrix with only float type elements.
    
    