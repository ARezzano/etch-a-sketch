var container = document.querySelector(".container");
var currentColor = getRandomColor();

function createGrid(rows = 16, cols = 16){
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

createGrid(40,40);

container.addEventListener("click", (event)=>{
    if(event.target.classList.contains("row-div")){
        currentColor = getRandomColor();
    }
})

container.addEventListener("mouseover", (event)=>{
    if(event.target.classList.contains("row-div")){
        event.target.style.backgroundColor = currentColor;
    }
})


