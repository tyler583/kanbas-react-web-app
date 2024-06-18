import { Navigate, Route, Routes } from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "./styles.css";
import { useState } from "react";
// import * as db from "./Database";
import store from "./store";
import { Provider } from "react-redux";
import * as client from "./Courses/client";
import { useEffect } from "react";
import Account from "./Account";
import Session from "./Account/Session";
import ProtectedRoute from "./Account/ProtectedRoute";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);

  const fetchCourses = async () => {
    const courses = await client.fetchAllCourses();
    setCourses(courses);
  };

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });
  const addNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    setCourses([newCourse, ...courses]);
  };
  const deleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await client.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Provider store={store}>
      <Session>
        <div id="wd-kanbas" className="h-100">
          <div className="d-flex h-100">
            <div className="bg-black d-none d-md-block h-100">
              <KanbasNavigation />
            </div>
            <div className="flex-fill p-4">
              <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account/*" element={<Account />} />
                <Route
                  path="Dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                      />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="Courses/:cid/*"
                  element={
                    <ProtectedRoute>
                      <Courses courses={courses} />
                    </ProtectedRoute>
                  }
                />
                <Route path="Calendar" element={<h1>Calendar</h1>} />
                <Route path="Inbox" element={<h1>Inbox</h1>} />
              </Routes>
            </div>
          </div>
        </div>
      </Session>
    </Provider>
  );
}