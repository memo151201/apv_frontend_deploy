import { useEffect,useState } from "react";
import AdminNav from "../components/AdminNav"
import useAuth from '../hooks/useAuth'
import Alerta from "../components/Alerta";

const  EditarPerfil= () =>{
    const  {auth,actualizarPerfil} =useAuth();
    const [perfil,setPerfil]=useState({});
    const [alerta,setAlerta]=useState({})

    useEffect(()=>{
        setPerfil(auth)

    },[auth])

    const handleSubmit= async e=>{
        e.preventDefault();
        const {nombre,email}=perfil;
        
        if([nombre,email].includes('')){
            console.log('obligatorios')
            setAlerta({
                msg:"Email Nombre son obligatorios",
                error:true
         } )
               return ;
        }
       const resultado =await actualizarPerfil(perfil);
     
       setAlerta(resultado);

    }
    const {msg}=alerta;
  return (
    
     <>
     <AdminNav/>
     <h2 className="font-bold text-3xl text-center mt-10">Edita tu Perfil</h2>
       <p className="text-xl mt-5 mb-10 text-center"> Modifica tu {''}
        <span className="text-indigo-600 font-bold">Perfil tu informacion aqui</span>
       </p>

       <div className="flex justify-center">
          <div className="w-full md:w-1/2 bg-white shadow rounded-lg p5">
             {msg&& <Alerta alerta={alerta}/>}
             <form className="my-3"
             onSubmit={handleSubmit}
             >
                <div className="my-3">
                 <label className="uppercase font-bold text-gray-600 gap-5" for="nombre" >Nombre</label>
                    <input  className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" type="text"
                      name="nombre" placeholder="Tu nombre" 
                      value ={perfil.nombre || ''}
                      onChange={e=>setPerfil({
                        ...perfil,[e.target.name]:e.target.value

                      })}/>
                    

                </div>
                <div className="my-3">
                 <label className="uppercase font-bold text-gray-600 gap-5" for="nombre"  >Sitio web</label>
                    <input  className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" type="text"
                      name="web" placeholder="Tu nombre"
                         value ={perfil.web || ''}
                      onChange={e=>setPerfil({
                        ...perfil,[e.target.name]:e.target.value

                      })} />
                </div>
                <div className="my-3">
                 <label className="uppercase font-bold text-gray-600 gap-5" for="nombre"  >Telefono</label>
                    <input  className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" type="text"
                      name="telefono" placeholder="Tu nombre"
                         value ={perfil.telefono || ''}
                      onChange={e=>setPerfil({
                        ...perfil,[e.target.name]:e.target.value

                      })} />
                </div>
                <div className="my-3">
                 <label className="uppercase font-bold text-gray-600 gap-5" for="nombre"  >Email</label>
                    <input  className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" type="text"
                      name="email" placeholder="Tu nombre"
                         value ={perfil.email || ''}
                      onChange={e=>setPerfil({
                        ...perfil,[e.target.name]:e.target.value

                      })} />
                </div>
                <input type="submit"value="guardar cambios" className="bg-indigo-600 px-10 py-3 font-bold 
               rounded-lg uppercase w-full text-white  mt-5"/>
             </form>

          </div>
       </div>
     </>
     
    
  )
}

export default EditarPerfil
