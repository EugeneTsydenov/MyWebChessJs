import Figure from "../Figure.js";
import { FigureNames } from "../../data/FigureNames.js";
import blackLogo from '../../images/black-bishop.svg';
import whiteLogo from '../../images/white-bishop.svg';

export default class Bishop extends Figure {
    constructor(cell, color) {
        super(cell, color);
        this.cell = cell;
        this.color = color;
        this.name = FigureNames.BISHOP;
        this.logo = color === 'black' ? blackLogo : whiteLogo;
    }

    canMove(target) {
        if(!super.canMove(target)) {
            return false;
        }
        return this.cell.isEmptyDiagonal(target);

    }
}