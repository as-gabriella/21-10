var count = 0;

var output = document.getElementById('output');

function countClicks()

{
count = count +1;
output.innerHTML= count; 
}

rosa.addEventListener('mouseover', () => {
    rosa.style.transform = 'scale(1.1)' ;   
});

rosa.addEventListener('mouseout',() => {
    rosa.style.transform = 'scale(1)'
});

function trocarFundo (){
    document.body.style.backgroundColor = 'hotpink'
}

Bb.addEventListener('click',trocarFundo)


