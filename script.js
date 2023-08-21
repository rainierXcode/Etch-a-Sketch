

const div = document.createElement('div');
const promptBtn = document.createElement('button');
promptBtn.textContent = 'Change Size'
div.classList.add('promptBtn');
div.appendChild(promptBtn);
document.body.appendChild(div);

const container = document.createElement('div')
const content = document.createElement('div');
content.classList.add('content');
container.classList.add('container');
document.body.appendChild(content);
content.appendChild(container);




function addGrid(pixelNum){


    
for(let row = 0; row<pixelNum; row++){
    const divRow = document.createElement('div')
    const className = "div" + (row+1);
    divRow.classList.add(className);
    divRow.classList.add('row');
    container.appendChild(divRow);
    
    for(let col = 0; col < pixelNum; col++){
        const colButton = document.createElement('button');
        colButton.classList.add('btn');
        const sizePx = 600/pixelNum;
        colButton.style.width= sizePx + 'px';
        colButton.style.height = sizePx + 'px';
        divRow.appendChild(colButton);
    }
     
}
}


function promptButton(){
    const askPrompt = document.querySelector('.promptBtn');
        askPrompt.addEventListener( 'click',() => {
            let aboveMax = true;
            while(aboveMax){
            let num = prompt("Size: ");
            num = parseInt(num);
            if(num <=100) {aboveMax= 
                false;
                const rows = document.querySelectorAll('.row');
                rows.forEach( row => {
                    row.remove();
                });
                addGrid(num);
                hoverEffect();  
            }
            }
        });
}


function hoverEffect(){
    const buttons = document.querySelectorAll('.btn');
    let isMouseDown = false; // Flag to track mouse button state


    

    buttons.forEach(button => {
            button.addEventListener("mousedown", () => {
                isMouseDown = true; 
                button.style.backgroundColor = "black"; 
            });
            
            document.addEventListener("mouseup", () => {
                isMouseDown = false; 
            });
            
            button.addEventListener("mousemove", () => {
                if (isMouseDown) {
                    button.style.backgroundColor = "black"; 
                }
            });
    });
}

function main(){
    promptButton();
    addGrid(16);
    hoverEffect();
}


main();