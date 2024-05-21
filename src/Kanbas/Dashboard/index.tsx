export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">



                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS1234 React JS
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack software developer
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>


                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5610
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Web Development
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>


                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS3000
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Algorithms and Data
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>


                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS3500
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Object Oriented Design
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>


                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS3200
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Database Design
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>


                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS3650
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Computer Systems
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>


                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS2500
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Fundamentals of Computer Science I
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>



                    
                </div>
            </div>
        </div>

    );
}
