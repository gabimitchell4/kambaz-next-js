import { useParams, useRouter } from "next/navigation";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ListGroup from "react-bootstrap/ListGroup";
import { BsGripVertical } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Assignment } from "../../../Database";
import { useSelector } from "react-redux";

interface AssignmentTextProps {
  assignment: Assignment;
  moduleType: string;
  releaseDate: string;
  dueDate: string;
  points: number;
}

export default function AssignmentDesc({
  assignment,
  moduleType,
  releaseDate,
  dueDate,
  points,
}: AssignmentTextProps) {
  const router = useRouter();
  const { cid } = useParams() as { cid: string };
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date);
  };

  const handleClick = () => {
    if (currentUser.role === "FACULTY") {
      router.push(`/Courses/${[cid]}/Assignments/${assignment._id}`);
    }
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
            {currentUser.role === "FACULTY" && (
              <HiOutlinePencilAlt className="me-3" />
            )}
          </div>

          <div className="d-flex flex-column">
            <span>{assignment.title}</span>
            <span className="me-3">
              {moduleType} | <strong>Not available until </strong>
              {formatDateTime(releaseDate)} | <br /> <strong>Due </strong>
              {formatDateTime(dueDate)} | {points} pts
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
