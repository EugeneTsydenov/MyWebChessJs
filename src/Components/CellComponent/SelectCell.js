export function selectCell() {

    return function(cell, selectedCell) {
        const square = document.getElementById(cell.x + '' + cell.y);
        if(cell.figure?.logo && selectedCell) {
            const el = document.getElementById(selectedCell.x + '' + selectedCell.y);
            el.classList.remove('select');
        }
        if(cell.figure?.logo && !square.classList.contains('select')) {
            square.classList.add('select');
        }
    }
}