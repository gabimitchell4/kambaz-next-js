import { Row, Col } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  const people = [
    {
      firstName: "Tony",
      lastName: "Stark",
      loginId: "001234561S",
      section: "S101",
      role: "STUDENT",
      lastActivity: "2020-10-01",
      totalActivity: "10:21:32",
    },
    {
      firstName: "Bruce",
      lastName: "Wayne",
      loginId: "001234562B",
      section: "S102",
      role: "STUDENT",
      lastActivity: "2020-10-02",
      totalActivity: "12:45:10",
    },
    {
      firstName: "Steve",
      lastName: "Rogers",
      loginId: "001234563S",
      section: "S103",
      role: "STUDENT",
      lastActivity: "2020-10-03",
      totalActivity: "15:30:45",
    },
  ];

  return (
    <div id="wd-people-table">
      <Row className="fw-bold border-bottom pb-2 mb-3">
        <Col>Name</Col>
        <Col>Login ID</Col>
        <Col>Section</Col>
        <Col>Role</Col>
        <Col>Last Activity</Col>
        <Col>Total Activity</Col>
      </Row>
      {people.map((person, index) => (
        <Row key={index} className="align-items-center border-bottom py-2">
          <Col className="text-nowrap">
            <FaUserCircle className="me-2 fs-1 text-secondary" />
            <span>{person.firstName}</span> <span>{person.lastName}</span>
          </Col>
          <Col>{person.loginId}</Col>
          <Col>{person.section}</Col>
          <Col>{person.role}</Col>
          <Col>{person.lastActivity}</Col>
          <Col>{person.totalActivity}</Col>
        </Row>
      ))}
    </div>
  );
}