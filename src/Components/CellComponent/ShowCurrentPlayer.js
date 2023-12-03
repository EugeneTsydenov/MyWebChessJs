export default function showCurrentPlayer(currentPlayer) {
    const main = document.querySelector('.main');
    if(main.querySelector('.current-player')) {
        const el = main.querySelector('.current-player');
        el.innerHTML = `Сurrent move of the ${currentPlayer.toUpperCase()} pieces`
    } else {
        const el = document.createElement('p');
        el.className = 'current-player';
        el.innerHTML = `Сurrent move of the ${currentPlayer.toUpperCase()} pieces`;
        main.appendChild(el)
    }
}