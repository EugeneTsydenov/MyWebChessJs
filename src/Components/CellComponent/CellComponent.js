import Board from "../../Entities/Board.js";
import { createLogo } from "../LogoComponent/LogoComponents.js";
import {selectCell} from "./SelectCell.js";
import {addAvailableClass, clearAvailableHighlighting} from "./AvailableCellUtilities.js";
import {selectedCellMove} from "./MoveUtilities.js";
import {renderBoard} from "./RenderUtilities.js";
import showCurrentPlayer from "./ShowCurrentPlayer.js";
import renderLostFigures from "../LostFigures/LostFigures.js";
import {
    showBlackTimer,
    showWhiteTimer,
    startBlackTimer, startWhiteTimer, stopBlackTimer,
    stopWhiteTimer,
} from "./ShowTimer.js";
export {clearAvailableHighlighting} from "./AvailableCellUtilities.js";

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
    let currentPlayer = 'white';
    showCurrentPlayer(currentPlayer);

    function handleCellClick(cell) {
        if (!selectedCell) {
            if (cell?.figure?.color !== currentPlayer) return;

            selectedCell = cell;
            highlightCell(cell);
            selectCell()(cell, selectedCell);
        } else if (selectedCell === cell) {
            selectedCell = null;
            highlightCell(null);
        } else {
            if (selectedCell.figure.color === currentPlayer
                && cell?.figure?.color !== selectedCell?.figure?.color
                && !!selectedCell?.figure.canMove(cell)) {
                if (selectedCell?.figure?.color === 'white') {
                    stopWhiteTimer();
                    startBlackTimer();
                    showBlackTimer()
                }
                if (selectedCell?.figure?.color === 'black') {
                    stopBlackTimer();
                    startWhiteTimer();
                    showWhiteTimer()
                }

                currentPlayer = currentPlayer === 'white' ? 'black' : 'white';
                showCurrentPlayer(currentPlayer);
                selectedCellMove(cell, selectedCell);
                renderLostFigures(board);
            }
            selectedCell = null;
            highlightCell(null);
        }
    }

    startWhiteTimer();

    showBlackTimer();
    showWhiteTimer();

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
                handleCellClick(cell)
            }
        });
    }
}

