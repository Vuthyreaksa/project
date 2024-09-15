const h1 = document.getElementById('Rean');
console.log(h1);
// h1.innerHTML("Hello JavaScript");
h1.innerText  =("Hello World");
h1.style.color="red";
h1.style.backgroundColor ="pink";
h1.style.width ="50%";
h1.style.height="200px";

const box = document.getElementsByClassName('box');
console.log(box);
for (var i=0 ; i<=2 ; i++){
    box[i].style.backgroundColor='white';
    box[i].style.boxShadow ='5px 5px 15px #ccc';
    box[i].style.width='25%';
    box[i].style.height='200px';
}