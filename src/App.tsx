import HomePage from './views/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './views/JobsPage'
import NotFoundPage from './views/NotFoundPage'
import JobPage, {jobLoader} from './views/JobPage'
import AddJobPage from './views/AddJobPage';
import EditJobPage from './views/EditJobPage'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'


const App = () => {
  // Add new job
const addJob = async (newJob:any) =>{
  const res = await fetch('/api/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newJob)
  })
  return;
};

// Delete job
const deleteJob = async (id) =>{
  const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    })
    return;
}

// Updates job
const updateJob = async (job)=>{
  const res = await fetch(`/api/jobs/${job.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(job)
  })
  return;

}

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path ='/' element ={<MainLayout />}>
    <Route index element = {<HomePage/>}/>
    <Route path='/jobs' element = {<JobsPage/>}/>
    <Route path='/add-job' element = {<AddJobPage addJobSubmit = {addJob}/>}/>
    <Route path='/jobs/:id' element = {<JobPage deleteJob = {deleteJob}/>} loader = {jobLoader}/>
    <Route path='/edit-job/:id' element = {<EditJobPage updateJobSubmit={updateJob}/>} loader = {jobLoader}/>
    <Route path='*' element = {<NotFoundPage/>}/>
  </Route>
)
)
  return <RouterProvider router={router} />
}

export default App