import React, { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routes } from 'src/config/routes'


interface RoutesComponentProps {
    children: React.ReactNode
}

const RoutesComponent: FC<RoutesComponentProps> = ({children}) => {
  return (
    <Routes>
      <Route path='/' element={children}>
        {routes.map(elem => {
          return (
            <Route 
              key={elem.path} 
              path={elem.path} 
              element={<elem.component/>}
            />
          )
        })}
        <Route index element={<Navigate to="/profile" />} />
      </Route>
    </Routes>
  )
}

export default RoutesComponent