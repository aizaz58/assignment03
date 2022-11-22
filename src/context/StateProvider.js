import {useContext,createContext,useState} from 'react'

export const StateContext=createContext()

export const StateProvider=({children})=>{
    const [country, setCountry] = useState([])
    const [CountryIndex, setCountryIndex] = useState("")
   

   
return(
<StateContext.Provider value={{country,setCountry,setCountryIndex,CountryIndex}}>
    {children}
</StateContext.Provider>
)

}

export const useStateContext=()=>useContext(StateContext)