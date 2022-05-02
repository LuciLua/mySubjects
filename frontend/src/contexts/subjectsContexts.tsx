// import React, { createContext, useContext, useState } from 'react';

// const AreaContext = createContext<string | undefined>('form')


// export default function AreaProvider({ children }) {

//     const [destiny, setDestiny] = useState("form")

//     return (
//         <AreaContext.Provider
//             value={{
//                 destiny,
//                 setDestiny
//             }}>

//             {children}

//         </AreaContext.Provider>
//     )
// }


// export function useDestiny() {
//     const context = useContext(AreaContext)
//     const { destiny, setDestiny } = context;

//     return { destiny, setDestiny }
// }


export default function contextBefore(){
    return(
        <>
        </>
    )
}