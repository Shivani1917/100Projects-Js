const cursor = document.querySelector(".cursor");
var timeout;

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    // cursor movement
    cursor.style.top = y +'px';
    cursor.style.left = x +'px';
    cursor.style.display = 'block';

    // animation stop
    function mouseStop(){
        cursor.style.display = 'none';
    }

    // hide animation
    clearTimeout(timeout);
    timeout = setTimeout(mouseStop, 1000)
});

// stop of the screen

document.addEventListener("mouseout",() =>{
    cursor.style.display = 'none';
})