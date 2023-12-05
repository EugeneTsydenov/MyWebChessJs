export default function renderLostFigures(board) {
    const whiteList = document.querySelector('.lost-figures__list--white');
    const blackList = document.querySelector('.lost-figures__list--black');
    const items = document.querySelectorAll('.lost-figures__item');
    const figures = document.querySelectorAll('lost-figure__img');

    items.forEach(item => item.remove());
    figures.forEach(figure => figure.remove());

    board.lostWhiteFigures.forEach(whiteFigure => {
        whiteList.innerHTML += `
            <li class="lost-figures__item">
                <img class="lost-figure__img" src="${whiteFigure.logo}" alt="${whiteFigure.name}">
            </li>
        `
    })
    board.lostBlackFigures.forEach(blackFigure => {
        blackList.innerHTML += `
            <li class="lost-figures__item">
                <img class="lost-figure__img" src="${blackFigure.logo}" alt="${blackFigure.name}">
            </li>
        `
    })
}