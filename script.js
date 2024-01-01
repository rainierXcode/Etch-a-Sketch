const slider = document.getElementById("myRange");
const rangeValue  = document.getElementById("rangeValue");


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
        drawing();
    })
}

function drawing(){
    const boxes = document.querySelectorAll(".sketch-box button")   
    let isDrawing = false;
    
    boxes.forEach(box => {
      box.addEventListener('mouseenter', () => {
        if (isDrawing) {
          box.style.backgroundColor = 'black';
        }
      });
    });
    
    document.addEventListener('mousedown', () => {
      isDrawing = true;
    });
    
    document.addEventListener('mouseup', () => {
      isDrawing = false;
    });
    
}

initialize();
monitoringSize();
drawing();