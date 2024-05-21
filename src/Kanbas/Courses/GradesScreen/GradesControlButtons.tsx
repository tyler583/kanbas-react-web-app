import "./styles.css";
import { HiCog6Tooth } from "react-icons/hi2";
import { CiImport } from "react-icons/ci";
import { CiExport } from "react-icons/ci";

export default function GradesControlButtons() {
    return (
        <div className="float-end">
            <button id="wd-cog" className="me-1 float-end btn btn-lg btn-secondary">
                <HiCog6Tooth className="fs-3"/>
            </button>
            <button id="wd-export" className="me-1 float-end btn btn-lg btn-secondary dropdown-toggle">
                <CiExport className="me-2"/>
                Export
            </button>
            <button id="wd-import" className="me-1 float-end btn btn-lg btn-secondary">
                <CiImport className="me-2"/>
                Import
            </button>
            
            
        </div>
    );
}


