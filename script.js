var container = document.querySelector(".container");
var regenbutton = document.querySelector(".generate-grid");
var xInput = document.getElementById("xinput");
var yInput = document.getElementById("yinput");
var currentColor = getRandomColor();
var clickText = document.getElementById("click-text");
clickText.style.color = currentColor;

function createGrid(rows, cols){
    container.innerHTML = "";

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    var pixelWidth = Math.floor(containerWidth / rows);
    var pixelHeight = Math.floor(containerHeight / cols);

    for(var i = 0; i < rows; i++){
        var columnDiv = document.createElement("div");
        columnDiv.className = "column-div";
        
        for(var j = 0; j < cols; j++){
            var pixelDiv = document.createElement("div");
            pixelDiv.className = "row-div";
            pixelDiv.style.width = `${pixelWidth}px`;
            pixelDiv.style.height = `${pixelHeight}px`;
    
            columnDiv.appendChild(pixelDiv);
        }

        container.appendChild(columnDiv);
    }

    return container;
}

function getRandomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

createGrid(16,16);

container.addEventListener("click", (event)=>{
    if(event.target.classList.contains("row-div")){
        currentColor = getRandomColor();
        clickText.style.color = currentColor;
    }
})

container.addEventListener("mouseover", (event)=>{
    if(event.target.classList.contains("row-div")){
        event.target.style.backgroundColor = currentColor;
    }
})

regenbutton.addEventListener("click", ()=>{
    let newRows = xInput.value;
    let newCols = yInput.value;

    return createGrid(newRows,newCols);
});


