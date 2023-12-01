import Cell from "./Cell.js";
import { Colors } from "../data/Colors.js";
import Bishop from "./Figures/Bishop.js";
import Horse from "./Figures/Horse.js";
import King from "./Figures/King.js";
import Pawn from "./Figures/Pawn.js";
import Queen from "./Figures/Queen.js";
import Rook from "./Figures/Rook.js";


export default class Board {
    cells = [];

    initCells() {
        for(let i = 0; i < 8; i++) {
            let row = [];
            for(let j = 0; j < 8; j++) {
                if((i + j) % 2 === 0) {
                    row.push(new Cell(i, j, Colors.WHITE));
                } else {
                    row.push(new Cell(i, j, Colors.BLACK));
                }
            }
            this.cells.push(row);
        }
    };

    getCell(x, y) {
        return this.cells[x][y];
    };

    highlightCells(cell) {
        for(let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i];
            for(let j = 0; j < row.length; j++) {
                let target = row[j];
                target.available = !!cell?.figure?.canMove(target);
            }
        }
    };

    getCopyBoard() {
        const newBoard = new Board();
        newBoard.cells = this.cells.map(row => [...row]);
        return newBoard;
    }

    addPawn() {
        for (let i = 0; i < 8; i++) {
            new Pawn(this.getCell(6, i), Colors.WHITE);
            new Pawn(this.getCell(1, i), Colors.BLACK);
        }
    };

    addRook() {
        new Rook(this.getCell(7, 7), Colors.WHITE);
        new Rook(this.getCell(7, 0), Colors.WHITE);
        new Rook(this.getCell(0, 7), Colors.BLACK);
        new Rook(this.getCell(0, 0), Colors.BLACK);
    };

    addHorse() {
        new Horse(this.getCell(7, 1), Colors.WHITE);
        new Horse(this.getCell(7, 6), Colors.WHITE);
        new Horse(this.getCell(0, 1), Colors.BLACK);
        new Horse(this.getCell(0, 6), Colors.BLACK);
    };

    addBishop() {
        new Bishop(this.getCell(7, 2), Colors.WHITE);
        new Bishop(this.getCell(7, 5), Colors.WHITE);
        new Bishop(this.getCell(0, 2), Colors.BLACK);
        new Bishop(this.getCell(0, 5), Colors.BLACK);
    };

    addQueen() {
        new Queen(this.getCell(7, 3), Colors.WHITE);
        new Queen(this.getCell(0, 3), Colors.BLACK);
    };

    addKing() {
        new King(this.getCell(7, 4), Colors.WHITE);
        new King(this.getCell(0, 4), Colors.BLACK);  
    };

    addFigures() {
        this.addPawn();
        this.addRook();
        this.addHorse();
        this.addBishop();
        this.addQueen();
        this.addKing();
    };
};

