/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrollInCourse,
  unenrollFromCourse,
} from "../Courses/reducer";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Form,
} from "react-bootstrap";
import * as db from "../Database";

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
  // const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const { courses, enrollments } = useSelector(
    (state: any) => state.coursesReducer
  );
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

  const [showAllCourses, setShowAllCourses] = useState(false);

  const toggleEnrollment = (courseId: string) => {
    if (enrollments.some((enrollment: any) => enrollment.course === courseId)) {
      dispatch(unenrollFromCourse({ course: courseId, user: "currentUserId" }));
    } else {
      dispatch(
        enrollInCourse({
          _id: uuidv4(),
          user: "currentUserId",
          course: courseId,
        })
      );
    }
  };
  console.log("Enrollments:", enrollments);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
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
              onClick={() => {
                const newCourse = { ...course, _id: uuidv4() };
                dispatch(addNewCourse(newCourse));
              }}
            >
              {" "}
              Add{" "}
            </button>
            <button
              className="btn btn-warning  me-2 float-end"
              id="wd-update-course-click"
              onClick={() => {
                dispatch(updateCourse(course));
              }}
            >
              {" "}
              Update{" "}
            </button>
          </h5>

          <br />
          <Form.Control
            defaultValue={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <Form.Control
            as="textarea"
            defaultValue={course.description}
            rows={3}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
             <hr />
        </>
      )}
  
      {currentUser && currentUser.role === "STUDENT" && (
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShowAllCourses(!showAllCourses)}>
            Enrollments
          </Button>
        </div>
      )}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>{" "}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
            .filter(
              (course: any) =>
                showAllCourses ||
                enrollments.some(
                  (enrollment: any) => enrollment.course === course._id
                )
            )
            .map((course: Course) => (
              <Col
                className="wd-dashboard-course"
                style={{ width: "300px" }}
                key={course.name + course._id}
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
                        {course.name}{" "}
                      </CardTitle>
                      <CardText
                        className="wd-dashboard-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {course.description}{" "}
                      </CardText>
                      <Button variant="primary"> Go </Button>
                      {currentUser && currentUser.role === "FACULTY" && (
                        <>
                          <button
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {
                              event.preventDefault();
                              dispatch(deleteCourse(course._id));
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                          <button
                            id="wd-edit-course-click"
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </button>
                        </>
                      )}
                      {/* {currentUser.role === "STUDENT" && ( */}
                      <Button
                        className={`btn-${enrollments.some((enrollment: any) => enrollment.course === course._id) ? "danger" : "success"} float-end mt-2 mb-2`}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleEnrollment(course._id);
                        }}
                      >
                        {enrollments.some(
                          (enrollment: any) => enrollment.course === course._id
                        )
                          ? "Unenroll"
                          : "Enroll"}
                      </Button>
                      {/* )} */}
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
