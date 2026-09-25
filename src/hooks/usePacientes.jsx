import {useContext}from 'react'
import PacientesContext from '../context/PacientesProvides';


const usePacientes=()=>{
    return useContext(PacientesContext)  //DISPONIBLE DE PROVIDES

}
export default usePacientes;