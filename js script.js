const btn = document.querySelector('button');     
const body = document.querySelector('body');     
const color= ['purple','black','red','green','pink','yellow','blue','orange','gray'];
document.addEventListener('click',function(){
const colorindex = parseInt(Math.random()*color.length);
body.style.background= color[colorindex];
});