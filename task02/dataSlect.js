/**
 * Created by gaoshang on 2017/2/26.
 */


var aqiData = [
    ["北京", 90],
    ["上海", 50],
    ["福州", 10],
    ["广州", 50],
    ["成都", 90],
    ["西安", 100]
];
var number=[];
var city=[];
 function mySort(a, b) {
    return a-b;
 }

 for(var i=0;i<aqiData.length;i++){
     if (aqiData[i][1]<=60) {
        aqiData[i][0] = "del";
        aqiData[i][1] = "del";
     }

 }


 for (var i=0; i<aqiData.length; i++){
     if (aqiData[i][0]==="del"){
         aqiData.splice(i,1);
     }
 }



for(var i=0; i<aqiData.length; i++){
     document.writeln(aqiData[i][0]+" "+aqiData[i][1]);
}