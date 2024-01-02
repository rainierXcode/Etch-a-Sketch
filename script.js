const slider = document.getElementById("myRange");
const rangeValue  = document.getElementById("rangeValue");
const rainbowColors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
  ];
  
let isRainbow = false;

function createBoxes(count){
    const sketchBox = document.querySelector(".sketch-box")    
    while(sketchBox.firstChild){
        sketchBox.removeChild(sketchBox.firstChild);
    }

    let countDouble = count * count;
    for(let box = 0; box < countDouble; box++){
        const newBox = document.createElement('button');
        newBox.classList.add("remove-attributes-button");
        sketchBox.appendChild(newBox);
    }
    sketchBox.style.gridTemplateRows = `repeat(${count}, 1fr)`; 
    sketchBox.style.gridTemplateColumns = `repeat(${count}, 1fr)`; 
}


function initialize(){
    createBoxes(10);
    rangeValue.textContent = slider.value;
}

function monitoringSize(){
    slider.addEventListener("input", ()=>{
        let value = slider.value;
        rangeValue.textContent = value;
        createBoxes(value);
        drawing('black');
    })
}

function drawing(color){
    const boxes = document.querySelectorAll(".sketch-box button")   
    let isDrawing = false;
    boxes.forEach(box => {
      box.addEventListener('mouseenter', () => {
        if (isDrawing) {
          if(isRainbow){
            const randomIndex = Math.floor(Math.random() * rainbowColors.length);
            const color = rainbowColors[randomIndex];
            box.style.backgroundColor = color;
          }
          else{
            box.style.backgroundColor = color;
          }
        }
      });

      box.addEventListener('click',()=>{
        if(isRainbow){
            const randomIndex = Math.floor(Math.random() * rainbowColors.length);
            const color = rainbowColors[randomIndex];
            box.style.backgroundColor = color;
        }
        else{
          box.style.backgroundColor = color;
        }
      })
    });
    
    document.addEventListener('mousedown', () => {
      isDrawing = true;
    });
    
    document.addEventListener('mouseup', () => {
      isDrawing = false;
    });
}

function clear(){
    const boxes = document.querySelectorAll(".sketch-box button");
    boxes.forEach(box=>{
        box.style.backgroundColor = 'white';
    })
}



initialize();
monitoringSize();
drawing('black');

//Modifier Page

const allButtons = document.querySelectorAll(".all-buttons");
allButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        allButtons.forEach(button =>{
            button.style.border = 'none'
            button.style.borderColor = '#fff';
        });
        button.style.border  = '2px solid #fff';
    })
})


document.getElementById("clear-button").addEventListener("click", ()=>{
    isRainbow = false;
    clear()
})

document.getElementById("eraser-button").addEventListener("click", (event) => {
    isRainbow = false;
    drawing('white');
  
    event.currentTarget.setAttribute('id', 'active-button')
  });
  
document.getElementById("rainbow-button").addEventListener('click', (event)=>{
    isRainbow = true;
    event.currentTarget.setAttribute('id', 'active-button');
})

document.getElementById("color-input").addEventListener('click', ()=>{
    isRainbow = false;
    allButtons.forEach(button =>{
        button.style.border = 'none'
        button.style.borderColor = '#fff';
    });
    document.getElementById("more-colors-button").style.border = '2px solid #fff';
});

document.getElementById("color-input").addEventListener('input', (event)=>{
    isRainbow = false;
    const selectedColor = event.target.value;
    drawing(selectedColor);
})

document.getElementById("more-colors-button").addEventListener('click', ()=>{
    isRainbow = false;
    drawing(document.getElementById('color-input').value);
})


//Common colors selecting
document.getElementById("black").addEventListener("click", (event)=> {
    isRainbow = false; drawing('black')});

document.getElementById("red").addEventListener("click", (event)=> {
    isRainbow = false; drawing('red');});

document.getElementById("yellow").addEventListener("click", (event)=> {
    isRainbow = false; drawing('yellow');});

document.getElementById("green").addEventListener("click", (event)=> {
    isRainbow = false; drawing('green');});

document.getElementById("purple").addEventListener("click", (event)=> {
    isRainbow = false; drawing('purple');});


document.getElementById("orange").addEventListener("click", (event)=> {
    isRainbow = false; drawing('orange');});

document.getElementById("pink").addEventListener("click", (event)=> {
    isRainbow = false; drawing('pink');});

document.getElementById("brown").addEventListener("click", (event)=> {
    isRainbow = false; drawing('brown');});

document.getElementById("gray").addEventListener("click", (event)=> {
    isRainbow = false; drawing('gray');});
    
document.getElementById("blue").addEventListener("click", (event)=> {
    isRainbow = false; drawing('blue');});
