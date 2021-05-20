var x=document.getElementById("my_para")
var array=["mangoes","banana","grapes","apple","pine apple","lichi","stauberry"]
var i;
var text="";
for (i=0;i<array.length;i++){
    text=array[i]+"<br>"
    x.innerHTML=text
}
