const p = document.getElementById('bckcolor');
const b = document.getElementById('body-area');

colorFlipper.addEventListener('click',function(){
    b.style.backgroundColor = "black";
    p.innerHTML = "background color: <Strong>Black</Strong>"

    colorFlipper.addEventListener('click',function(){
        b.style.backgroundColor = "red";
        p.innerHTML = "background color: <strong>#ff0000</Strong>";

        colorFlipper.addEventListener('click',function(){
            b.style.backgroundColor = "yellow";
            p.innerHTML = "background color:<strong>rgb (60,255,255)</Strong>";

            colorFlipper.addEventListener('click',function(){
                b.style.backgroundColor = "pink";
                p.innerHTML = "background color:<strong>Pink</strong>";

                colorFlipper.addEventListener('click',function(){
                    document.location.reload(true);
                })
            })
        })
    })
})

