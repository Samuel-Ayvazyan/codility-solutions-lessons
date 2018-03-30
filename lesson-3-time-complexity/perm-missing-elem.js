function solution(A) {
    var L = A.length+1;
    if( L == 1 ) return 1;
    summ = A.reduce(function(a,b){return a+b});
    return L*(L+1)/2 - summ;
}