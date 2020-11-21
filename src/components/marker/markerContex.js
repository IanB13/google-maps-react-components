// Context.js
import React from "react";

const initialState = {"hello":12}

const MarkerContext = React.createContext(initialState);

const MarkerProvider = ({ children }) => {

    return (
        <MarkerContext.Provider value={{ initialState }}>
            {children}
        </MarkerContext.Provider>
    );
}

export { MarkerContext, MarkerProvider };