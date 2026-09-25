import { createContext,useState,useEffect } from "react";
import clienteAxios from '../config/axios';
import useAuth  from '../hooks/useAuth';
const PacienteContext =createContext();

export const PacienteProvider =({children})=>{
    const [pacientes,setPacientes]=useState([]);
    const [paciente,setPaciente]=useState({});
    const {auth}=useAuth();
   useEffect(()=>{
     const obtenerPaciente =async()=>{
        try {
            const token =localStorage.getItem('token');
            if(!token)return
             const config={
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${token}`
            
                }
            }
            const {data}=await clienteAxios('/pacientes',config);
            setPacientes(data)

        } catch (error) {
            console.log(error)
        }
     }
     obtenerPaciente();
   },[auth])//es muy importate agregar un auth por que entrara con los pacientes agregados al mismo que le dio de alta
   const eliminarPaciente =async id =>{
    const confirmar =confirm("Confirmas que deseas eliminar?")
    if(confirmar){
        try {
              const token =localStorage.getItem('token');
             const config={
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${token}`
            
                }
            }
            await clienteAxios.delete(`/pacientes/${id}`,config)
            setPacientes(pacientesActuales =>
                pacientesActuales.filter(pacienteState => pacienteState._id !== id)
            );
            if (paciente?._id === id) {
                setPaciente({});
            }
        } catch (error) {
            console.log(error);
            
        }
    }

   }
    const guardarPaciente = async (paciente)=>{
         const token =localStorage.getItem('token');
            const config={
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${token}`
            
                }
            }
        if(paciente.id){
          try {
            const {data}=await clienteAxios.put(`/pacientes/${paciente.id}`,paciente,
                config )
                        setPacientes(pacientesActuales => pacientesActuales.map(pacienteState =>
                                pacienteState._id === data._id ? data : pacienteState
                        ))
                        setPaciente({})
          } catch (error) {
            console.log(error)
            
          }
        }else{
                 try {
           
            
            const {data}=await clienteAxios.post('/pacientes',paciente,config);
            
            const {createdAt,updatedAt,__v,...pacienteAlmacenado}=data;//crear un nuevo objeto,anulando los parametro del parentesis
            console.log(data);
        setPacientes(pacientesActuales => [pacienteAlmacenado, ...pacientesActuales])
        } catch (error) {
            console.log(error.response.data.msg);
            
        }
        }
     
    }
const setEdicion =(paciente)=>{
    setPaciente(paciente)
}

    return(
      <PacienteContext.Provider
        value ={{
            pacientes,
            guardarPaciente,
            setEdicion,
            paciente,
            eliminarPaciente

        }}>

        {children}
      </PacienteContext.Provider>

    )

}

export default PacienteContext;