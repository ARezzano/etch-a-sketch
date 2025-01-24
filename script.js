var container = document.querySelector(".container");
var regenbutton = document.querySelector(".generate-grid");
var pixInput = document.getElementById("pixinput");
var currentColor = getRandomColor();
var clickText = document.getElementById("click-text");
var cloneText = document.getElementById("clonetext");
clickText.style.color = currentColor;

function createGrid(val){
    container.innerHTML = "";

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    var pixelWidth = Math.floor(containerWidth / val);
    var pixelHeight = Math.floor(containerHeight / val);

    for(var i = 0; i < val; i++){
        var columnDiv = document.createElement("div");
        columnDiv.className = "column-div";
        
        for(var j = 0; j < val; j++){
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

function enforceMinMax(val){
    if(val.value != ""){
        if(parseInt(val.value) < parseInt(val.min)){
            val.value = val.min;
        }
        if(parseInt(val.value) > parseInt(val.max)){
            val.value = val.max;
        }
    }
}

cloneText.textContent = "wide and 0 pixels high!";
createGrid(16);

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
    if((xInput.value == 1) && (yInput.value == 1)){
        let sillyText = document.createElement("p");
        sillyText.textContent = "OK I like it, Picasso!";
        event.target.appendChild(sillyText);
    }
})

regenbutton.addEventListener("click", ()=>{
    let newPix = pixInput.value;
    cloneText.textContent = `wide and ${pixInput.value} pixels high!`;

    return createGrid(newPix);
});

