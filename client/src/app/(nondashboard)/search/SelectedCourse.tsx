import React from "react";

const SelectedCourse = ({ course, handleEnrollNow }: SelectedCourseProps) => {
  return (
    <div className="selected-course">
      <div>
        <h3 className="selected-course__title">{course.title}</h3>
        <p className="selected-course__author">
          By {course.teacherName} |{" "}
          <span className="selected-course__enrollment-count">
            {course?.enrollments?.length}
          </span>
        </p>
      </div>
      <div className="selected-course__content">
        
      </div>
    </div>
  );
};

export default SelectedCourse;
