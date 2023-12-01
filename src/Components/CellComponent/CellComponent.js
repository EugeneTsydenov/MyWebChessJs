import Board from "../../Entities/Board.js";
import { createLogo } from "../LogoComponent/LogoComponents.js";
import {selectCell} from "./SelectCell.js";
import {addAvailableClass, clearAvailableHighlighting} from "./AvailableCellUtilities.js";
import {selectedCellMove} from "./MoveUtilities.js";
import {renderBoard} from "./RenderUtilities.js";
export {clearAvailableHighlighting} from "./AvailableCellUtilities.js"

export const CellComponent = (element) => {
    let board = new Board();
    board.initCells();
    board.addFigures();

    function highlightCell(cell) {
        board.highlightCells(cell);
        updateBoard();
        addAvailableClass(cell, board);
    }

    function updateBoard() {
        board = board.getCopyBoard();
        renderBoard(element, clearAvailableHighlighting, getCells, board);
    }

    board.cells.forEach(row => getCells(row));

    let selectedCell = null;
    const closure = selectCell();

    function getCells(row) {
        row.forEach(cell => {
            const square = document.createElement('div');
            square.className = `square ${'square-' + cell.color}`;
            square.id = cell.x + '' + cell.y;
            square.innerHTML += createLogo(cell);
            element.appendChild(square);
            cell.board = board;
            square.draggable = true;
            square.onclick = () => {
                if (!selectedCell) {
                    selectedCell = cell;
                    highlightCell(cell);
                    closure(cell, selectedCell);
                } else if (selectedCell === cell) {
                    selectedCell = null;
                    highlightCell(null);
                } else {
                    selectedCellMove(cell, selectedCell);
                    selectedCell = null;
                    highlightCell(null);
                }
            }
        });
    }
}
