import React, { useContext, useEffect, useRef } from 'react';
import {MapProvider,MapContext} from '../../state/mapState'
import GoogleMapsApiLoader from "google-maps-api-loader";

const WrapperMap = ({ apiKey, options,style, children  }) => {
    const mapRef = useRef()

    const {state,dispatch} = useContext(MapContext)

    const google = state.google

    //initializes map, only happens once
    useEffect(() => {
        const initMap = async (mapRef) => {
            const google = await GoogleMapsApiLoader({ apiKey })
            const map = new google.maps.Map(mapRef.current, options)
            dispatch({
                type: 'INIT_MAP',
                data:{
                    map,
                    maps:google.maps,
                    loading:false,
                }
            })
        }
        initMap(mapRef)
    }, [])

    return (
        <div className="map-overlay">
            <div ref={mapRef} className="google-map" style = {style} />
                { (google.loading=== false)
                    ? children
                    : <>"Map Loading"</>
                }
        </div>
    )
}

const Map =({apiKey, options,children , style }) =>{
    return(
    <MapProvider>
        <WrapperMap apiKey ={apiKey}  style = {style} options ={options}>
            {children}
        </WrapperMap>
    </MapProvider>
    )
}

export default Map