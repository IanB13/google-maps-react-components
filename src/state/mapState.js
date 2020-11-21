import React, { useReducer } from "react";
import mapReducer from './mapReducer'

const initialState = { google: "loading", markers : [] , cleanup: []}

const MapContext = React.createContext(initialState);

const MapProvider = ({children}) => {

const [state, dispatch] = useReducer(mapReducer, initialState);

return (

   <MapContext.Provider value={{ state, dispatch }}>
      {children}
    </MapContext.Provider>
  );
}

export { MapContext , MapProvider };