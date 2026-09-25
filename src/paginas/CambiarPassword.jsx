
import AdminNav from "../components/AdminNav"
import Alerta from "../components/Alerta";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

const  CambiarPassword=()=> {
   const [alerta,setAlerta]=useState({});
   const {guardarPassword}=useAuth();
   const[password,setPassword]=useState({
    pwd_actual:'',
    pwd_nuevo:''
   });
  const handleSubmit=async (e)=>{
    e.preventDefault();
    if(Object.values(password).some(campo=>campo==='')){
      setAlerta({
        msg:'Todos los campos son obligatorios',
        error:true
      })
      return;
    }
    if(password.pwd_nuevo.length <6){
       setAlerta({
        msg:'El password debe tener minimo 6 caracteres',
        error:true
      })
      return;
    }
   const respuesta =await  guardarPassword(password);
   setAlerta(respuesta)
  }
  const {msg}=alerta;
  return (
    
       <>
       <AdminNav/>
       <h2 className="font-bold text-3xl text-center mt-10">Cambiar Password</h2>
       <p className="text-xl mt-5 mb-10 text-center"> Modifica tu {''}
        <span className="text-indigo-600 font-bold">Password aqui</span>
       </p>

       <div className="flex justify-center">
                 <div className="w-full md:w-1/2 bg-white shadow rounded-lg p5">
                    {msg&& <Alerta alerta={alerta}/>}
                    <form className="my-3"
                    onSubmit={handleSubmit}
                    >
                       <div className="my-3">
                        <label className="uppercase font-bold text-gray-600 gap-5" for="nombre" >Password Actual</label>
                           <input  className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" type="password"
                             name="pwd_actual" placeholder="Escribe tu password actual" 
                             onChange={e=>setPassword({
                              ...password,
                              [e.target.name]:e.target.value
                             })}
                             />
                           
       
                       </div>
                         <div className="my-3">
                        <label className="uppercase font-bold text-gray-600 gap-5" for="nombre" >Password Nuevo</label>
                           <input  className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" type="password"
                             name="pwd_nuevo" placeholder="Escribe tu nuevo password" 
                              onChange={e=>setPassword({
                              ...password,
                              [e.target.name]:e.target.value
                             })}/>
                           
       
                       </div>
                       
                       <input type="submit"value="Actualizar password" className="bg-indigo-600 px-10 py-3 font-bold 
                      rounded-lg uppercase w-full text-white  mt-5"/>
                    </form>
       
                 </div>
              </div>
       </>
    
  )
}

export default CambiarPassword
