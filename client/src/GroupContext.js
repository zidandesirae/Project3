import React, { useState } from 'react';

export const GroupContext = React.createContext();

export const GroupContextProvider = (props) => {
    const [groupContext, setGroupContext] = useState();

    return (
        <GroupContext.Provider value={{groupContext, setGroupContext}}>
            {props.children}
        </GroupContext.Provider>
    );
}
