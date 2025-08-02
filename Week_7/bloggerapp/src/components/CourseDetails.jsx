import React from 'react';

function CourseDetails({ courses }) {
  if (courses.length === 0) {
    return (
      <div className="section">
        <h1>Course Details</h1>
        <p>No courses available</p>
      </div>
    );
  }

  return (
    <div className="section">
      <h1>Course Details</h1>
      {courses.map(course => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
