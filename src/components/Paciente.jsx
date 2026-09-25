import usePacientes from "../hooks/usePacientes";

const Paciente =({paciente})=>{
   const{sintomas,email,fecha,nombre,propietario,_id}=paciente;
   const {setEdicion,eliminarPaciente}=usePacientes();
//console.log(fecha);
const fomatearFecha =(fecha)=>{
    const nuevaFecha = new Date(fecha)
    return new Intl.DateTimeFormat('es-MX',{dateStyle:'long'}).format(nuevaFecha);

}

 //  console.log(paciente);
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-lg'>
        <p className='font-bold uppercase text-indigo-500 mb-3'> Nombre:<span 
        className='font-normal normal-case text-black'>{nombre}</span></p>
        
        <p className='font-bold uppercase text-indigo-500 mb-3'> Propietario:<span 
        className='font-normal normal-case text-black'>{propietario}</span></p>
        <p className='font-bold uppercase text-indigo-500 mb-3'> Email:<span 
        className='font-normal normal-case text-black'>{email}</span></p>

          <p className='font-bold uppercase text-indigo-500 mb-3'>Fecha de alta:<span 
        className='font-normal normal-case text-black'>{fomatearFecha(fecha)}</span></p>

          <p className='font-bold uppercase text-indigo-500 mb-3'>Sintomas:<span 
        className='font-normal normal-case text-black'>{sintomas}</span></p>
  
           <div className="flex justify-between my-5">
            <button
            className=" py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase" type="button"
            onClick={()=>setEdicion(paciente)}>
                Editar
            </button>
             <button
            className=" py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase" type="button"
            onClick={()=>eliminarPaciente(_id)}>
                Eliminar
            </button>
           </div>
    </div>

    
  );
};

export default Paciente;
