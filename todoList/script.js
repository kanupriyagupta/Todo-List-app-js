 var nodelist = document.getElementById("myUL");
 var i;


var textinput = document.getElementById("myInput");
textinput.addEventListener("keyup", function(event){
if(event.keyCode ===13){
    event.preventDefault();
    document.getElementById("myBtn").click();
}
});

 for (i=0; i <nodelist.length; i++){

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");

    span.className ="close";

    span.appendChild(txt);
    nodelist[i].appendChild(span);
   }
 
// function addItem() {
//     var ul = document.getElementById("myUL");
//     var candidate = document.getElementById("myInput");
//     var li = document.createElement("li");
//     li.setAttribute('id', candidate.value);
//     li.appendChild(document.createTextNode(candidate.value));

//     var span = document.createElement("span");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     span.addEventListener('click', () => {
//         li.remove();
//     });

//     li.appendChild(span);
//     ul.appendChild(li);
// }

  var close = document.getElementsByClassName("close");
  var i ;
 for(i=0; i<close.length;i++){

    close[i].onclick = function(){ 
        var div = this.parentElement;
        div.style.display= "none";
    } 
}

function newElement(){
 var li = document.createElement("li");
 var inputValue = document.getElementById("myInput").value;

 var t= document.createTextNode(inputValue);
 li.appendChild(t);

 if(inputValue == ''){
     alert("you must write something");
 }else
 {
     document.getElementById("myUL").appendChild(li);
 li.className = "list-group-item";
    }
     document.getElementById("myInput").value = " ";

    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");
 span.className = "close";

 span.appendChild(text);
 li.appendChild(span);

for(i =0; i< close.length ; i++){

    close[i].onclick= function(){
        var div = this.parentElement;
        div.style.display ="none";

    }
}

}