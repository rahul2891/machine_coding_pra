import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const isAuthenticated = false;

// can you render these children like this? no you cannot why? because you are not passing the children as props to the protectedRoute component
// you need to create an Outlet component and pass the children to the outlet component
// the outlet component will render all the children

// but why you cannot pass children as props to the protectedRoute component?
   
//   return isAuthenticated ? children : <Navigate to='/login'/>;
return isAuthenticated ? <Outlet /> : <Navigate to='/login'/>;
}

export default ProtectedRoute