import Figure from "../Figure.js";
import { FigureNames } from "../../data/FigureNames.js";
import blackLogo from '../../images/black-king.svg';
import whiteLogo from '../../images/white-king.svg';

export default class King extends Figure {
    constructor(cell, color) {
        super(cell, color);
        this.cell = cell;
        this.color = color;
        this.name = FigureNames.KING;
        this.logo = color === 'black' ? blackLogo : whiteLogo;
    }

    canMove(target) {
        if(!super.canMove(target)) {
            return false;
        }

        const absX = Math.abs(this.cell.x - target.x);
        const absY = Math.abs(this.cell.y - target.y);

        if(absX > 1 || absY > 1) {
            return false;
        }

        return true;
    }
}