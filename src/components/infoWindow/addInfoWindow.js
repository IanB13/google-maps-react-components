import ReactDOM from 'react-dom'

//adds infowindow to existing marker, needs key
//TODO: add dispatch to unmount DOM component when component is unrendered
const addInfowindow = (state, dispatch, markerKey, children) => {
    const { markers, google } = state

    if (markers && google) {
        const marker = markers.filter((marker) => marker.key === markerKey)[0]?.marker
        if (marker) {

            const content = `<div id = ${markerKey}>`
            const infoWindow = new google.maps.InfoWindow({
                content
            });
            
            //Closes markers when another marker is opened
            marker.addListener('click', () => {

                infoWindow.open(google.map, marker);
            });

            //this is where the dom is created
            infoWindow.addListener('domready', () => {
                const target = document.getElementById(markerKey)
                dispatch({type:"ADD_TO_CLEANUP",target } )
                ReactDOM.render(children, target);
            }
            )

            return infoWindow
        }
    }
}

export default addInfowindow