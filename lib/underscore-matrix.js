if (!Array.isArray) {
Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
};
}

var _matrix = {};

_matrix.bgdc = function(a){
    return Math.round(a*10000000000)/10000000000;
}

_matrix.isSquareMatrix = function(matrix,cb){

    var res = {};

    if(!Array.isArray(matrix)){
        res = {error: "Parameter must be matrix NxN"};
        if(cb){
            cb(res.error, res.value); return null;
        } else {
            return res;
        }
    };
    for(var i =0; i<matrix.length; i++){
        if(matrix[i].length != matrix.length){
            res = {error:"Parameter must be matrix NxN"};
            if(cb){
                cb(res.error, res.value); return null;
            } else {
                return res;
            }
        }
        for(var j=0; j<matrix[i].length; j++){
            if(isNaN(matrix[i][j])){
                res = {error:"Element "+i+", "+j+" is not number"};
                if(cb){
                    cb(res.error, res.value); return null;
                } else {
                    return res;
                }
            } else {
                matrix[i][j] = parseFloat(matrix[i][j]);
            }
        }
    };
    res.value = matrix;

    if(cb){
        cb(res.error, res.value); return null;
    } else {
        if(!res.error) {
            return res.value;
        } else {
            return res;
        }
    }

}

_matrix.minor = function(di,dj,matrix,cb){
    var res = {error:false};
    var ch = _matrix.isSquareMatrix(matrix);
    if(ch.error){
        res = {error: ch.error};
        if(cb){
            cb(res.error, res.value); return null;
        } else {
            return res;
        }
    } else {
        matrix = ch;
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
    if(cb){
        cb(res.error, res.value); return null;
    } else {
        if(!res.error) {
            return res.value;
        } else {
            return res;
        }
    }
}

_matrix.triangle = function(matrix,cb){
    var res = {};
    var ch = _matrix.isSquareMatrix(matrix);
    if(ch.error){
        res = {error: ch.error};
        if(cb){
            cb(res.error, res.value); return null;
        } else {
            return res;
        }
    }
    var det = 1;

    var mat = JSON.parse(JSON.stringify(matrix));
    for(var i=0; i<(mat.length-1); i++){
        if(mat[i][i]==0){
            for(var j=i+1; j<mat.length;j++){
                if(mat[j][i]!=0){
                    for(var k=0; k<mat.length; k++){
                        mat[i][k] += mat[j][k];
                    };
                    break;
                }
            };
            if(mat[i][i]==0){
                //console.log("Сработало!")


                res = {value:0, error:false};
                if(cb){
                    cb(res.error, res.value); return null;
                } else {
                    return res.value;
                }
            }
        }
        for(var j=i+1; j<mat.length; j++){
            var b=mat[j][i]/mat[i][i];
            for(var k=0; k<mat.length; k++){
                mat[j][k] = mat[j][k] - mat[i][k]*b;
            };
        }

    }
    for(var i=1; i<mat.length; i++){
        for(var j=0; j<mat[i].length; j++){
            mat[i][j]=this.bgdc(mat[i][j]);
        }
    }
    res = {value:mat, error:false};
    if(cb){
        cb(res.error, res.value); return null;
    } else {
        if(!res.error) {
            return res.value;
        } else {
            return res;
        }
    }
}

_matrix.determinant = function(matrix,cb){
    var res = {};
    var ch = _matrix.isSquareMatrix(matrix);
    if(ch.error){
        res = {error: ch.error};
        if(cb){
            cb(res.error, res.value); return null;
        } else {
            return res;
        }
    }
    var det = 1;

    var mat = this.triangle(matrix);
    if(mat.error){
        return mat;
    }
    for(var i=0; i<mat.length; i++){
        det = det*mat[i][i];
    }

    res = {value:this.bgdc(det), error:false};
    if(cb){
        cb(res.error, res.value); return null;
    } else {
        if(!res.error) {
         return res.value;
        } else {
         return res;
        }
    }
};

_matrix.det = _matrix.determinant;

_matrix.determinantMinor = function(matrix,cb){
    var res = {};
    var ch = _matrix.isSquareMatrix(matrix);
    if(ch.error){
        res = {error: ch.error};
        if(cb){
            cb(res.error, res.value); return null;
        } else {
            return res;
        }
    }
    var det = 0;
    if(matrix.length == 1 && matrix[0].length == 1){
        det = matrix[0][0];
    } else {
        for (var i = 0; i < matrix.length; i++) {
            det += Math.pow(-1, i) * matrix[0][i] * _matrix.determinantMinor(_matrix.minor(0, i, matrix));
        }
    }
    res = {value:det, error:false};
    if(cb){
        cb(res.error, res.value); return null;
    } else {
        if(!res.error) {
            return res.value;
        } else {
            return res;
        }
    }
};
_matrix.detMinor = _matrix.determinantMinor;

_matrix.I = function(n,cb){
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
    if(cb){
        cb(res.error, res.value); return null;
    } else {
        if(!res.error) {
            return res.value;
        } else {
            return res;
        }
    }
    return res;
};

_matrix.multiply = function(a,b,cb){

    var res = {};
    var ch = _matrix.isSquareMatrix(a);
    if(ch.error){
        res = {error: "First matrix: "+ch.error};
        if(cb){
            cb(res.error, res.value); return null;
        } else {
            return res;
        }
    };
    ch = _matrix.isSquareMatrix(b);
    if(ch.error){
        res = {error: "Second matrix: "+ch.error};
        if(cb){
            cb(res.error, res.value); return null;
        } else {
            return res;
        }
    };
    if(a.length != b.length){
        res = {error: "The dimensions of the matrices must be the same"};
        if(cb){
            cb(res.error, res.value); return null;
        } else {
            return res;
        }
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
    var res = {error: false, value:mult};
    if(cb){
        cb(res.error, res.value); return null;
    } else {
        if(!res.error) {
            return res.value;
        } else {
            return res;
        }
    }

}

_matrix.mult = _matrix.multiply;

_matrix.summary = function(a,b,cb){
    var res = {};
    var ch = _matrix.isSquareMatrix(a);
    if(ch.error){
        res = {error: "First matrix: "+ch.error};
        if(cb){
            cb(res.error, res.value); return null;
        } else {
            return res;
        }
    };
    ch = _matrix.isSquareMatrix(b);
    if(ch.error){
        res = {error: "Second matrix: "+ch.error};
        if(cb){
            cb(res.error, res.value); return null;
        } else {
            return res;
        }
    };
    if(a.length != b.length){
        res = {error: "The dimensions of the matrices must be the same"}
        if(cb){
            cb(res.error, res.value); return null;
        } else {
            return res;
        }
    };
    res.value = [];
    for(var i=0; i< a.length; i++){
        res.value[i] = [];
        for(var j=0; j< a.length; j++){
            res.value[i][j] = a[i][j]+b[i][j];
        }
    };
    res.error = false;
    if(cb){
        cb(res.error, res.value); return null;
    } else {
        if(!res.error) {
            return res.value;
        } else {
            return res;
        }
    }
};
_matrix.sum = _matrix.summary;

_matrix.sSummary = function(s,a,cb){
    var res = {}
    if(isNaN(s)){
        res = {error:"first arg must be numeric"};
        if(cb){
            cb(res.error, res.value); return null;
        } else {
            return res;
        }
    } else {
        s = parseFloat(s);
    };
    var ch = _matrix.isSquareMatrix(a);
    if(ch.error){
        res = {error: ch.error};
        if(cb){
            cb(res.error, res.value); return null;
        } else {
            return res;
        }
    };
    res.value = [];
    for(var i=0; i< a.length; i++){
        res.value[i] = []
        for(var j=0; j< a.length; j++){
            res.value[i][j] = a[i][j]+s;
        }
    };
    res.error = false;
    if(cb){
        cb(res.error, res.value); return null;
    } else {
        if(!res.error) {
            return res.value;
        } else {
            return res;
        }
    }
};
_matrix.ssum = _matrix.sSummary;

_matrix.inverse = function(a,cb){
    var res = {};
    var ch = _matrix.isSquareMatrix(a);
    if(ch.error){
        res = {error: ch.error};
        if(cb){
            cb(res.error, res.value); return null;
        } else {
            return res;
        }
    };
    var detA = _matrix.detMinor(a);
    if(detA == 0){
        res = {error:"Matrix determinant = 0"};
        if(cb){
            cb(res.error, res.value); return null;
        } else {
            return res;
        }
    }
    var adj = [];
    for(var i=0; i< a.length; i++){
        adj[i] = []
        for(var j=0; j< a.length; j++){
            adj[i][j] = Math.pow(-1,(i+j))*_matrix.detMinor(_matrix.minor(j,i,a));
        }
    };
    res.value = _matrix.smul((1/detA), adj);
    res.error = false;
    if(cb){
        cb(res.error, res.value); return null;
    } else {
        if(!res.error) {
            return res.value;
        } else {
            return res;
        }
    }
};

_matrix.sMultiply = function(s,a,cb){
    var res = {};
    if(isNaN(s)){
        res = {error:"first arg must be numeric"};
        if(cb){
            cb(res.error, res.value); return null;
        } else {
            return res;
        }
    } else {
        s = parseFloat(s);
    };
    var ch = _matrix.isSquareMatrix(a);
    if(ch.error){
        res = {error: ch.error};
        if(cb){
            cb(res.error, res.value); return null;
        } else {
            return res;
        }
    };

    res.value = [];
    for(var i=0; i< a.length; i++){
        res.value[i] = []
        for(var j=0; j< a.length; j++){
            res.value[i][j] = a[i][j]*s;
        }
    };
    res.error = false;
    if(cb){
        cb(res.error, res.value); return null;
    } else {
        if(!res.error) {
            return res.value;
        } else {
            return res;
        }
    }
};
_matrix.smul = _matrix.sMultiply;


module.exports = _matrix;