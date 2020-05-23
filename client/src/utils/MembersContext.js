import React, { useState } from 'react';

export const MembersContext = React.createContext();

export const MembersContextProvider = (props) => {
    const [membersContext, setMembersContext] = useState();

    return (
        <MembersContext.Provider value={{membersContext, setMembersContext}}>
            {props.children}
        </MembersContext.Provider>
    );
}
