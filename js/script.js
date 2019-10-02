function rata(){
var num1 = document.myform.angka1.value;
var num2 = document.myform.angka2.value;
var num3 = document.myform.angka3.value;
var mean = (parseInt(num1) + parseInt(num2) + parseInt(num3))/3;
document.getElementById('rata1').value = mean;}
function tengah(){
var num1 = document.myform.angka1.value;
var num2 = document.myform.angka2.value;
var num3 = document.myform.angka3.value;
var jumlah=new Array(num1,num2,num3).sort();
document.getElementById('tengah1').value = jumlah[1];}
function tinggi(){
var num1 = document.myform.angka1.value;
var num2 = document.myform.angka2.value;
var num3 = document.myform.angka3.value;
var max = Math.max(num1,num2,num3);
document.getElementById('tinggi1').value = max;}
function rendah(){
var num1 = document.myform.angka1.value;
var num2 = document.myform.angka2.value;
var num3 = document.myform.angka3.value;
var min = Math.min(num1,num2,num3);
document.getElementById('rendah1').value = min;}
function clear(){
}
function modus(){
var num1 = document.myform.angka1.value;
var num2 = document.myform.angka2.value;
var num3 = document.myform.angka3.value;
if(num1==num2||num1==num3){
   document.getElementById('modus1').value = num1;
}
else if (num2==num3){
   document.getElementById('modus1').value = num2;
}
else {
   document.getElementById('modus1').value = "Modus Tidak Ada"
}
}