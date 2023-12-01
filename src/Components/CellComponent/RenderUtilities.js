export function renderBoard(element, clearAvailableHighlighting, getCells, board) {
    clearAvailableHighlighting();
    while (element.firstChild) {
        element.firstChild.remove();
    }
    board.cells.forEach(row => getCells(row));
}