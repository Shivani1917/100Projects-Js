let addbtn = document.querySelector('#add');
let subbtn = document.querySelector('#sub');
let box = document.querySelector('#box');

addbtn.addEventListener('click', ()=>{
    box.value = parseInt(box.value) + 1;
});

subbtn.addEventListener('click', ()=>{
    if(box.value <= 0){
        box.value = 0;
    }
    else{
        box.value = parseInt(box.value) - 1;
    }
});