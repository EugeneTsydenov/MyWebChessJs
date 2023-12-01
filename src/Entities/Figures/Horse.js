import Figure from "../Figure.js";
import { FigureNames } from "../../data/FigureNames.js";
import blackLogo from '../../images/black-horse.svg';
import whiteLogo from '../../images/white-horse.svg';

export default class Horse extends Figure {
    constructor(cell, color) {
        super(cell, color);
        this.cell = cell;
        this.color = color;
        this.name = FigureNames.HORSE;
        this.logo = color === 'black' ? blackLogo : whiteLogo;
    }

    canMove(target) {
        if(!super.canMove(target)) {
            return false;
        }

        const absX = Math.abs(this.cell.x - target.x);
        const absY = Math.abs(this.cell.y - target.y);

        return ((absX === 2 && absY === 1) || (absY === 2 && absX === 1));
    }
}