/**
 * Created by gaoshang on 2017/2/26.
 */
function input(){
    var text=document.getElementById("aqi-input");
    var replaceWords=document.getElementById("aqi-display").firstChild;
    replaceWords.nodeValue=text.value;
}