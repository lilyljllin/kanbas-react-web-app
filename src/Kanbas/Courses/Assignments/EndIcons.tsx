import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import DeleteDialog from "./DeleteDialog";
import { deleteAssignment } from "./reducer"
import { useDispatch } from "react-redux"
import { useState } from "react";

export default function EndIcons({assignmentTitle, aID} : {assignmentTitle: string, aID: string}) {  
  const dispatch = useDispatch();
  const modalID= `delete-dialog-${aID}`;

  return (
    <div className="ms-auto d-flex">
      <FaTrash className="text-danger me-2 mb-1" onClick = {(event) => event.preventDefault()} data-bs-toggle="modal" data-bs-target={`#${modalID}`} />
      {/* <FaTrash className="text-danger me-2 mb-1" onClick = {(event) => {event.preventDefault(); dispatch(deleteAssignment(aID));}} /> */}
        <GreenCheckmark />
        <IoEllipsisVertical className="fs-4"/>
        <DeleteDialog  dialogTitle="Delete Assignment" assignmentTitle={assignmentTitle} aID={aID} modalID={modalID}/>
      </div>
    
);}
