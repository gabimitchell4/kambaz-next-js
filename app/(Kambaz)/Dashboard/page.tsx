import Link from "next/link";
import Image from "next/image";
import { Row, Col, Card, Button } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (9)</h2>
      <hr />
      <Row id="wd-dashboard-courses" className="g-4">
        <Col md={4} sm={6}>
          <Card className="wd-dashboard-course border h-100 d-flex flex-column">
            <div
              className="card-img-top"
              style={{
                height: "200px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                alt="CS1234 React JS"
                src="/images/reactjs.jpg"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="card-body flex-grow-1">
              <h5 className="card-title">CS1234 React JS</h5>
              <p className="card-text">Full Stack software developer</p>
              <Link href="/Courses/1234">
                <Button variant="primary">Go</Button>
              </Link>
            </div>
          </Card>
        </Col>
        <Col md={4} sm={6}>
          <Card className="wd-dashboard-course border h-100 d-flex flex-column">
            <div
              className="card-img-top"
              style={{
                height: "200px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                alt="ENGW 3302 Advanced Writing"
                src="/images/writing.jpg"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="card-body flex-grow-1">
              <h5 className="card-title">ENGW 3302 Advanced Writing</h5>
              <p className="card-text">Advanced writing in the Disciplines</p>
              <Link href="/Courses/12345">
                <Button variant="primary">Go</Button>
              </Link>
            </div>
          </Card>
        </Col>
        <Col md={4} sm={6}>
          <Card className="wd-dashboard-course border h-100 d-flex flex-column">
            <div
              className="card-img-top"
              style={{
                height: "200px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                alt="CS4562 Java"
                src="/images/java.jpg"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="card-body flex-grow-1">
              <h5 className="card-title">CS4562 Java</h5>
              <p className="card-text">Back-end software engineer</p>
              <Link href="/Courses/123456">
                <Button variant="primary">Go</Button>
              </Link>
            </div>
          </Card>
        </Col>
        <Col md={4} sm={6}>
          <Card className="wd-dashboard-course border h-100 d-flex flex-column">
            <div
              className="card-img-top"
              style={{
                height: "200px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                alt="ARTG1107 Design Tools"
                src="/images/design.jpg"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="card-body flex-grow-1">
              <h5 className="card-title">ARTG1107 Design Tools</h5>
              <p className="card-text">UI/UX Designer</p>
              <Link href="/Courses/1234567">
                <Button variant="primary">Go</Button>
              </Link>
            </div>
          </Card>
        </Col>
        <Col md={4} sm={6}>
          <Card className="wd-dashboard-course border h-100 d-flex flex-column">
            <div
              className="card-img-top"
              style={{
                height: "200px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                alt="ARTG1122 Digital Design"
                src="/images/digital_design.jpg"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="card-body flex-grow-1">
              <h5 className="card-title">ARTG1122 Digital Design</h5>
              <p className="card-text">Graphic Designer</p>
              <Link href="/Courses/12345678">
                <Button variant="primary">Go</Button>
              </Link>
            </div>
          </Card>
        </Col>
        <Col md={4} sm={6}>
          <Card className="wd-dashboard-course border h-100 d-flex flex-column">
            <div
              className="card-img-top"
              style={{
                height: "200px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                alt="COOP2233 Co-op Essentials"
                src="/images/coop.jpg"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="card-body flex-grow-1">
              <h5 className="card-title">COOP2233 Co-op Essentials</h5>
              <p className="card-text">Co-op Clearance</p>
              <Link href="/Courses/123456789">
                <Button variant="primary">Go</Button>
              </Link>
            </div>
          </Card>
        </Col>
        <Col md={4} sm={6}>
          <Card className="wd-dashboard-course border h-100 d-flex flex-column">
            <div
              className="card-img-top"
              style={{
                height: "200px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                alt="CS2233 C++ Programming"
                src="/images/cplus.jpg"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="card-body flex-grow-1">
              <h5 className="card-title">CS2233 C++ Programming</h5>
              <p className="card-text">Software Engineer</p>
              <Link href="/Courses/12345678910">
                <Button variant="primary">Go</Button>
              </Link>
            </div>
          </Card>
        </Col>
        <Col md={4} sm={6}>
          <Card className="wd-dashboard-course border h-100 d-flex flex-column">
            <div
              className="card-img-top"
              style={{
                height: "200px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                alt="ARTG6633 3D Modeling"
                src="/images/modeling.jpg"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="card-body flex-grow-1">
              <h5 className="card-title">ARTG6633 3D Modeling</h5>
              <p className="card-text">Software Engineer</p>
              <Link href="/Courses/1234567891011">
                <Button variant="primary">Go</Button>
              </Link>
            </div>
          </Card>
        </Col>
        <Col md={4} sm={6}>
          <Card className="wd-dashboard-course border h-100 d-flex flex-column">
            <div
              className="card-img-top"
              style={{
                height: "200px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                alt="ARTG2233 Design Thinking"
                src="/images/designthinking.jpg"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="card-body flex-grow-1">
              <h5 className="card-title">ARTG2233 Design Thinking</h5>
              <p className="card-text">Software Engineer</p>
              <Link href="/Courses/12345678910">
                <Button variant="primary">Go</Button>
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
