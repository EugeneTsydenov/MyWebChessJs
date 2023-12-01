import Figure from "../Figure.js";
import { FigureNames } from "../../data/FigureNames.js";
import blackLogo from '../../images/black-pawn.svg';
import whiteLogo from '../../images/white-pawn.svg';
import {Colors} from "../../data/Colors.js";

export default class Pawn extends Figure {
    isFirstStep = true;
    constructor(cell, color) {
        super(cell, color);
        this.cell = cell;
        this.color = color;
        this.name = FigureNames.PAWN;
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    }

    canMove(target) {
        if (!super.canMove(target)) {
            return false;
        }

        const direction = this.cell.figure.color === Colors.BLACK ? 1 : -1;
        const firstStepDirection = this.cell.figure.color === Colors.BLACK ? 2 : -2;

        for (let i = this.cell.x + direction; i !== target.x; i += direction) {
            if (i < 0 || i >= 8) {
                return false;
            }
            const cell = this.cell.board.getCell(i, target.y);
            if (!cell.isEmpty()) {
                return false
            }
        }

        if (
            (target.x === this.cell.x + direction
                || (this.isFirstStep && target.x === this.cell.x + firstStepDirection))
            && target.y === this.cell.y
            && this.cell.board.getCell(target.x, target.y).isEmpty()
        ) {
            return true;
        }

        return target.x === this.cell.x + direction
            && (target.y === this.cell.y + 1 || target.y === this.cell.y - 1)
            && this.cell.isEnemy(target);
    };



    moveFigure(target) {
        super.moveFigure(target);
        if(this.isFirstStep) {
            this.isFirstStep = false;
        }
    };
}
