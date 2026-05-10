 var add=document.querySelector(".add");
 var keep = document.querySelector(".daily-work");
 var list=document.querySelector(".list1");
add.addEventListener("click", function (){
if(keep.value===""){
    alert("please enter something");
}


var li = document.createElement("li");
li.innerText=keep.value;
li.addEventListener("click", function( ){
li.remove();


} )


list.appendChild(li);
keep.value=""






})
























// var input=document.querySelector(".daily-work");
// var list1=document.querySelector(".list1");
// var btn=document.querySelector(".add");
// btn.addEventListener("click" ,function () { 
// if(input.value===""){
// alert("please enter something");
// }
// var li=document.createElement("li");
// li.innerText=input.value;
// li.addEventListener("click",function (){
// li.remove();
// });

// list1.appendChild(li);
// input.value="";



//  });
