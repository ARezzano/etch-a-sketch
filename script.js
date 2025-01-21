var container = document.querySelector(".container");

function createBasicGrid(){
    for(var i = 0; i < 16; i++){
        var columnDiv = document.createElement("div");
        columnDiv.className = "column-div";
        
        for(var j = 0; j < 16; j++){
            var pixelDiv = document.createElement("div");
            pixelDiv.className = "row-div";
    
            columnDiv.appendChild(pixelDiv);
        }

        container.appendChild(columnDiv);
    }

    return container;
}

createBasicGrid();

container.addEventListener("click", (event)=>{
    if(event.target.classList.contains("row-div")){
        event.target.classList.add("painted");
    }
})


