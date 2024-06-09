import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const[module, setModule] = useState({
        id: "M101",
    name: "Introduction to Rocket Propulsion",
    description: "Basic principles of rocket propulsion and rocket engines.",
    course: "RS101",
    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
    const handleCheckboxChange = (event: any) => {
        setAssignment({ ...assignment, completed: event.target.checked });
    };
    return (
        <div>
            <h3 id="wd-working-with-objects">Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                value={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })} />
            <hr />

            <a id="wd-update-assignment-score"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score.toString()}`}>
                Update Score
            </a>
            <input type="number" className="form-control w-75" id="wd-assignment-score"
                value={assignment.score} onChange={(e) =>
                    setAssignment({ ...assignment, score: parseInt(e.target.value) })} />
            <hr />
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="completed-switch" 
            checked={assignment.completed} onChange={handleCheckboxChange}/>
            <label className="form-check-label" htmlFor="completed-switch">Completed</label>
            
            <a id="wd-update-assignment-completed"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed + ""}`}>
                Update Completed
            </a>
            </div>
            <hr/>
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a><hr />
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a><hr />
            <h4>Retrieving Scores</h4>
            <a id="wd-retrieve-assignment-score" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/score`}>
                Get Score
            </a><hr />
            <h4>Retrieving Completed</h4>
            <a id="wd-retrieve-assignment-completed" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/completed`}>
                Get Completed
            </a><hr />

            <div>
            <h3 id="wd-working-with-modules">Modules</h3>
            <h4>Modifying Module Name</h4>
                <a id="wd-update-module-name" className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/name/${module.name}`}>
                    Update Module Name
                </a>
                <input className="form-control w-75" id="wd-module-name"
                value = {module.name} onChange={(e) => 
                setModule({...module, name: e.target.value})}/>
                <hr/>
                <h4>Modifying Module Description</h4>
                <a id="wd-update-module-description" className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/description/${module.description}`}>
                    Update Module Description
                </a>
                <input className="form-control w-75" id="wd-module-name"
                value = {module.description} onChange={(e) => 
                setModule({...module, description: e.target.value})}/>
                <hr/>
                <h4>Redtrieving Modules</h4>
                <a id="wd-retrieve-modules" className="btn btn-primary"
                    href={`${REMOTE_SERVER}/lab5/module`}>
                    Get Module
                </a> <hr />
                <h4>Retrieving Module Name</h4>
                <a id="wd-retrieve-module-name" className="btn btn-primary"
                    href={`${REMOTE_SERVER}/lab5/module/name`}>
                    Get Module Name
                </a> <hr />
                <h4>Retrieving Module Description</h4>
                <a id="wd-retrieve-module-description" className="btn btn-primary"
                    href={`${REMOTE_SERVER}/lab5/module/description`}>
                    Get Module Description
                </a> <hr />
                
            </div>
        </div>
    );
}
