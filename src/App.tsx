import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'


const App = () => {
  const names = ['Joplin', 'lokesh', 'sachin']
  const styles = {
    color: 'red',
    fontSize: '55px',
  }
  return (
    <>
      <Navbar/>
      <Hero/>
      <HomeCards/>
      <JobListings/>
      <ViewAllJobs/>

    {/* <!-- Hero --> */}
  

    {/* <!-- Developers and Employers --> */}
    

    {/* <!-- Browse Jobs --> */}
    
   

    </>
  )
}

export default App