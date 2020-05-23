import React, { useState } from 'react';

export const UserContext = React.createContext();

export const UserContextProvider = (props) => {
    const [userContext, setUserContext] = useState();

    return (
        <UserContext.Provider value={{userContext, setUserContext}}>
            {props.children}
        </UserContext.Provider>
    );
}

