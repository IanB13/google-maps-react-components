import React, {useContext, useEffect} from 'react'
import createMarker from './create'
import {MapContext} from '../../state/mapState'
import cleanup from '../infoWindow/cleanup'
import InfoWindow from '../infoWindow/InfoWindow'


//MarkerOptions
// https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions

//TODO: figure out better options and marker options naming
const Marker = ({ postion, type, markerKey, markerOptions, children }) => {

    //gets google state from store, updates 
    const {state,dispatch} = useContext(MapContext)
    const google = state.google



    //useEffect add and deletes map markers on re-render
   useEffect(() => {  
       //allows use of google in options
       if (typeof (markerOptions) === 'function') {
           markerOptions = markerOptions(google)
       }
        const marker = createMarker(google,postion, markerKey,type, markerOptions)
        dispatch({type: "ADD_MARKER", data: marker})
        
        return (() => {
            dispatch({type: "DELETE_MARKER", markerKey})
            cleanup(state.cleanup)
            dispatch({type: "CLEAN_UP"})
        })
    
    /* state.cleanup is not included in useEffect dependancy array, 
    would cause useEffect to trigger too much causing premature 
    deletion of infowindow dom nodes */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch,google,markerKey,type,postion ,markerOptions]) 

    if(children){
    return (
        <InfoWindow markerKey = {markerKey}>
            {children}
        </InfoWindow>
    )
    }
    else{
        return null
    }
}


export default Marker