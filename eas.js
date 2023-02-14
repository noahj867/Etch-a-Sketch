let container = document.getElementById("container");

function makeRows (rows, columns) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-columns", columns);
    for (c = 0; c < (rows * columns); c++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover",() => {
            cell.style.backgroundColor = "black"
        });
        container.appendChild(cell).className = "cell";
    };
}

// function fillCell(e) {
//     e.target.style = `background-color: black`;

    // const gridItems = document.querySelectorAll(".cell");
    // gridItems.forEach(cell => cell.addEventListener("mouseover", () => fillCell()))
makeRows(16,16);

    
