function solution(A) {
    var left = 0;
    var right = 0;
    var diff = 0;
    var result = Infinity;
    allsum = A.reduce(function(a,b){return a+b});
    for(var i = 1; i < A.length; ++i){
        left = left + A[i-1];
        right = allsum - left;
        diff = Math.abs(left - right);
        result = (result > diff)?diff:result;
    }
    return result;
}