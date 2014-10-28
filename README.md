underscore-matrix
=================

Module which contains the standard operation of the square matrices.

Version
------

0.1.0

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
 - Summary
 - Scalar summary
 - Multiply
 - Scalar multiply
 - Matrix inversion
 - Minor
 - Identity matrix
 - Check is array square matrix

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
    ###Summary
    ```javascript
    _matrix.summary(matrixA,matrixB);
    //or
    _matrix.sum(matrixA,matrixB);
    ```
    It will return object:
    
    ```javascript
    {
        error:"Some error message",       //or false if no errors
        value:[[1,1,1],[2,2,2],[3,3,3]]   //Result matrix with float numbers - summary of matrixA and matrixB (can be undefinde if error)
    }
    ```
    **IMPORTANT!**  *'matrixA' and 'matrixB' must be square with the same size* 
    ###Scalar summary
    ```javascript
    _matrix.sSummary(scalarNumber,matrix);
    //or
    _matrix.ssum(scalarNumber,matrix);
    ```
    It will return object:
    
    ```javascript
    {
        error:"Some error message",       //or false if no errors
        value:[[1,1,1],[2,2,2],[3,3,3]]   //Result matrix with float numbers - summary of scalarNumber and matrix (can be undefinde if error)
    }
    ```
    Sample:
    ```javascript
    var sum = _matrix.ssum(1,[
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]).value;
    
    //sum = [
    //          [2,3,4],
    //          [5,6,7],
    //          [8,9,10]
    //      ]
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
        value:[[1,1,1],[2,2,2],[3,3,3]]   //Result matrix with float numbers - multiply of matrixA*matrixB (can be undefinde if error)
    }
    ```
    **IMPORTANT!**  *'matrixA' and 'matrixB' must be square with the same size* 
    ###Scalar multiply
    ```javascript
    _matrix.sMultiply(scalarNumber,matrix);
    //or
    _matrix.smul(scalarNumber,matrix);
    ```
    It will return object:
    
    ```javascript
    {
        error:"Some error message",       //or false if no errors
        value:[[1,1,1],[2,2,2],[3,3,3]]   //Result matrix with float numbers - multiply of scalarNumber and matrix (can be undefinde if error)
    }
    ```
    Sample:
    ```javascript
    var mul = _matrix.ssum(2,[
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]).value;
    
    //mul = [
    //          [2,4,6],
    //          [8,10,12],
    //          [14,16,18]
    //      ]
    ```
    ###Matrix inversion
    ```javascript
    _matrix.inverse(matrix);
    ```
     It will return object:
    
    ```javascript
    {
        error:"Some error message",       //or false if no errors
        value:[[1,1,1],[2,2,2],[3,3,3]]   //Inverse of a matrix (can be undefinde if error)
    }
    ```
     **IMPORTANT!**  *determinant of matrix can't be 0* 
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

License
---------
MIT

####Enjoy!