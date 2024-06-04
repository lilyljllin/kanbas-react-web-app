import { deleteAssignment } from "./reducer"
import { useDispatch } from "react-redux"
export default function DeleteDialog({ dialogTitle, assignmentTitle, aID, modalID}: { dialogTitle: string, assignmentTitle: string, aID: string, modalID: string}) {
    const dispatch = useDispatch();
    return (
        
        <div id={modalID} className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            {dialogTitle}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={(event) => event.preventDefault()}></button>
                    </div>
                    <div className="modal-body">
                        <p>{`Press "Yes" to delete ${assignmentTitle}. Press "No" to cancel.`}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={(event) => event.preventDefault()}>
                            No </button>
                        <button onClick={(event) => {event.preventDefault(); dispatch(deleteAssignment(aID))}} type="button" data-bs-dismiss="modal" className="btn btn-danger">
                            Yes </button>
                    </div>
                </div>
            </div>
        </div>
    );
}