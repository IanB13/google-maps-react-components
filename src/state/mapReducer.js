let mapReducer = (state, action) => {
  switch (action.type) {
    case "INIT_MAP": {
      return { ...state, google: action.data }
    }
    case "ADD_MARKER": {
      const markers = state.markers
      const addedMarker = markers.concat(action.data)
      return { ...state, markers: addedMarker }
    }
    case "DELETE_MARKER": {
      const deletedMarkers = state.markers.filter(marker => (marker.key === action.markerKey))
      for (const marker of deletedMarkers) {
        marker.marker.setMap(null) //TODO: marker.marker is super confusing
      }
      const remainMarkers = state.markers.filter(marker => !(marker.key === action.markerKey))
      return { ...state, markers: remainMarkers }
    }
    //adds infowindow by key
    case "ADD_INFOWINDOW": {
      const markersWithAddedInfoWindow = state.markers.map(
        (marker) => {
          if (marker.key === action.key) {
            return ({ ...marker, infoWindow: action.infoWindow })
          }
          return { ...marker }
        })
      return { ...state, markers: markersWithAddedInfoWindow }
    }
    //return state
    //TODO: deletes infowindow by key
    case "DELETE_INFOWINDOW": {
      return state
    }
    case "ADD_TO_CLEANUP": {
      const cleanupArray = state.cleanup.concat(action.target)
      return { ...state, cleanup: cleanupArray }
    }
    case "CLEAN_UP": {
      return { ...state, cleanup: [] }
    }
    default:
      return state;
  }
};

export default mapReducer