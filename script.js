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

function removeBorderTheCurrentButton(){
    const elementWithIDCurrent = document.getElementById("active-button");
    document.querySelectorAll(".box-color-top button").forEach((box)=>{
        box.style.border = "none";
        box.style.border = "#fff";
    })
    if(elementWithIDCurrent){
        elementWithIDCurrent.removeAttribute('id');
    }
}

initialize();
monitoringSize();
drawing('black');

//Modifier Pag
document.getElementById("clear-button").addEventListener("click", ()=>{
    clear()
})

document.getElementById("eraser-button").addEventListener("click", (event) => {
    isRainbow = false;
    drawing('white');
    removeBorderTheCurrentButton();
  
    // Use event.currentTarget to refer to the button element
    event.currentTarget.setAttribute('id', 'active-button')
  });
  
document.getElementById("rainbow-button").addEventListener('click', (event)=>{
    isRainbow = true;
    removeBorderTheCurrentButton();
    event.currentTarget.setAttribute('id', 'active-button');
})

document.getElementById("color-input").addEventListener('click', ()=>{
    removeBorderTheCurrentButton();
});

document.getElementById("color-input").addEventListener('input', (event)=>{
    const selectedColor = event.target.value;
    drawing(selectedColor);
})

//Common colors selecting
document.getElementById("black").addEventListener("click", (event)=> {
    isRainbow = false; drawing('black'); removeBorderTheCurrentButton(); event.currentTarget.style.border = '2px solid #fff'});
document.getElementById("red").addEventListener("click", (event)=> {
    isRainbow = false; drawing('red'); removeBorderTheCurrentButton(); event.currentTarget.style.border = '2px solid #fff' });
document.getElementById("yellow").addEventListener("click", (event)=> {
    isRainbow = false; drawing('yellow'); removeBorderTheCurrentButton(); event.currentTarget.style.border = '2px solid #fff'});
document.getElementById("green").addEventListener("click", (event)=> {
    isRainbow = false; drawing('green'); removeBorderTheCurrentButton(event); event.currentTarget.style.border = '2px solid #fff'});
document.getElementById("purple").addEventListener("click", (event)=> {
    isRainbow = false; drawing('purple'); removeBorderTheCurrentButton(event); event.currentTarget.style.border = '2px solid #fff'});

document.getElementById("orange").addEventListener("click", (event)=> {
    isRainbow = false; drawing('orange'); removeBorderTheCurrentButton(event); event.currentTarget.style.border = '2px solid #fff'});
document.getElementById("pink").addEventListener("click", (event)=> {
    isRainbow = false; drawing('pink'); removeBorderTheCurrentButton(event); event.currentTarget.style.border = '2px solid #fff'});
document.getElementById("brown").addEventListener("click", (event)=> {
    isRainbow = false; drawing('brown'); removeBorderTheCurrentButton(event); event.currentTarget.style.border = '2px solid #fff'});
document.getElementById("gray").addEventListener("click", (event)=> {
    isRainbow = false; drawing('gray'); removeBorderTheCurrentButton(event); event.currentTarget.style.border = '2px solid #fff'});
document.getElementById("blue").addEventListener("click", (event)=> {
    isRainbow = false; drawing('blue'); removeBorderTheCurrentButton(event); event.currentTarget.style.border = '2px solid #fff'});
