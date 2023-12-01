export const StartButton = (func, element) => {
    const button = document.createElement('button');
    button.className = 'start_btn';
    button.innerHTML = 'Start Game';
    element.appendChild(button);
    button.onclick = () => {
        func(document.querySelector('.board'));
        button.remove();
    };
}