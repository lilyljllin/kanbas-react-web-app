export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <div className="m-3">
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses" className="row">
          <div className="row row-cols-md-5 g-4">

            <div className="wd-dashboard-course col" style={{width: "270px"}}>
            <div className="card" style={{height: "350px"}}>
              <img src="/images/reactjs.jpg"  height={150}/>
              <div className="card-body d-flex flex-column">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary mt-auto align-self-start"> Go </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{width: "270px"}}>
            <div className="card" style={{height: "350px"}}>
              <img src="/images/computerscience.jpg" height={150} />
              <div className="card-body d-flex flex-column">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                  CS5001 Intensive Foundations of Computer Science
                </a>
                <p className="wd-dashboard-course-title card-text">
                Foundations of Computer Science
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary mt-auto align-self-start"> Go </a>
              </div>
            </div>
          </div>
  
          <div className="wd-dashboard-course col" style={{width: "270px"}}>
            <div className="card" style={{height: "350px"}}>
              <img src="/images/math.jpg" height={150} />
              <div className="card-body d-flex flex-column">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                  CS5002 Discrete Structures
                </a>
                <p className="wd-dashboard-course-title card-text">
                Algebra, Logic, Probability and Algorithms
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary mt-auto align-self-start"> Go </a>
              </div>
            </div>
          </div>
          
          <div className="wd-dashboard-course col" style={{width: "270px"}}>
            <div className="card" style={{height: "350px"}}>
              <img src="/images/oop.jpg" height={150} />
              <div className="card-body d-flex flex-column">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                  CS5004 Object Oriented Design
                </a>
                <p className="wd-dashboard-course-title card-text">
                Class-based program design and the design of abstractions.
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary mt-auto align-self-start"> Go </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{width: "270px"}}>
            <div className="card" style={{height: "350px"}}>
              <img src="/images/datastructure.jpg" height={150} />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                  CS5008 Data Structure and Algorithms
                </a>
                <p className="wd-dashboard-course-title card-text">
                Introduction to data structure and algorithm
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary mt-auto align-self-start"> Go </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{width: "270px"}}>
            <div className="card" style={{height: "350px"}}>
              <img src="/images/lab.jpg" height={150} />
              <div className="card-body d-flex flex-column">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                  CS5003 Fundations of Computer Science Lab
                  </a>
                <p className="wd-dashboard-course-title card-text">
                Recitation/Lab for CS5001
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary mt-auto align-self-start"> Go </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{width: "270px"}}>
            <div className="card" style={{height: "350px"}}>
              <img src="/images/java.jpg" height={150} />
              <div className="card-body d-flex flex-column">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                  CS5678 Java Fundamentals
                  </a>
                <p className="wd-dashboard-course-title card-text">
                Introduction to Java
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary mt-auto align-self-start"> Go </a>
              </div>
            </div>
          </div>
          </div>

        </div>
        </div>
      </div>
  );}
  