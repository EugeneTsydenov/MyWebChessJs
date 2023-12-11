import sound from '../../public/Sounds/1572965944_6a897efd83627af.mp3';
import {FigureNames} from "../../data/FigureNames.js";
import transformPawn from "./TransformPawn.js";

export function selectedCellMove(cell, selectedCell, highlightCell) {
    const s = new Audio(sound);
    s.volume = 0.2;
    s.play();
    if(selectedCell?.figure?.name === FigureNames.PAWN) {
        if(cell.x === 0 || cell.x === 7) {
            transformPawn(cell, selectedCell, highlightCell)
        }
    }
    selectedCell.moveFigure(cell);
}