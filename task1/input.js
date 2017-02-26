/**
 * Created by gaoshang on 2017/2/26.
 */
function input(){
    var text=document.getElementById("aqi-input"); //获取输入框内的文本
    var replaceWords=document.getElementById("aqi-display").firstChild; //获取需要被替换的文本
    replaceWords.nodeValue=text.value;  //将文本替换
}