import {useContext,createContext,useState} from 'react'

export const StateContext=createContext()

export const StateProvider=({children})=>{
    const [country, setCountry] = useState([])
    let countryDataList=[]

   
return(
<StateContext.Provider value={{country,setCountry,countryDataList}}>
    {children}
</StateContext.Provider>
)

}

export const useStateContext=()=>useContext(StateContext)