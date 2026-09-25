import {useState,useEffect}from 'react';
import {useParams,Link}from 'react-router-dom';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios';
const NuevoPassword = () => {
const[password,setPassword]=useState('');
const[alerta,setAlerta]=useState({});
const params =useParams();
const [tokenValido,setTokenValido]=useState(false);
const[passwordModificado,setpasswordModificado]=useState(false)
const  {token} =params

useEffect(()=>{
  const comprobarToken = async ()=>{
    try {
       await clienteAxios(`/veterinarios/olvide-password/${token}`)
       setAlerta({
        msg:'Coloca tu Nuevo Password'
       })
       setTokenValido(true);
    } catch (error) {
      setAlerta({
        msg:'Hubo un error con el enlace',
        error:true
      })
    }

  }
  comprobarToken();
  },[])

  const {msg}=alerta;
  const handleSubmit=async (e)=>{
   e.preventDefault();
   if(password.length <6){
     setAlerta({
     msg:'El password debe ser minimo el 6 caracteres',
     error:true
   })
   return
   }

   try {
    const url =`/veterinarios/olvide-password/${token}`
    const {data}=await clienteAxios.post(url,{password})
    setpasswordModificado(true);
    setAlerta({
      msg:data.msg
    })
    
   } catch (error) {
    setAlerta({
      msg:error.response.data.msg,
      error:true
    })
    
   }
  
  }
return (
    
        <>
          <div>
              <h1 className="text-indigo-600 font-black text-6xl">Resta {""} <span className ="text-black">tus pacientes</span> </h1>
          
            
           </div>
           
            <div className="mt-20 md:shadow-lg  px-5 py-10 rounded-xl bg-white">
             {msg && <Alerta
                alerta={alerta}
                />}
              {tokenValido && (
              <>
                  <form
                  onSubmit={handleSubmit}>
                
                      <div>
                          <label className="uppercase text-gray-600 text-xl font-bold" for="">Nuevo Password</label>
                          <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" type="password" placeholder="Tu nuevo password"
                          value={password}
                          onChange={e=>setPassword(e.target.value)}/>
                        </div>

                        <input type="submit" value ="guardar nuevo password" 
                          className=" bg-indigo-700 w-full py-3  px-10 rounded-xl text-white mt-5
                          uppercase  font-bold hover:cursor-pointer hover:bg-indigo-800 md:w-auto" />
                    </form>

                        
                        
                      </> 
                            )
                    
                  }
                       {passwordModificado && 
                           <Link className="block text-center my-5 text-gray-500" to ="/">Iniciar sesion </Link>
                        
                         

                         } 

              
            

              
                </div>  
        
        </>
        
          
    
  )
};

export default NuevoPassword;