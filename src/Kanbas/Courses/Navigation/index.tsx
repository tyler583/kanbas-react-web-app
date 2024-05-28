

import "./index.css";
import { Link, useLocation, useParams } from 'react-router-dom';

export default function CoursesNavigation() {
    const { cid } = useParams();
    const { pathname } = useLocation();
    
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];
    
    return (
        <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
            {links.map(link => {
                const linkPath = `/Kanbas/Courses/${cid}/${link}`;
                const isActive = pathname === linkPath;

                return (
                    <Link 
                        key={link}
                        to={linkPath}
                        className={`list-group-item ${isActive ? 'active' : 'text-danger'} border-0`}
                    >
                        {link}
                    </Link>
                );
            })}
        </div>
    );
}

