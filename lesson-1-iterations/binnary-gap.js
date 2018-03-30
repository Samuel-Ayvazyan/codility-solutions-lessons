function solution(N) {
    var i = 0;
    var cnt = 0;
    var result = 0;
    var found = false;
    while(Math.pow(2,i) < N){
        if( (Math.pow(2,i) & N) == Math.pow(2,i)) {
            if(found){
                result = (cnt>result)?cnt:result;
            }
            cnt = 0;
            found = true;
        } else {
            cnt++;
        }
        i++;
    }
    return result;
}