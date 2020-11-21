import addInfoWindow from "./addInfoWindow"
import {useContext,useEffect} from 'react'

import {MapContext} from '../../state/mapState'


const InfoWindow = ({markerKey, children}) =>{
    //re-renders on marker state change
    const {state,dispatch} = useContext(MapContext)


    useEffect( ()=>{
        if(state.markers){
            const keyMarker = state.markers.filter((marker) => marker.key === markerKey)

            if( keyMarker[0]){
                if(!keyMarker[0].infoWindow){
                    const infoWindow = addInfoWindow(state,dispatch, markerKey,children)
                    dispatch({ type:"ADD_INFOWINDOW", infoWindow, key: markerKey })
                }
            }
        }

        return( ()=>{
            dispatch({ type:"DELETE_INFOWINDOW", key: markerKey })
        })
    
    },[ state, dispatch, children, markerKey])

   return null
}

export default InfoWindow