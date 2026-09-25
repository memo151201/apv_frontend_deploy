
import {BrowserRouter,Routes,Route}from 'react-router-dom';
import AuthLayout from './layout/AuthLayout.jsx';
import RutaProtegida from './layout/RutaProtegida.jsx';
import Login from './paginas/Login.jsx';
import ConfirmarCuenta from './paginas/ConfirmarCuenta.jsx';
import Registrar from './paginas/Registrar.jsx';
import OlvidePassword from './paginas/OlvidePassword.jsx';
import NuevoPassword from './paginas/NuevoPassword.jsx';

import AdminisitrarPacientes from './paginas/AdminisitrarPacientes';
import CambiarPassword from './paginas/CambiarPassword';
import EditarPerfil from './paginas/EditarPerfil';
import { AuthProvider } from './context/AuthProvider';
import {PacienteProvider}from './context/PacientesProvides';
function App() {
 
    return (
    <BrowserRouter>
      <AuthProvider>
        <PacienteProvider>

      
          <Routes>
              <Route path="/" element={<AuthLayout/>}>  
                <Route index element ={<Login/>}/>
                <Route path="registrar" element={<Registrar/>}/>
                <Route path="olvide-password" element={<OlvidePassword/>}/>
                <Route path="olvide-password/:token" element={<NuevoPassword/>}/>
                <Route path="confirmar/:id" element={<ConfirmarCuenta/>}/>
                          
              </Route>
              <Route path="/admin" element={<RutaProtegida/>}>
                      <Route index element={<AdminisitrarPacientes/>}/>
                      <Route path="perfil" element={<EditarPerfil/>}/>
                      <Route path="cambiar-password" element={<CambiarPassword/>}/>
                       
              </Route>
            </Routes>
         </PacienteProvider>
      </AuthProvider>
    
    </BrowserRouter>


    )


}

export default App;
