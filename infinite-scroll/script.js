const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash API
const count = 30;
const apiKey = 'PkVdk0C4ETSy4b1BwPuGQ4FZRjpM6hw9GQl8E3hQLfA'
const photoSearch = 'animal'
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=${photoSearch}`

// Check if image is loaded
const imageLoaded = () => {
    imagesLoaded++;
    if (imagesLoaded === totalImages){
        ready = true;
        loader.hidden = true;
    }
}

// Helper function to set attributes on DOM elements
const setAttributes = (element, attributes) => {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create elements for Links & Photos, add to DOM
const displayPhotos = () => {
    imagesLoaded = 0;
    totalImages = photosArray.length;
    //Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to unsplash
        const item = document.createElement('a');
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank', 
        });
        // Create <img> for photo
        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });
        // Event listener, check when each photo is finished loading
        img.addEventListener('load', imageLoaded );
        // Put <img> inside <a>, then both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
const getPhotos = async() => {
    try{
        const response = await fetch(apiURL);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        console.log(error)
    }
};


// Check to see if scrolling near bottom of page, load more photos
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhotos();
    }
})

//On load
getPhotos();