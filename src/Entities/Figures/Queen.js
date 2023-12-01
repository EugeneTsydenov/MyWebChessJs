import Figure from "../Figure.js";
import { FigureNames } from "../../data/FigureNames.js";
import blackLogo from '../../images/black-queen.svg';
import whiteLogo from '../../images/white-queen.svg';

export default class Queen extends Figure {
    constructor(cell, color) {
        super(cell, color);
        this.cell = cell;
        this.color = color;
        this.name = FigureNames.QUEEN;
        this.logo = color === 'black' ? blackLogo : whiteLogo;
    }

    canMove(target) {
        if(!super.canMove(target)) {
            return false;
        }
        if(this.cell.isEmptyVertical(target) || this.cell.isEmptyHorizontal(target) || this.cell.isEmptyDiagonal(target)) {
            return true;
        }
        return false;
    }
}