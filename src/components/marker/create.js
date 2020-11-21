//creates individual marker with an infowindow attached
// most operations use the type field to filter
//key is now required for delete

const createMarker = (google, position, key, type = "generic", markerOptions) => {
    
    const marker = new google.maps.Marker({
        position,
        map: google.map, 
        ...markerOptions
    });

    return {
        marker,
        position,
        type,
        key
    }
}

export default createMarker