function solution(A, K) {
    var el;
    for(var i = 0; i < K%A.length; i++) {
        el = A.pop();
        A.unshift(el);
    }
    return A;
}