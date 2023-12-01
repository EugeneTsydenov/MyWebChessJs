import { BoardComponent } from './src/Components/BoardComponent/BoardComponent.js'
import { CellComponent } from './src/Components/CellComponent/CellComponent.js';
import { StartButton } from './src/Components/StartGameButtonComponent/StartButton.js';
import './src/styles/style.css'

document.querySelector('#app').innerHTML = `
    <main class="main">
        <div class='wrapper'>
        </div>
    </main>
`

BoardComponent(document.querySelector('.wrapper'));
StartButton(CellComponent, document.querySelector('.main'))