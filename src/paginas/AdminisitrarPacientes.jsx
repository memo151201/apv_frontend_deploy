import React from 'react'
import { useState } from 'react';
import Fomulario from '../components/Fomulario';
import ListadoPacinetes from '../components/ListadoPacientes';
function AdminisitrarPacientes() {
  const[mostrarFormulario,setMostrarFomrulario]=useState(false);
  return (
    <div className='flex flex-col md:flex-row'>
          <button
          type ="button"
          className='bg-indigo-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden' 
          onClick={()=>setMostrarFomrulario(!mostrarFormulario)}>{!mostrarFormulario ?'Mostrar formulario':'Ocultar formulario'}</button>
        <div className={`${mostrarFormulario ?'block' :'hidden'} md:block md:w-1/2 lg:w-2/5`}>
          <Fomulario/> 

         </div>
      <div className='md:w-1/2 lg:w-3/5'>
        <ListadoPacinetes/>
      </div>
    </div>
  )
}

export default AdminisitrarPacientes
