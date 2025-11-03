"use client";
import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa";
import { usePathname } from "next/navigation";
export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid, aid } = useParams();
  const { courses } = useSelector(
    (state: any) =>
      state.coursesReducer as { courses: { _id: string; name: string }[] }
  );
  const { assignments } = useSelector(
    (state: any) =>
      state.assignmentsReducer as {
        assignments: { _id: string; title: string; course: string }[];
      }
  );
  console.log("CoursesLayout courses:", courses);
  const course = courses.find(
    (course: { _id: string; name: string }) => course._id === cid
  );
  const pathname = usePathname();
  const assignment = assignments.find(
    (assignment: { _id: string; title: string; course: string }) =>
      assignment._id === aid
  );
  console.log("CoursesLayout course:", course);
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course {course?.name} &gt; {assignment?.title}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
