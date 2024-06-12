import React from 'react'
import { CiFilter, CiEdit } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const Dataview = ({data , index }) => {
    return (
        <>
            <div className="colHeader DataNumber">{index+1}</div>
            <div className="colHeader">{data.paperTitle}</div>
            <div className="colHeader">{data.createdAt.split('T')[0]}</div>
            <div className="colHeader"><span className={data.status.status}>{data.status.status}</span></div>
            <div className="colHeader"><CiEdit /> | <FaRegEye /> | <MdDeleteOutline /></div>
        </>
    )
}

export default Dataview