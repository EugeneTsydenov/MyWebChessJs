import Figure from "../Figure.js";
import { FigureNames } from "../../data/FigureNames.js";
import blackLogo from '../../images/black-rook.svg';
import whiteLogo from '../../images/white-rook.svg';

export default class Rook extends Figure {
    constructor(cell, color) {
        super(cell, color);
        this.cell = cell;
        this.color = color;
        this.name = FigureNames.ROOK;
        this.logo = color === 'black' ? blackLogo : whiteLogo;
    };

    canMove(target) {
        if(!super.canMove(target)) {
            return false;
        }


        return this.cell.isEmptyVertical(target) || this.cell.isEmptyHorizontal(target);

    };
}