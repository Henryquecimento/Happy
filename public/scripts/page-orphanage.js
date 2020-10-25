//fix the map / fixar o mapa;
const options = {
    dragging: false, 
    touchZoom: false, 
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
};

//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;


// create map
const map = L.map('mapid', options).setView([lat, lng], 15);

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

// create and add marker
L
.marker([lat, lng], {icon})
.addTo(map)


/* image gallery */

function selectImage(event) {  
     const button = event.currentTarget;

     //remove all '.active' classes
     const buttons = document.querySelectorAll('.images button');

     buttons.forEach((button) => { 
        button.classList.remove('active'); //forEach - for each button, remove the 'active'
     });

     //select the selected image
     const image = button.children[0]; // child with index 0
     const imageContainer= document.querySelector('.orphanage-details > img') //Get the first level of img / first image found

     //update the image container (big image on my page)
     imageContainer.src = image.src

     //add the '.active' to the clicked button
     button.classList.add('active');

}