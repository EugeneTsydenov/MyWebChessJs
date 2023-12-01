import Board from "./Board.js";

export default class Cell {
    constructor(x, y, color, figure = null) {
        this.x = x;
        this.y = y;
        this.board = new Board();
        this.color = color;
        this.figure = figure;
        this.available = true;
    }

    isEmpty() {
        return this.figure === null;
    }

    isEnemy(target) {
        if(target.figure) {
            return this?.figure?.color !== target?.figure?.color
        }
        return false
    }

    isEmptyDiagonal(target) {
        const absX = Math.abs(this.x - target.x);
        const absY = Math.abs(this.y - target.y);

        if(absX !== absY) {
            return false
        }

        const dx = this.x < target.x ? 1 : -1;
        const dy = this.y < target.y ? 1 : -1;

        for(let i = 1; i < absY; i++) {
            if(!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty()) {
                return false
            }
        }

        return true
    }

    isEmptyHorizontal(target) {
        if(this.x !== target.x) {
            return false;
        }

        const min = Math.min(target.y, this.y);
        const max = Math.max(target.y, this.y);

        for(let y = min + 1; y < max; y++) {
            if(!this.board.getCell(this.x, y).isEmpty()) {
                return false
            }
        }

        return true
    }

    isEmptyVertical(target) {
        if(this.y !== target.y) {
            return false;
        }

        const min = Math.min(target.x, this.x);
        const max = Math.max(target.x, this.x);

        for(let x = min + 1; x < max; x++) {
            if(!this.board.getCell(x, this.y).isEmpty()) {
                return false
            }
        }

        return true
    }

    setFigure(figure) {
        this.figure = figure;
        this.figure.cell = this;
    }

    moveFigure(cell) {
        if(!this.figure) {
            return;
        }
        if(this.figure && this.figure?.canMove(cell) && this?.figure?.color !== cell?.figure?.color) {
            cell.setFigure(this.figure)
            this.figure.moveFigure(cell)
            this.figure = null;
        }
    }
}