import { Outlet } from "react-router-dom";

const AuthLayout=()=>{
    return (
    <>  


       <h1>Administrar de Pacientes de Veterinario</h1>
        <main className="container mx-auto md:grid md:grid-cols-2 mt-5 gap-12 items-center">
            <Outlet/>
        </main>
    
    
    
    </>

    )
    
    ;
}


export default AuthLayout;