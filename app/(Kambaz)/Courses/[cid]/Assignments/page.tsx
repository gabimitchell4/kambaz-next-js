"use client";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentDesc from "./AssignmentDesc";
import ListGroup from "react-bootstrap/ListGroup";
import { BsGripVertical } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import InputGroup from "react-bootstrap/InputGroup";
import InputGroupText from "react-bootstrap/InputGroupText";
import { Form } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { Row, Col } from "react-bootstrap"; 
export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="wd-assignment-top d-flex justify-content-between">
        <InputGroup className="w-25">
          <InputGroupText>
            <FaMagnifyingGlass />
          </InputGroupText>
          <Form.Control placeholder="Search..." id="wd-search-assignment" />
        </InputGroup>
        <div className="buttons">
          <button className="btn btn-outline-secondary bg-secondary rounded-1 me-1">
            <FaPlus /> Group
          </button>
          <button className="btn btn-danger rounded-1">
            <FaPlus /> Assignment
          </button>
        </div>
      </div>
      <br />

      <ListGroup className="wd-assignment rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-assignment p-0 mb-5 fs-5 border-gray">
          <div className="wd-assignment-left d-flex mt-3">
            <BsGripVertical className="ms-3 me-3 fs-3" />
            <IoIosArrowDown className="me-3 fs-3" />
            <span className="d-flex align-items-center"> ASSIGNMENTS</span>
            <div className="ms-auto d-flex align-items-flex-end me-3">
              <AssignmentControlButtons percent={40} />
            </div>
          </div>
          <br />
          <ListGroup className="wd-assignment rounded-0 w-100">
            <AssignmentDesc
              assignmentName="A1"
              moduleType="Multiple Modules"
              releaseDate="May 2th"
              releaseTime="12am"
              dueDate="May 10th"
              dueTime="11:59pm"
              points={100}
            />
            <AssignmentDesc
              assignmentName="A2"
              moduleType="Multiple Modules"
              releaseDate="May 6th"
              releaseTime="12am"
              dueDate="May 13th"
              dueTime="11:59pm"
              points={100}
            />
            <AssignmentDesc
              assignmentName="A3"
              moduleType="Multiple Modules"
              releaseDate="May 6th"
              releaseTime="12am"
              dueDate="May 15th"
              dueTime="11:59pm"
              points={100}
            />
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
