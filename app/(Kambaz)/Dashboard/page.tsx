import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              alt="react-img"
              src="/images/reactjs.jpg"
              width={200}
              height={150}
            />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/12345" className="wd-dashboard-course-link">
            <Image
              alt="writing-img"
              src="/images/writing.jpg"
              width={200}
              height={150}
            />
            <div>
              <h5> ENGW 3302 Advanced Writing </h5>
              <p className="wd-dashboard-course-title">
                Advanced writing in the Disciplines
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/123456" className="wd-dashboard-course-link">
            <Image
              alt="java-img"
              src="/images/java.jpg"
              width={200}
              height={150}
            />
            <div>
              <h5> CS4562 Java </h5>
              <p className="wd-dashboard-course-title">
                Back-end software engineer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234567" className="wd-dashboard-course-link">
            <Image
              alt="design-img"
              src="/images/design.jpg"
              width={200}
              height={150}
            />
            <div>
              <h5> ARTG1107 Design Tools </h5>
              <p className="wd-dashboard-course-title">UI/UX Designer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/12345678" className="wd-dashboard-course-link">
            <Image
              alt="digital_design-img"
              src="/images/digital_design.jpg"
              width={200}
              height={150}
            />
            <div>
              <h5> ARTG1122 Digital Design </h5>
              <p className="wd-dashboard-course-title">Graphic Designer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
      <div className="wd-dashboard-course">
          <Link href="/Courses/123456789" className="wd-dashboard-course-link">
            <Image
              alt="co-op-img"
              src="/images/coop.jpg"
              width={200}
              height={150}
            />
            <div>
              <h5> COOP2233 Co-op Essentials </h5>
              <p className="wd-dashboard-course-title">
                Co-op Clearence
              </p>
              <button> Go </button>
            </div>
          </Link>
          <div className="wd-dashboard-course">
          <Link href="/Courses/12345678910" className="wd-dashboard-course-link">
            <Image
              alt="c++-img"
              src="/images/cplus.jpg"
              width={200}
              height={150}
            />
            <div>
              <h5> ARTG1107 Design Tools </h5>
              <p className="wd-dashboard-course-title">
                UI/UX Designer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        </div>
    </div>
  );
}
