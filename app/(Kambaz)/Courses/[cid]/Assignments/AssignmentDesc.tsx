import { useParams, useRouter } from "next/navigation";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ListGroup from "react-bootstrap/ListGroup";
import { BsGripVertical } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";

interface AssignmentTextProps {
  assignmentName: string;
  moduleType: string;
  releaseDate: string;
  releaseTime: string;
  dueDate: string;
  dueTime: string;
  points: number;
}
export default function AssignmentDesc(
  {
    assignmentName,
    moduleType,
    releaseDate,
    releaseTime,
    dueDate,
    dueTime,
    points,
  }: AssignmentTextProps,
) {
  const router = useRouter();
  const { cid } = useParams() as { cid: string };

  const handleClick = () => {
    router.push(`/Courses/${[cid]}/Assignments/${assignmentName}`);
  };
  return (
    <div
      className="wd-assignment d-flex align-items-center"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="wd-assignment d-flex align-items-center w-100">
        <ListGroup.Item className="wd-lesson d-flex w-100 align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-3 fs-3" />
            <HiOutlinePencilAlt className="me-3" />
          </div>

          <div className="d-flex flex-column">
            <span>{assignmentName}</span>
            <span className="me-3">
              {moduleType} | <strong>Not available until </strong>
              {releaseDate} at {releaseTime} | <br /> <strong>Due </strong>
              {dueDate} at {dueTime} | {points} pts
            </span>
          </div>

          <div className="ms-auto">
            <LessonControlButtons />
          </div>
        </ListGroup.Item>
      </div>
    </div>
  );
}
