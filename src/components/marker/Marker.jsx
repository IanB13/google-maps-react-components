import React, {useContext, useEffect} from 'react'
import createMarker from './create'
import {MapContext} from '../../state/mapState'
import cleanup from '../infoWindow/cleanup'
import InfoWindow from '../infoWindow/InfoWindow'

/*options, maybe do typeScript for only this file 
options ={
    icon: svg, // Icon svg
    content: html string // for what to put into the information window
    type: string // ID for delete and direction operations
    loading: bool // 
    info: object // Specific for this one, 
}
*/

const Marker = ({ postion, options, markerKey, children }) => {

    //gets google state from redux store, updates 
    const {state,dispatch} = useContext(MapContext)
    const google = state.google


    //useEffect add and deletes map markers on re-render
   useEffect(() => {  
        const marker = createMarker(google,postion, markerKey,options)
        dispatch({type: "ADD_MARKER", data: marker})
        
        return (() => {
            dispatch({type: "DELETE_MARKER", markerKey})
            cleanup(state.cleanup)
            dispatch({type: "CLEAN_UP"})
        })
    
    //doesn't have state.cleanup included, adding this would cause premature deletion
    // of infowindow dom nodes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch,google,markerKey,options,postion]) 

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