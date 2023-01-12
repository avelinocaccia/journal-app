
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { useCheckAuth } from '../hooks'
import { JournalRoutes } from '../jorunal/routes/JournalRoutes'
import { CheckingAuth } from '../ui'

export const AppRouter = () => {

  const {status} = useCheckAuth()




  if ( status === 'checking') {
    return <CheckingAuth />
  }
  
  
  return (
    <Routes>
        
        {
          (status === 'autenticado')
          ?<Route path='/*' element={<JournalRoutes />} />
          :<Route path='/auth/*' element={<AuthRoutes />} />
          
        }

        <Route path='/*' element={<Navigate to='/auth/login' />} />

    </Routes>

  )
}
