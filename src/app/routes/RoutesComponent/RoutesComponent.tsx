import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routes } from 'src/config/routes'
import { selectProfile } from 'src/store/slices/profile/profile'


interface RoutesComponentProps {
    children: React.ReactNode
}

const RoutesComponent: FC<RoutesComponentProps> = ({children}) => {
  const getUser = useSelector(selectProfile)
  const role = getUser?.role ?? "user"
  return (
    <Routes>
      <Route path='/' element={children}>
        {routes.map(elem => 
          elem.auth 
          ?
            <Route 
                key={elem.path} 
                path={elem.path} 
                element={role === 'admin' || elem.role === role ? <elem.component/> :<Navigate to={'/error'} />}
            />
          :
          <Route 
                key={elem.path} 
                path={elem.path} 
                element={<elem.component/>}
            />
        )}
        <Route index element={<Navigate to="/products" />} />
      </Route>
    </Routes>
  )
}

export default RoutesComponent