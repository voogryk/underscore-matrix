/**
 * Created by Anton on 27.10.2014.
 */
if (!Array.isArray) {
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}

var _matrix = {};

_matrix.isSquareMatrix = function(matrix){

    var res = {};

    if(!Array.isArray(matrix)){
        return {error: "Parameter must be matrix NxN"};
    };
    for(var i =0; i<matrix.length; i++){
        if(matrix[i].length != matrix.length){
            return {error:"Parameter must be matrix NxN"};
        }
        for(var j=0; j<matrix[i].length; j++){
            if(isNaN(matrix[i][j])){
                return {error:"Element "+i+", "+j+" is not number"};
            } else {
                matrix[i][j] = parseFloat(matrix[i][j]);
            }
        }
    };
    res.value = matrix;

    return res;

}

_matrix.minor = function(di,dj,matrix){
    var res = {error:false};
    var ch = _matrix.isSquareMatrix(matrix);
    if(ch.error){
        return {error:ch.error};
    } else {
        matrix = ch.value;
    }
    res.value = [];
    for(var i=0; i<matrix.length; i++){
        if(i!=di) {
            res.value.push([]);
            for (var j = 0; j < matrix[i].length; j++) {
                if(j!=dj){
                    res.value[res.value.length-1].push(matrix[i][j]);
                }
            }
        }
    };
    res.error = false;
    return res;
}

_matrix.determinant = function(matrix){
    var ch = _matrix.isSquareMatrix(matrix);
    if(ch.error){
        return {error: ch.error};
    }
    var det = 0;
    if(matrix.length == 1 && matrix[0].length == 1){
        det = matrix[0][0];
    } else {
        for (var i = 0; i < matrix.length; i++) {
            det += Math.pow(-1, i) * matrix[0][i] * _matrix.determinant(_matrix.minor(0, i, matrix).value).value;
        }
    }
    return {value:det, error:false};
};
_matrix.det = _matrix.determinant;

_matrix.I = function(n){
    var res = {};
    if(!isNaN(n)) {
        if(parseInt(n)>0) {
            res.value = [];
            for (var i = 0; i < n; i++) {
                res.value[i] = [];
                for (var j = 0; j < n; j++) {
                    if (i == j) {
                        res.value[i][j] = 1;
                    } else {
                        res.value[i][j] = 0;
                    }
                }
            }
        } else {
            res.error = "n must be integer and > 0"
        }
    } else {
        res.error = "n must be integer and > 0"
    };
    return res;
};

_matrix.multiply = function(a,b){

    var res = {};
    var ch = _matrix.isSquareMatrix(a);
    if(ch.error){
        return {error: "First matrix: "+ch.error};
    };
    ch = _matrix.isSquareMatrix(b);
    if(ch.error){
        return {error: "Second matrix: "+ch.error};
    };
    if(a.length != b.length){
        return {error: "The dimensions of the matrices must be the same"}
    };
    var mult = [];
    for(var i=0; i< a.length; i++){
        mult[i] = [];
        for(var j=0; j< b.length; j++){
            mult[i][j] = 0;
            for(var k=0; k< a.length; k++){
                mult[i][j] += (a[i][k]*b[k][j]);
            }
        }
    };
    return {error: false, value:mult};

}

_matrix.mult = _matrix.multiply;

_matrix.summary = function(a,b){
    return {error:"Not implemented yet"};
};
_matrix.sum = _matrix.summary;

_matrix.sSummary = function(s,a){
    return {error:"Not implemented yet"};
};
_matrix.ssum = _matrix.sSummary;

_matrix.inverse = function(a){
    return {error:"Not implemented yet"};
};

_matrix.sMultiply = function(s,a){
    return {error:"Not implemented yet"};
};
_matrix.smul = _matrix.sMultiply;


module.exports = _matrix;