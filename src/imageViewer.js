import small from './img/1.jpg';
import large from './img/2.jpg';

export const loadSmallImage = () => {
    const smallImage = document.createElement('img');
    smallImage.src = small;
    document.body.appendChild(smallImage);
}
export const loadLargeImage = () => {
    const largeImage = document.createElement('img');
    largeImage.src = small;
    document.body.appendChild(largeImage);
}