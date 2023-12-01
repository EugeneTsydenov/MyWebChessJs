export function clearAvailableHighlighting() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        const element = square.querySelector('.available');
        element && element.remove();
        if (square.classList.contains('available-attack')) {
            square.classList.remove('available-attack');
        }
    });
}

export function addAvailableClass(cell, board) {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        const x = parseInt(square.id[0]);
        const y = parseInt(square.id[1]);
        const targetCell = board.getCell(x, y);

        if (!targetCell.figure && targetCell.available) {
            square.innerHTML += "<div class='available'></div>";
        }

        if (targetCell.available && targetCell.figure && cell?.figure.color !== targetCell?.figure.color) {
            square.classList.add('available-attack');
        }
    });
}