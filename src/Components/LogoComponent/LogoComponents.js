export function createLogo(cell) {
    if(cell.figure?.logo) {
       return `<img 
                class='figure ${cell.figure.color + '-' + cell.figure.name} ${cell.figure.name} ${cell.figure.color + '-figure'}' 
                src='${cell.figure.logo}' 
                alt='${cell.figure.name}'
              >`;
    }
    return '';
}