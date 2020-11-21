
//import {store} from '../../reducers/store'

//creates individual marker with an infowindow attached
// most operations use the type field to filter
//key is now required for delete

/*options, maybe do typeScript for only this file 
options ={
    icon: svg, // Icon svg
    content: html string // for what to put into the information window
    type: string // ID for delete and direction operations
    loading: bool // 
    info: object // Specific for this one, 
}
*/

const createMarker = (google, position, key, options) => {
    
    //TODO: make a marker options function that delas with
    //all the options that go directly inside the marker


    const icon = {
        scaledSize: new google.maps.Size(26, 26), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(26/2, 26/2)
      };

    const type = options?.type?options.type:"generic"


    const marker = new google.maps.Marker({
        position,
        map: google.map, 
        icon
    });

    //return is later  placed into state
    return {
        marker,
        position,
        type,
        key
    }
}

export default createMarker