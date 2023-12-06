import { BoardComponent } from './src/Components/BoardComponent/BoardComponent.js'
import { CellComponent } from './src/Components/CellComponent/CellComponent.js';
import { StartButton } from './src/Components/StartGameButtonComponent/StartButton.js';
import './src/styles/style.css'

document.querySelector('#app').innerHTML = `
    <main class="main">
        <div class="lost-figures">
            <div class="white-lost-figures">
                <h2 class="title-lost-figures">
                    White eaten figures
                </h2>
                <ul class="lost-figures__list--white lost-figures__list"></ul>
            </div>
            <div class="black-lost-figures">
                <h2 class="title-lost-figures">
                    Black eaten figures
                </h2>
                <ul class="lost-figures__list--black lost-figures__list"></ul>
            </div>
        </div>
        <div class="time-and-board">
            <div class="timer black-timer"></div>
            <div class='wrapper'>
            </div>
            <div class="timer white-timer"></div>
        </div>
    </main>
`

BoardComponent(document.querySelector('.wrapper'));
StartButton(CellComponent, document.querySelector('.main'))