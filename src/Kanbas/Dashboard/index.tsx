export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>

          <br />

          <div className="wd-dashboard-course">
            <img src="/images/computerscience.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5001 Intensive Foundations of Computer Science
              </a>
              <p className="wd-dashboard-course-title">
                Foundations of Computer Science
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>

          <br />

          <div className="wd-dashboard-course">
            <img src="/images/math.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5002 Discrete Structures
              </a>
              <p className="wd-dashboard-course-title">
                Algebra, Logic, Probability and Algorithms
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>

          <br />

          <div className="wd-dashboard-course">
            <img src="/images/oop.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5004 Object Oriented Design
              </a>
              <p className="wd-dashboard-course-title">
                Class-based program design and the design of abstractions.
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>

          <br />

          <div className="wd-dashboard-course">
            <img src="/images/datastructure.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5008 Data Structure and Algorithms
              </a>
              <p className="wd-dashboard-course-title">
                Introduction to data structure and algorithm
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>

          <br />

          <div className="wd-dashboard-course">
            <img src="/images/lab.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5003 Fundations of Computer Science Lab
              </a>
              <p className="wd-dashboard-course-title">
                Recitation/Lab for CS5001
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>

          <br />

          <div className="wd-dashboard-course">
            <img src="/images/java.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5678 Java Fundamentals
              </a>
              <p className="wd-dashboard-course-title">
                Introduction to Java
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>

        </div>
      </div>
  );}
  