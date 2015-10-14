function roman(num){
    var roman = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
    };
    

var str='';
var num = 526;
for (var letter in roman){
    var dummy = Math.floor(num/roman[letter])
    if(dummy > 0){
        for(var i = 1; i <= dummy; i++){
            str += letter;
            num = num - roman[letter];
        };
    };
};
//626
//DCXXVI


