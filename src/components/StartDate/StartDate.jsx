import React, {useContext} from 'react'
import { DataContext } from "../../context/DataProvider";

export const StartDate = () => {
const {avaliable,setAvaliable} = useContext(DataContext)


  const getDate= (e)=>{
    let date
    date =(new Date(e.target.value).getTime()/1000)+86400

    if(Number.isNaN(date)){
        setAvaliable({...avaliable,from:false,statusFrom:"" })

    }else{
        setAvaliable({...avaliable,from:date,statusFrom:e.target.value })
    }
    
  }

    return (
        <>
           <input value={avaliable.statusFrom} type="date"  onChange={getDate} /> 
           
        </>
    )
}
