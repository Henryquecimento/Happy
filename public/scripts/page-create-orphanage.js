// create map
const map = L.map('mapid').setView([-8.7441609, -63.8783502], 15);

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
});

let marker;

//create and add marker
map.on('click', (event) => { 
    
    const lat = event.latlng.lat; //get the latitude -- 
    const lng = event.latlng.lng; //get the longitude --

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;


    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map);

});



// adding the photos fields 

function addPhotoField() {

    //get the photo container - #images
    const container = document.querySelector('#images')

    //get the container to duplicate - .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload');

    //Do the last added image clone
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
    
    //Verificate if the field is empty, if it's true, don't add to the image container 
    const input =   newFieldContainer.children[0]

    if(input.value == '') {
        return //return with nothing/ End the application
    }

    //Clean the field before to add the images container

    input.value = "" /* Get the first child (input - index 0) and putting the empty value*/
  
    //Add the clone to the container - #images
    container.appendChild(newFieldContainer)
}


function deleteField (event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');
    
    if(fieldsContainer.length < 2) { //ou <= 1 ---
       
        //Clean the field's value
        span.parentNode.children[0].value = ''; 
        return
    }
 
    //Delete the field / delete the all .new-upload
    span.parentNode.remove();
     
}

// Select yes or no 

function toggleSelect (event) {

    //Remove the class .active(dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach((button) => {
        button.classList.remove('active');
    });

    //Put the class .active in this clicked button
    const button = event.currentTarget;
    button.classList.add('active');

    // Update my input hidden with the selected value

    const input = document.querySelector("[name=open_on_weekends]");

    // Verificate if yes or no

    input.value = button.dataset.value;

}
