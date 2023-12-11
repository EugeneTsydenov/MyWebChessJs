import {Colors} from "../../data/Colors.js";
import QueenImgW from '../../public/images/white-queen.svg';
import RookImgW from '../../public/images/white-rook.svg';
import BishopImgW from '../../public/images/white-bishop.svg';
import HorseImgW from '../../public/images/white-horse.svg';
import QueenImgB from '../../public/images/black-queen.svg';
import RookImgB from '../../public/images/black-rook.svg';
import BishopImgB from '../../public/images/black-bishop.svg';
import HorseImgB from '../../public/images/black-horse.svg';
import Queen from "../../Entities/Figures/Queen.js";
import Rook from "../../Entities/Figures/Rook.js";
import Bishop from "../../Entities/Figures/Bishop.js";
import Horse from "../../Entities/Figures/Horse.js";

export default function transformPawn(cell, selectedCell, highlightCell) {
   if(selectedCell.figure?.color === Colors.WHITE) {
       createRadioWhiteFigures(selectedCell, cell, highlightCell)
   } else {
       createRadioBlackFigures(selectedCell, cell, highlightCell)
   }
   disableBoard()
}

const figures = ['queen', 'rook', 'bishop', 'horse'];

function createRadioWhiteFigures(selectedCell, cell, highlightCell) {
    const el = document.querySelector(`.change-white`);
    const imgFig = [QueenImgW, RookImgW, BishopImgW, HorseImgW];
    for(let i = 0; i < 4; i++) {
        const btn = document.createElement('button');
        btn.className = `change-btn change-${figures[i]}-white`;
        btn.onclick = () => {
            if(figures[i] === 'queen') {
                cell.figure?.promotePawn(new Queen(cell, Colors.WHITE));
            } else if(figures[i] === 'rook') {
                cell.figure?.promotePawn(new Rook(cell, Colors.WHITE));
            } else if(figures[i] === 'bishop') {
                cell.figure?.promotePawn(new Bishop(cell, Colors.WHITE));
            } else {
                cell.figure?.promotePawn(new Horse(cell, Colors.WHITE))
            }
            highlightCell(null);
            while(el.firstChild) {
                el.firstChild.remove();
            }
            enableBoard()
        }
        const img = document.createElement('img');
        img.src = imgFig[i];
        img.alt = figures[i];
        img.className = 'promote-figure';
        btn.append(img)
        el.append(btn);
    }
}

function createRadioBlackFigures(selectedCell, cell, highlightCell) {
    const el = document.querySelector(`.change-black`);
    const imgFig = [QueenImgB, RookImgB, BishopImgB, HorseImgB];
    for(let i = 0; i < 4; i++) {
        const btn = document.createElement('button');
        btn.className = `change-btn change-${figures[i]}-black`;
        btn.onclick = () => {
            if(figures[i] === 'queen') {
                cell.figure?.promotePawn(new Queen(cell, Colors.BLACK));
            } else if(figures[i] === 'rook') {
                cell.figure?.promotePawn(new Rook(cell, Colors.BLACK));
            } else if(figures[i] === 'bishop') {
                cell.figure?.promotePawn(new Bishop(cell, Colors.BLACK));
            } else {
                cell.figure?.promotePawn(new Horse(cell, Colors.BLACK))
            }
            highlightCell(null);
            while(el.firstChild) {
                el.firstChild.remove();
            }
            enableBoard()
        }
        const img = document.createElement('img');
        img.src = imgFig[i];
        img.alt = figures[i];
        img.className = 'promote-figure';
        btn.append(img)
        el.append(btn);
    }
}

function disableBoard() {
    const el = document.querySelector('.time-and-board')
    const disEl = document.createElement('div');
    disEl.className = 'disabled-board';
    el.append(disEl)
}

function enableBoard() {
    const disEl = document.querySelector('.disabled-board');
    disEl.remove();
}