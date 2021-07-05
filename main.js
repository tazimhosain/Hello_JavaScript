function dollarToTaka(){
    var dol = document.getElementById("first").value;
    document.getElementById("result").innerHTML = dol + ' Dollar = ' + dol * 84.59 + ' BDT' ;
}


function passFail(){
    var number = document.getElementById("mark").value;

    if( number >= 0 && number < 33){
        document.getElementById("resultTwo").innerHTML = "tmi miya fail korcho";
    }else if( number >= 33 && number < 40){
        document.getElementById("resultTwo").innerHTML = "tmi miya D paicho, TTP";
    }else if( number >= 40 && number < 50){
        document.getElementById("resultTwo").innerHTML = "tmi miya C paicho";
    }else if( number >= 50 && number < 60){
        document.getElementById("resultTwo").innerHTML = "tmi miya B paicho";
    }else if( number >= 60 && number < 70){
        document.getElementById("resultTwo").innerHTML = "tmi miya A- paicho";
    }else if( number >= 70 && number < 80){
        document.getElementById("resultTwo").innerHTML = "tmi miya A";
    }else if( number >= 80 && number <= 100){
        document.getElementById("resultTwo").innerHTML = "tmi miya A+, Dat ber koira ekta hasi dew";
    }else{
        document.getElementById("resultTwo").innerHTML = "Gaza khawa bad diye diner pothe aso";
    }
}