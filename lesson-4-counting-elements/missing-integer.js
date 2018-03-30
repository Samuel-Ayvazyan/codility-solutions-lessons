function solution(A) {
    var arr = new Array(A.length);
    for(var i = 0; i < A.length; ++i){
        if(A[i]> 0){
            arr[A[i]-1]=true;
        }
    }
    for(i = 0; i < A.length; ++i){
        if(arr[i] != true) {
            return i+1;
        }
    }
    return A.length+1;
}