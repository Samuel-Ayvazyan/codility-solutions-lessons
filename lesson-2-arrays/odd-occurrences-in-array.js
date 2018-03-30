function solution(A) {
    var result = 0;
    for(var i = 0; i < A.length; i++) {
        result = result ^ A[i];
    }
    return result;
}