import { createContext, useState } from "react";


export const Usecontext = createContext()


export default function UsecontextPriv({children}){
    
    const [username , setUsername] = useState('')
    const [password , setPasseord] = useState('')

    const value = {username , password , setUsername , setPasseord}
    return(
        <Usecontext.Provider value={value}>
            {children}
        </Usecontext.Provider>
    )
}