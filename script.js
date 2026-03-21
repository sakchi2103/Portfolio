const words=["Java Developer","Data Analyst","Problem Solver","DSA Enthusiast"];

let i=0;
let timer;

function typingEffect(){

let word=words[i].split("");
let loopTyping=function(){

if(word.length>0){
document.getElementById("typing").innerHTML+=word.shift();
}else{
deletingEffect();
return;
}
timer=setTimeout(loopTyping,120);
}

loopTyping();

}

function deletingEffect(){

let word=words[i].split("");

let loopDeleting=function(){

if(word.length>0){
word.pop();
document.getElementById("typing").innerHTML=word.join("");
}else{
i++;
if(i>=words.length){
i=0;
}
typingEffect();
return;
}

timer=setTimeout(loopDeleting,60);

}

loopDeleting();

}

typingEffect();


document.getElementById("mode").onclick=function(){

document.body.classList.toggle("dark");

};