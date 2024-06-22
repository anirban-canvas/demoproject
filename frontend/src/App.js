

import {Route,Routes,Navigate, Outlet} from 'react-router-dom'
import Storefont from './pages/Storefont';
import Login from './pages/Login';
import Account from './pages/Account';
import Inventory from './pages/Inventory.jsx';
// import {  } from 'react-router-dom'

function ProtectedRoute(){
  console.log("Protected route calleed")
 let token=localStorage.getItem('token')

    // const auth={token:false}

    if (token==null||token==''){
     
      return <Navigate to='/login'/>
    }else{
      
      return <Outlet/>
    }

}


function App() {
  return (
    
      <Routes>
          <Route path='/login' Component={Login}/>
    
      <Route element={<ProtectedRoute/>}>
        <Route path='/home' Component={Storefont}/>
        <Route path='/account' Component={Account}/>
        <Route path='/inventory' Component={Inventory}/>
        </Route>
         
        
          
      </Routes>



  );
}

export default App;
