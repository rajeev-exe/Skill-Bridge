import React from 'react'

const CourseList = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-4 text-3xl font-medium">Learn for the best</h2>
      <p>Discover our top-rated courses designed by industry experts to help you advance your career.</p>
      <Link className="bg-grey-500 hover:bg-grey-700 text-white font-bold py-2 px-4 rounded" to={'/courses-list'} onClick={()=> scrollTo(0,0)}  >View All Courses</Link>
    </div>
  )
}

export default CourseList