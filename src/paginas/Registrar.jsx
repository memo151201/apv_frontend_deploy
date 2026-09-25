import {useState} from 'react'; 
import { Link } from "react-router-dom";
import Alerta  from '../components/Alerta.jsx';
import clienteAxios  from '../config/axios.jsx';
const Registrar = () => {
  const[nombre,setNombre]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[repetetirPassWord,setRepetetirPassWord]=useState('');
    const[alerta,setAlerta]=useState('');

    const handleSubmit= async e=>{
      e.preventDefault();
      if([nombre,email,password,repetetirPassWord].includes('')){
         setAlerta({msg:'Hay campos vacios',error:true})
         return;
      }
      if(password !=repetetirPassWord){
         setAlerta({msg:'Los password no son iguales',error:true})
         return
      }
      if(password.length<6){
          setAlerta({msg:'El password es muy corto agrega minimo 6 caractere',error:true})
      
      }
      setAlerta({});
      //crear el usuario en la api 

      try {
       
        await clienteAxios.post('/veterinarios',{nombre,email,password});
       setAlerta({mag:'creado correctamente,revisa correctamente,revisa tu email',
        email:false
       })
      
      } catch (error) {
          setAlerta({
            msg: error.response.data.msg,
            error:true
          })
      }

    }

    const {msg}=alerta;
  return (
    <>
   
            <div>
              <h1 className="text-indigo-600 font-black text-6xl">Crea tu Cuenta y Administra {""} <span className ="text-black">tus pacientes</span> </h1>
          
          
           </div>

          <div className="mt-20 md:shadow-lg  px-5 py-10 rounded-xl bg-white">
                {msg && <Alerta
                alerta={alerta}
                />}
                 <form onSubmit={handleSubmit}>
                    <div className="my-5">
                        <label className="uppercase text-gray-600 text-xl font-bold" for="">Nombre</label>
                       <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" type="text" placeholder="Tu nombre"
                      value={nombre}
                      onChange={e=>setNombre(e.target.value)} />
                    </div>
                    <div className="my-5">
                        <label className="uppercase text-gray-600 text-xl font-bold" for="">Email</label>
                       <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" type="text" placeholder="Email de Registro"
                       value={email}
                      onChange={e=>setEmail(e.target.value)}/>
                    </div>
                     <div>
                        <label className="uppercase text-gray-600 text-xl font-bold" for="">Password</label>
                       <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" type="password" placeholder="Tu password"
                       value={password}
                      onChange={e=>setPassword(e.target.value)}/>
                    </div>
                    
                      <div>
                        <label className="uppercase text-gray-600 text-xl font-bold" for="">Repetir Password</label>
                       <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" type="password" placeholder="Repite password"
                       value={repetetirPassWord}
                      onChange={e=>setRepetetirPassWord(e.target.value)}/>
                    </div>
                    

                    <input type="submit" value ="Crear cuenta" 
                    className=" bg-indigo-700 w-full py-3  px-10 rounded-xl text-white mt-5
                     uppercase  font-bold hover:cursor-pointer hover:bg-indigo-800 md:w-auto" />
                 </form>
                 <nav className="mt-5 lg:flex lg:justify-between">
                    <Link className="block text-center my-5 text-gray-500" to ="/">Ya tienes una cuenta?Inicia Sesion</Link>
                    <Link className="block text-center my-5  text-gray-500" to ="/olvide-password">Olvide mi Password</Link>
                 
                 </nav>

           </div>
   </>

         
  )
}

export default Registrar;
