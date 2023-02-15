let container = document.getElementById("container");

function makeGrid (rows, columns) {
    error.textContent = "";
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-columns", columns);
    let gridSize = rows * columns
    for (c = 0; c < (gridSize); c++) {
        let cell = document.createElement("div");
        cell.id = c;
        cell.addEventListener("mouseover",() => {
            cell.style.backgroundColor = "black"
        });
        container.appendChild(cell).className = "cell";
    };
};

function wipeGrid() {
    let cells = container.querySelectorAll("div")
    cells.forEach((div) => div.remove());
};

let create = document.getElementById("create");
let clear = document.getElementById("clear");

create.addEventListener("click", () => {
    let gridSize = prompt("How big is the grid (2 - 100)?");
    wipeGrid();
    makeGrid(gridSize, gridSize);
    throwError();
});

clear.addEventListener("click", () => {
    wipeGrid();
    makeGrid(16, 16);
});

makeGrid(16,16);

function throwError() {
    const cells = document.getElementById("container").childElementCount;
    let gridSize = Math.sqrt(cells);
    if (gridSize < 2 || gridSize > 100) {
        wipeGrid();
        let error = document.getElementById("error");
        error.textContent = "Sorry wrong size try again";
    };
};
