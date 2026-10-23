import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/students/Home'
import CourseList from './pages/students/CourseList'
import CourseDetails from './pages/students/CourseDetails'
import MyEnrollments from './pages/students/MyEnrollments'
import Player from './pages/students/Player'
import Loading from './components/students/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentEnrollments from './pages/educator/StudentsEnrolled'
import Navbar from './components/students/Navbar'
import { useMatch } from 'react-router-dom'

const App = () => {
  const isEducatorRoute = useMatch('/educator/*');
  return (
    <div className='text-default bg-white min-h-screen'>
      {!isEducatorRoute && <Navbar/>}
     <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/CourseList' element={<CourseList/>}/>
         <Route path='/CourseList/:input' element={<CourseList/>}/>
         <Route path='/Course/:id' element={<CourseDetails/>}/>
         <Route path='/MyEnrolledCourses' element={<MyEnrollments/>}/>
         <Route path='/Player/:courseId' element={<Player/>}/>
         <Route path='/Loading/:path' element={<Loading/>}/>
         <Route path='*' element={<h1>404 Not Found</h1>}/>


        <Route path='/educator' element={<Educator/>}>
           <Route path='educator' element={<Dashboard/>}/>
           <Route path='add-course' element={<AddCourse/>}/>
           <Route path='my-courses' element={<MyCourses/>}/>
           <Route path='student-enrollments' element={<StudentEnrollments/>}/>
        </Route>


     </Routes>
     
    </div>
  )
}

export default App