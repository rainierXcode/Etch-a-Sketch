function main(){
    createPixel(20);
}

main();

function createPixel(pixelNum) {
  const buttons = document.querySelectorAll('.pixBtn');
  buttons.forEach(button => {
    button.style.backgroundColor = "white";
  });

  const box = document.querySelector('.mid');
  box.innerHTML = '';

  const boxSize = 500; 
  const borderWidth = 1; 
  const pixelCount = boxSize / pixelNum;

  for (let rowIdx = 0; rowIdx < pixelNum; rowIdx++) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.style.margin = "0px";
    row.style.display = "flex";

    for (let colIdx = 0; colIdx < pixelNum; colIdx++) {
      const col = document.createElement('button');
      col.classList.add('pixBtn');
      col.style.flex = `0 0 ${pixelCount}px`;
      col.style.height = `${pixelCount}px`;
      col.style.margin = "0px";
      col.style.borderWidth = `${borderWidth}px`;
      col.style.backgroundColor = "white";
      row.appendChild(col);
    }

    box.appendChild(row);
  }

  hoverEffect();
  clearDraw();
}




createPixel(40);



createPixel(10);

let selectedColor = "black"; // Default color

function getColor() {
  return selectedColor;
}

function hoverEffect() {
  const box = document.querySelector('.mid');
  let isMouseDown = false;

  box.addEventListener("mousedown", () => {
    isMouseDown = true;
  });

  document.addEventListener("mouseup", () => {
    isMouseDown = false;
  });

  box.addEventListener("mouseover", event => {
    if (isMouseDown) {
      const target = event.target;

      // Check if the target is a .pixBtn element or its child
      if (target.classList.contains("pixBtn") || target.closest(".pixBtn")) {
        target.style.backgroundColor = getColor();
      }
    }
  });
}

const colorBtns = document.querySelectorAll('.colorBtn');
colorBtns.forEach(button => {
  button.addEventListener("click", () => {
    selectedColor = button.id;
  });
});

const sizeBtns = document.querySelectorAll('.sizeBtn');

sizeBtns.forEach(button => {
  button.addEventListener('click', () => {
    const gridSize = Number(button.id);
    clearGrid(); 
    createPixel(gridSize); 
  });
});

function clearGrid() {
  const buttons = document.querySelectorAll('.pixBtn');
  buttons.forEach(button => {
    button.style.backgroundColor = "white";
  });
}

function clearDraw(){
  const clrBtn = document.getElementById('clearBtn');
  const buttons = document.querySelectorAll('.pixBtn');

  clrBtn.addEventListener('click', () => {
    buttons.forEach(button => {
      button.style.backgroundColor = "white";
    });
  });
}


main();