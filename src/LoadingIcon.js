import React from 'react';
import ReactLoading from 'react-loading';
import "./LoadingIcon.css"
export default function LoadingIcon() {
    return (
    <div className="LoadingIcon">
    <ReactLoading type={"bubbles"} color={"#375990"} height={100} width={100} />
    </div>
    )
}


