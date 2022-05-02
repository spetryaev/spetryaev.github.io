const imagesUri = '/assets/images/';

const images = [
    {
        name: 'Tanya',
        src: imagesUri + 'art-1.jpg',
        shape: 'square',
        orientation: ''
    },
    {
        name: 'Daria',
        src: imagesUri + 'art-2.jpg',
        shape: 'square',
        orientation: ''
    },
    {
        name: 'Sailortomato',
        src: imagesUri + 'art-3.jpg',
        shape: 'rectangle',
        orientation: 'horizontal'
    },
    {
        name: 'Will',
        src: imagesUri + 'art-4.jpg',
        shape: 'rectangle',
        orientation: 'horizontal'
    },
    {
        name: 'Nikita',
        src: imagesUri + 'art-5.png',
        shape: 'square',
        orientation: ''
    },
]

const getImages = (n) => {
    const artworks = [];
    for (var i = 0; i < n; i++) {
        artworks.push(images[Math.floor(Math.random() * images.length)]);
    }
    return artworks;
}

export const getImage = (n) => {
    const artworks = [];
    artworks.push(images[n]);
    return artworks;
}

export default getImages;