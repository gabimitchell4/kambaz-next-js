/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrollInCourse,
  unenrollFromCourse,
} from "../Courses/reducer";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import {
  Row,
  Col,
  Card,
  Button,
  CardTitle,
  CardImg,
  CardText,
  CardBody,
} from "react-bootstrap";
import * as client from "../Courses/client";

interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
  description: string;
}

export default function Dashboard() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const [courses, setCoursesState] = useState<Course[]>([]);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [enrollments, setEnrollments] = useState<string[]>([]); // Local state for enrollments

  const fetchAllCourses = async () => {
    try {
      const allCourses = await client.fetchAllCourses();
      setCoursesState(allCourses);
    } catch (error) {
      console.error("Error fetching all courses:", error);
    }
  };

  const fetchEnrollments = async () => {
    try {
      const userEnrollments = await client.getUserEnrollments(currentUser._id);
      setEnrollments(
        userEnrollments.map((enrollment: any) => enrollment.course)
      );
    } catch (error) {
      console.error("Error fetching enrollments:", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchEnrollments();
      fetchAllCourses();
    }
  }, [currentUser]);

  const isUserEnrolled = (courseId: string) => enrollments.includes(courseId);

  const toggleEnrollment = async (courseId: string) => {
    try {
      if (isUserEnrolled(courseId)) {
        await client.deleteEnrollment(currentUser._id, courseId);
        setEnrollments((prev) => prev.filter((id) => id !== courseId));
      } else {
        await client.addEnrollment(currentUser._id, courseId);
        setEnrollments((prev) => [...prev, courseId]);
      }
    } catch (error) {
      console.error("Error toggling enrollment:", error);
    }
  };

  const displayedCourses = showAllCourses
    ? courses
    : courses.filter((course) => enrollments.includes(course._id));
  console.log("Displayed enrollments:", enrollments);
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {currentUser && currentUser.role === "FACULTY" && (
        <>
          <h5>
            <Button
              className="btn btn-primary float-end"
              onClick={() => setShowAllCourses(!showAllCourses)}
            >
              {showAllCourses ? "My Courses" : "All Courses"}
            </Button>
            New Course
            <button
              className="btn btn-primary float-end me-2"
              id="wd-add-new-course-click"
              onClick={async () => {
                const newCourse = { ...course, _id: uuidv4() };
                const allCourses = await client.createCourse(newCourse);
                if (showAllCourses) {
                  setCoursesState(allCourses);
                }
              }}
            >
              Add
            </button>
            <button
              className="btn btn-warning me-2 float-end"
              id="wd-update-course-click"
              onClick={async () => {
                try {
                  await client.updateCourse(course);
                  if (showAllCourses) {
                    const allCourses = await client.fetchAllCourses();
                    setCoursesState(allCourses);
                  } else {
                    fetchEnrollments();
                  }
                } catch (error) {
                  console.error("Error updating course:", error);
                }
              }}
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            rows={3}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({displayedCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course: Course) => (
            <Col
              className="wd-dashboard-course"
              style={{ width: "300px" }}
              key={course._id}
            >
              <Card>
                <Link
                  href={`/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <CardImg
                    src="/images/reactjs.jpg"
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </CardText>
                    <Button variant="primary">Go</Button>
                    {currentUser.role === "FACULTY" && (
                      <>
                        <Button
                          onClick={async (event) => {
                            event.preventDefault();
                            try {
                              await client.deleteCourse(course._id);
                              fetchAllCourses();
                            } catch (error) {
                              console.error("Error deleting course:", error);
                            }
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </Button>
                        <Button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </Button>
                      </>
                    )}
                    <Button
                      className={`btn-${
                        isUserEnrolled(course._id) ? "danger" : "success"
                      } float-end mt-2 mb-2`}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleEnrollment(course._id);
                      }}
                    >
                      {isUserEnrolled(course._id) ? "Unenroll" : "Enroll"}
                    </Button>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
