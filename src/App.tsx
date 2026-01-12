import HomePage from './views/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './views/JobsPage'
import NotFoundPage from './views/NotFoundPage'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path ='/' element ={<MainLayout />}>
    <Route index element = {<HomePage/>}/>
    <Route path='/jobs' element = {<JobsPage/>}/>
    <Route path='*' element = {<NotFoundPage/>}/>
  </Route>
)
)


const App = () => {
  const names = ['Joplin', 'lokesh', 'sachin']
  const styles = {
    color: 'red',
    fontSize: '55px',
  }
  return <RouterProvider router={router} />
}

export default App