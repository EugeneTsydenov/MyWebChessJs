import sound from '../../public/Sounds/1572965944_6a897efd83627af.mp3'
import {Colors} from "../../data/Colors.js";
import transformPawn from "./TransformPawn.js";
import {FigureNames} from "../../data/FigureNames.js";

export function selectedCellMove(cell, selectedCell) {
    console.log(cell, selectedCell)
    const s = new Audio(sound);
    s.volume = 0.2;
    s.play();
    // if(selectedCell?.figure?.name === FigureNames.PAWN) {
    //     if(selectedCell?.figure?.color === Colors.WHITE && cell.x === 0) {
    //         console.log(2)
    //         transformPawn()
    //     }
    // }
    // selectedCell.moveFigure(cell);
}