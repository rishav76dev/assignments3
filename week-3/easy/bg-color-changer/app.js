const buttons =document.querySelectorAll('#color-box button');
const newbutton = document.getElementById('addcolorbtn');
const colorInput = document.getElementById('colorPicker');

buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        const color = button.style.backgroundColor;
        document.body.style.backgroundColor = color;
    }
    );
});

newbutton.addEventListener("click", newcoloradd)

function newcoloradd(){
    const selectedColor = colorInput.value;
    const newbtn= document.createElement('button');
    newbtn.addEventListener('click', () => {
    document.body.style.backgroundColor = selectedColor;
    
    });

    newbtn.style.backgroundColor = selectedColor;
    document.getElementById('color-box').appendChild(newbtn);


    document.body.style.backgroundColor = selectedColor; 

}