import React,{createContext, useContext} from 'react'

const Context = createContext()

const ContextProvider = ({children}) => {
    let nombre = 'pepe'
  return (
    <Context.Provider value={{nombre}}>
        {children}
    </Context.Provider>
  )
}

export const useCustomContext = () => useContext(Context)

export default ContextProvider